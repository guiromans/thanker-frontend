import primeVideo from '../assets/images/adPrimeVideo1.jpg';
import kindleUnlimited from '../assets/images/kindle_unlimited.jpg';
import amazonWardrobe from '../assets/images/amazon_wardrobe.jpg';

export interface AdModel {
    banner: string,
    targetUrl: string
};

export class AdService {

    private ads: AdModel[] = [
        { 
            banner: primeVideo, 
            targetUrl: "https://www.amazon.co.uk/b?_encoding=UTF8&tag=gromao-21&linkCode=ur2&linkId=42a84c933913e88a50e3cb953632805f&camp=1634&creative=6738&node=3010085031" 
        },
        {
            banner: kindleUnlimited,
            targetUrl: "https://www.amazon.co.uk/kindle-dbs/hz/subscribe/ku?tag=gromao-21&shoppingPortalEnabled=true"
        },
        {
            banner: amazonWardrobe,
            targetUrl: "https://www.amazon.co.uk/tbyb/huc?pf=1&tag=gromao-21"
        }
    ]

    getAd(): AdModel {
        const randomIndex: number = Math.floor(Math.random() * this.ads.length);

        return this.ads[randomIndex];
    }

}