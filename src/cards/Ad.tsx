import React from "react";
import '../style/Ad.css';
import { AdModel, AdService } from "../services/AdService";

const Ad = () => {

  const adService: AdService = new AdService();

  const ad: AdModel = adService.getAd();

  return (
    <div className="ad-container">
      <a target="_blank" href={ad.targetUrl}><img src={ad.banner} className="img-ad" /></a>
    </div>
  );

}

export default React.memo(Ad);