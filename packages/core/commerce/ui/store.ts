import { 
  action,
  computed, 
  makeObservable, 
  observable,
  reaction,
  type IReactionDisposer, 
} from 'mobx'

import type { CommerceService, LineItem, ObsLineItemRef } from '@hanzo/commerce/types'

const BUY = '700px'
const MICRO = '87px'
const BOTH = [MICRO, BUY]
const BUY_ONLY = [BUY]
const MICRO_ONLY = [MICRO]

type DrawerState = 'closed' | 'micro' | 'full' 
type SnapPoint = number | string

interface RecentActivity extends ObsLineItemRef {
  quantityChanged(sku: string, val: number, prevVal: number): void
}

interface SelectAndBuy {
  showVariants: (skuPath: string) => void
  hideVariants: () => void
  get currentSkuPath(): string | undefined
}

interface CommerceDrawer {

  get open(): boolean
  get state(): DrawerState 
  get closedByUser(): boolean
  setClosedByUser(b: boolean): void
  get modal(): boolean
  get points(): SnapPoint[] 
  get activePoint(): SnapPoint | null
    // Called by UI Gesture
  onActivePointChanged: (p: SnapPoint | null) => void
  get showCheckout(): boolean
  get showAdded(): boolean
  get showBuy(): boolean

  get microHeight(): SnapPoint
}

class CommerceUIStore implements 
  RecentActivity,
  SelectAndBuy,
  CommerceDrawer
{

  _currentSkuPath: string | undefined = undefined
  _closedByUser: boolean = false
  _checkingOut: boolean = false
  _ignoreStateChange: boolean = false
  _activePoint: SnapPoint | null = null 
  //_snapPoints: SnapPoint[] = []
  
  _activeItem: LineItem | undefined = undefined
  _reactionDisposers: IReactionDisposer[] = []
  _service: CommerceService

  constructor(s: CommerceService) {
    this._service = s
    makeObservable(this, {
      _currentSkuPath: observable,
      _activeItem: observable.ref, 
      _closedByUser: observable,
      _checkingOut: observable,
      showVariants: action,
      hideVariants: action,
      currentSkuPath: computed,
      quantityChanged: action,
      setClosedByUser: action,
      closedByUser: computed,
      checkingOut: computed,
      item: computed,
    })
  }

  initialize = (
    //pts: {micro: SnapPoint, full: SnapPoint},
  ): void => {
    //this._snapPoints = Object.values(pts)

    this._reactionDisposers.push(reaction(
      () => ( this.state ),
      (s) => {
        if (this.ignoreStateChange) {
          console.log(`STATE CHANGE to "${s}" (IGNORED)`)
          this.setIgnoreStateChange(false)
          return
        }
        else {
          console.log(`STATE CHANGE to "${s}" (UI REACTED)`)
          this._syncUIToState(s)
        }
      }
    ))
  }

  onActivePointChanged = (pt: SnapPoint | null): void => { 
    console.log("ON onActivePointChanged: ", pt)
    if (pt === MICRO && this.activePoint === BUY) {
      this.setIgnoreStateChange(true)
      this.hideVariants()  
    }
    else if (pt === BUY && this.activePoint === MICRO) {
      this.setIgnoreStateChange(true)
      this.showVariants(this.item?.sku ?? '')  
    }
    this.setActivePoint(pt)  
  }

  showVariants = (skuPath: string): void => {
    this._service.setCurrentItem(undefined)
    this._currentSkuPath = skuPath
    this._closedByUser = false
  } 

  hideVariants = (): void => { this._currentSkuPath = undefined }

  get currentSkuPath(): string | undefined { return this._currentSkuPath } 

  quantityChanged = (sku: string, val: number, oldVal: number): void  => {

    if (val === 0) {
      if (this._activeItem?.sku === sku) {
        this._activeItem = undefined
      }
      // otherwise ignore
    }
    else {
      if (!this._activeItem || this._activeItem.sku !== sku) {
        this._activeItem = this._service.getItemBySku(sku)
      }
    }
  } 

  get item(): LineItem | undefined { return this._activeItem }

  get closedByUser(): boolean { return this._closedByUser }
  setClosedByUser = (b: boolean): void => { this._closedByUser = b}

  get ignoreStateChange(): boolean { return this._ignoreStateChange }
  setIgnoreStateChange = (b: boolean): void => { this._ignoreStateChange = b}

  get checkingOut(): boolean { return this._checkingOut }
  setCheckingOut = (b: boolean): void => { this._checkingOut = b}

  get activePoint(): SnapPoint | null { return this._activePoint }
  setActivePoint = (pt: SnapPoint | null): void => { this._activePoint = pt}
   
  get points(): SnapPoint[] { 
    //return this._snapPoints 
    if (this.showBuy && !(this.showAdded || this.showCheckout)) {
      return BUY_ONLY
    }
    else if (!this.showBuy && !this.showAdded && this.showCheckout) {
      return MICRO_ONLY
    }
    return BOTH
  }

  _syncUIToState = (s: DrawerState) => {
    if (s === 'micro') {
      this.setActivePoint(this.points[0])
    }
    else if (s === 'full') {
      this.setActivePoint(this.points[this.points.length - 1])
    } 
  }

  get open(): boolean {
    return ( 
      !this.closedByUser 
      && 
      (this.showCheckout || this.showAdded || this.showBuy)
    )
  }

  get state(): DrawerState {
    if (this.showBuy) {
      return 'full'
    }
    else if (!this.closedByUser && (this.showAdded || this.showCheckout)) {
      return 'micro'
    }
    return 'closed'
  }

  get showBuy(): boolean {return !!this.currentSkuPath}
  get showAdded(): boolean { return !this._checkingOut && !!this.item}
  get showCheckout(): boolean { return !this._checkingOut && !this._service.cartEmpty}
  get modal(): boolean { return this.state !== 'micro'}

  get microHeight(): SnapPoint {
    return MICRO
  }

  dispose = () => {
    this._reactionDisposers.forEach((d) => {d()})
  }
}

export {
  CommerceUIStore,
  type CommerceDrawer,
  type RecentActivity,
  type SelectAndBuy,
}