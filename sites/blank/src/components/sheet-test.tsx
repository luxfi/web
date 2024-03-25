'use client'
import React, { useState, useRef } from 'react'
import { Sheet, Header, Content, Footer, detents, Portal } from 'react-sheet-slide'

import { Button } from '@hanzo/ui/primitives'

import 'react-sheet-slide/style.css'

const SheetTest: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div id='RSS_BD' className="rss-backdrop_" >
      <Button type="button" onClick={() => setOpen(true)}>
        Open sheet
      </Button>
      <Portal>
        <Sheet
          ref={ref}
          open={open}
          onDismiss={() => setOpen(false)}
          selectedDetent={detents.fit}
          detents={props => [
            //detents.large(props),
            detents.fit(props)
          ]}
          useDarkMode={true}
          scrollingExpands={true}
        >
          <Header className="rss-header" scrolledClassName="rss-header-scrolled">Title</Header>
          <Content className="rss-content">
            <div style={{ padding: '54px 16px 24px' }}>
              <div>Add more storage to keep everything on online</div>
              <div>
                Online includes plenty of storage to keep all your data safe and
                features to protect your privacy.
              </div>
              <div>Learn More About Online</div>
            </div>
          </Content>
          <Footer className="rss-footer">
            <Button type="button" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Footer>
        </Sheet>
      </Portal>
    </div>
  )
}

export default SheetTest
