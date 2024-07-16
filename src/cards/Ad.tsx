import React from "react";
import { useEffect } from "react";
import '../style/Ad.css';
import adLotr from '../assets/images/lotr_amazon.jpg';
import adPrime1 from '../assets/images/adPrimeVideo1.jpg';

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
      <a target="_blank" href="https://www.amazon.co.uk/b?_encoding=UTF8&tag=gromao-21&linkCode=ur2&linkId=42a84c933913e88a50e3cb953632805f&camp=1634&creative=6738&node=3010085031"><img src={adPrime1} className="img-ad" /></a>
    </div>
  );

}

export default React.memo(Ad);