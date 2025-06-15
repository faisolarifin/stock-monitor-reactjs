import React, { useEffect, useRef } from 'react';

function TickerTapeWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = ''; // clear old content
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FX_IDC:USDIDR",
            "title": "USD ke IDR"
          },
          {
            "proName": "FX_IDC:EURIDR",
            "title": "EUR ke IDR"
          },
          {
            "proName": "FX_IDC:JPYIDR",
            "title": "JPY ke IDR"
          },
          {
            "proName": "FX_IDC:SGDIDR",
            "title": "SGD ke IDR"
          },
          {
            "proName": "IDX:COMPOSITE",
            "title": "IHSG"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "id"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}></div>
  );
}

export default TickerTapeWidget;
