import React from "react";
import '../style/Ad.css';
import adLotr from '../assets/images/lotr_amazon.jpg';
import adPrime1 from '../assets/images/adPrimeVideo1.jpg';
import { AdModel, AdService } from "../services/AdService";

const Ad = () => {

  const adService: AdService = new AdService();

  const ad: AdModel = adService.getAd();

  const openAd = (adUrl: string) => {
    window.open(adUrl, "_blank");
  }

  return (
    <div className="ad-container">
      <a target="_blank" href={ad.targetUrl}><img src={ad.banner} className="img-ad" /></a>
    </div>
  );

}

export default React.memo(Ad);