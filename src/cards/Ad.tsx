import React from "react";
import { useEffect } from "react";
import '../style/Ad.css';

const Ad = () => {

  useEffect(() => {
    try {
      // Check if the adsbygoogle script is already loaded
      // This prevents loading the script multiple times
      if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.setAttribute('data-ad-client', 'ca-pub-1133652107517781');
        document.body.appendChild(script);
  
        script.onload = () => {
          // Ensure adsbygoogle is defined on the window after the script loads
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          try {
            // Only push new ad requests if adsbygoogle queue is empty to prevent re-initializing ads
            if (!(window as any).adsbygoogle.loaded) {
              (window as any).adsbygoogle.push({});
            }
          } catch (error) {
            console.error('AdSense Error - Ad push', error);
          }
        };
      } else {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        if (!(window as any).adsbygoogle.loaded) {
          (window as any).adsbygoogle.push({});
        }
      }
    } catch (error) {
      console.error('AdSense Error - Initial setup', error);
    }
    const adElement: HTMLElement | null = document.querySelector('.ad-container');
    if (adElement !== null && adElement.offsetHeight && adElement.style && adElement.offsetHeight > 100) {
        adElement.style.maxHeight = '100px';
        adElement.style.overflow = 'hidden';
    }
  }, []);  

  return (
    <div className="ad-container">
      {/* <ins className="adsbygoogle"
        style={{ display: 'block', maxHeight: "100px" }}
        data-ad-client="ca-pub-1133652107517781"
        data-ad-slot="9894104602"
        data-ad-format="rectangle,horizontal"
        data-full-width-responsive="true">
      </ins> */}
      <div id="container-65a59bdda9561054a6dd3e362af167cd"></div>
    </div>
  );

}

export default React.memo(Ad);