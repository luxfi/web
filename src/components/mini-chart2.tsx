'use client'

import React from 'react'

import Script from 'next/script'

export type MiniChartWidgetProps = {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  locale?: string;
  dateRange?: string;
  colorTheme?: string;
  trendLineColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  largeChartUrl?: string;
}

const MiniChart2: React.FC<{
  widgetProps: MiniChartWidgetProps
}> = () => {

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"/>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/SILVER/?exchange=TVC" rel="noopener" target="_blank">
          <span className="blue-text">SILVER quotes</span>
        </a> 
        <span>by TradingView</span>
      </div>
      <Script 
        strategy="beforeInteractive" 
        src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" 
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "symbol": "TVC:SILVER",
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": "60M",
            "colorTheme": "dark",
            "trendLineColor": "rgba(255, 255, 255, 1)",
            "underLineColor": "rgba(255, 255, 255, 1)",
            "underLineBottomColor": "rgba(255, 255, 255, 0)",
            "isTransparent": true,
            "autosize": true,
            "largeChartUrl": ""
          }
          `,
        }}
      />
    </div>
  )
}


        {/*JSON.stringify({
          symbol: "TVC:SILVER",
          width: "100%",
          height: "100%",
          locale: "en",
          dateRange: "60M",
          colorTheme: "dark",
          trendLineColor: "rgba(255, 255, 255, 1)",
          underLineColor: "rgba(255, 255, 255, 1)",
          underLineBottomColor: "rgba(255, 255, 255, 0)",
          isTransparent: true,
          autosize: true,
          largeChartUrl: ""
        })*/}


export default MiniChart2

/*
{
"symbol": "TVC:SILVER",
"width": "100%",
"height": "100%",
"locale": "en",
"dateRange": "60M",
"colorTheme": "dark",
"trendLineColor": "rgba(255, 255, 255, 1)",
"underLineColor": "rgba(255, 255, 255, 1)",
"underLineBottomColor": "rgba(255, 255, 255, 0)",
"isTransparent": true,
"autosize": true,
"largeChartUrl": ""
}
*/