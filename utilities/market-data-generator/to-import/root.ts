import AU_B from './AU-B.ts'
import AG_B from './AG-B.ts'
import AU_CB from './AU-CB.ts'
import AG_CB from './AG-CB.ts'

export default {
  tok: 'LXB',
  label: 'Lux Bullion',
  titleToken: '',
  ch: [
    {
      tok: 'AU',
      titleToken: 'Lux Gold',
      label: 'Lux Gold',
      img: 'AU_B',
      desc: "Forge your connection to the real world with Lux Gold, crafted with excellence in Dubai.",
      ch: [
        {
          tok: 'B',
          label: 'Minted Bar',
          ch: AU_B
        },
        {
          tok: 'C',
          label: 'Minted Coin',
          img: 'AU_C',
          ch: [
            {
              tok: '1-OZ',
              price: 1938,
            }
          ]
        },
        {
          tok: 'CB',
          label: 'Cast Bar',
          ch: AU_CB
        }
      ]
    },
    {
      tok: 'AG',
      img: 'AG_B',
      desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
      titleToken: 'Lux Silver',
      label: 'Lux Silver',
      ch: [
        {
          tok: 'B',
          label: 'Minted Bar',
          ch: AG_B
        }, 
        {
          tok: 'C',
          label: 'Minted Coin',
          img: 'AG_C',
          ch: [
            {
              tok: '1-OZ',
              price: 23.04,
            }
          ]
        },
        {
          tok: 'CB',
          label: 'Cast Bar',
          ch: AG_CB
        }
      ]
    }
  ], 
}