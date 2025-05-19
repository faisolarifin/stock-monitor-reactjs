import React, { useEffect, useRef } from 'react';

const MarketOverviewWidget = () => {
  const container = useRef();

  useEffect(() => {
    if (container.current) container.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = `{
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "id",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "250",
      "height": "100%",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(219, 219, 219, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [{
        "title": "Stock",
        "symbols": [
          { "s": "IDX:BBCA", "d": "Bank BCA" },
          { "s": "IDX:BBRI", "d": "Bank BRI" },
          { "s": "IDX:BMRI", "d": "Bank Mandiri" },
          { "s": "IDX:TLKM", "d": "Telkom Indonesia" },
          { "s": "IDX:ASII", "d": "Astra International" },
          { "s": "IDX:UNVR", "d": "Unilever Indonesia" }
        ]
      },
      {
        "title": "Forex",
        "symbols": [
          { "s": "FX_IDC:USDIDR", "d": "USD ke IDR" },
          { "s": "FX_IDC:JPYIDR", "d": "JPY ke IDR" },
          { "s": "FX_IDC:SGDIDR", "d": "SGD ke IDR" },
          { "s": "FX_IDC:EURIDR", "d": "EUR ke IDR" }
        ]
      },
      {
        "title": "Gold",
        "symbols": [
          { "s": "COMEX:GC1!", "d": "Emas Spot" },
          { "s": "FOREXCOM:XAUUSD", "d": "Emas / USD" },
          { "s": "OANDA:XAUUSD", "d": "Emas / USD (OANDA)" }
        ]
      }]
    }`;

    container.current.appendChild(script);
  }, []);

  return <div ref={container} />;
};

export default MarketOverviewWidget;
