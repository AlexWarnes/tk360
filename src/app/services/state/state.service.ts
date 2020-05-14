import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ServiceCard } from '../../models/ServiceCard.model';
import { GalleryImage } from '../../models/GalleryImage.model';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  // ========== DATA STORES ==========

  private displayType_: BehaviorSubject<"MOBILE" | "DESKTOP"> = new BehaviorSubject(undefined);
  public displayType$: Observable<"MOBILE" | "DESKTOP"> = this.displayType_.asObservable().pipe(
    filter(display => !!display)
  );

  private sidenavIsOpen_: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public sidenavIsOpen$: Observable<boolean> = this.sidenavIsOpen_.asObservable();

  private serviceCards_: BehaviorSubject<ServiceCard[]> = new BehaviorSubject([
    {
      title: 'Home Remodeling',
      description: 'Is your home layout no longer working for you? We are experts in home remodeling and renovation.',
      iconPath: 'house'
    }, {
      title: 'HVAC',
      description: 'Calling us before your AC quits working all together can save you thousands in repairs. We service and repair all major brands.',
      iconPath: 'toys'
    }, {
      title: 'Electrical',
      description: 'Full electric service that performs everything from new installation, to troubleshooting and repair for industrial, commercial & residential customers.',
      iconPath: 'power'
    }, {
      title: 'Flooring',
      description: 'From premium laminate to new hardwood floor installations. We can also bring your existing hardwood floors back to life.',
      iconPath: 'view_stream'
    }, {
      title: 'Smart Home',
      description: 'Connect with devices and appliances in your home or office for added savings, security, and convenience.',
      iconPath: 'cast'
    }, {
      title: 'Vanilla Box',
      description: 'A clean slate for commercial property before your next tenant.',
      iconPath: 'format_paint'
    }
  ]);
  public serviceCards$: Observable<ServiceCard[]> = this.serviceCards_.asObservable();

  private testimonals_: BehaviorSubject<any[]> = new BehaviorSubject([
    {
      title: "Kathy Hook of Alexandria, Virginia",
      text: "Hello Deon/ TK360, LLC, I want to thank you so much for the recent paver project that you and your team at TK360, LLC did for me in my back yard. I can say that it has truly changed our way of living back there for us and our furry friends. The AZEK paver system and drain that you installed in our back yard is everything you said that would be and more. Before you installed the paver system and drain in our back yard it would get muddy and be overrun by pools of water everywhere. Now the water gets completely drained away and the paver system which is made of 100% recycled tires is friendly to the touch to the point that we can even walk barefoot out there without the pavers tearing up the soles of our feet. Thank you again for completely changing our quality of life in our backyard.",
      rating: 5
    },
    {
      title: "Ivy Jackson",
      text: "I want to thank you so much for all the hard work and patience you had with me throughout the remodeling process of my condo here in Arlington VA. Your design suggestions and your attention to detail is what truly helped to sell my condo within 1 week of completing it. I will make sure to refer all my friends, family and work colleagues who have a need for a all around great home remodeling company.",
      rating: 5
    },
    {
      title: "Janice Faucet",
      text: "My name is Janice Faucett and I used to own a townhouse in Arlington VA that I recently sold. I decided to retire and move to my farm in Minnesota where I am currently living, but before I could do so I had to fully remodel my townhouse to get it ready for market condition. Prior to having TK360 do the renovations to my townhouse, a contractor neighbor made me an as-is offer on the place, which was much lower than fair market value. I reached out to a couple of other contractors in the area, but was unsatisfied with their responsiveness and professionalism. Finally, my neighbor referred me to Deon at TK360 because they had remodeled her condo for sale. When Deon came out to do a walk-through and gather the information that he would need to put an estimate together, I sensed a genuine honesty. I hired TK360 to do the entire remodel, which came out better then I had imagined. Deon made great design suggestions and completed the project on time and within our budget. He even put me in contact with a realtor who had my place sold after the first open house for $50,000 more than my asking price. I highly recommend Deon and TK360 for any home improvement project!",
      rating: 5
    },
    {
      title: "Hector Centenoa, Washington, DC",
      text: "My name is Hector Centenoa, my wife and two children own a condo where we currently live. The condo that we live in is in a historic building in the Mount Pleasant area of North West Washington DC where I was raised and now I am raising my children. We recently had a leak that came from our neighbor’s unit above us which caused water damage to the hallway ceiling and light fixture in my unit. I called TK360, LLC to come out to take care of the damage, realizing the urgency they came out quickly and did the repairs to the ceiling and replaced the light fixture. I was very pleased with the work done in my unit by TK360, they were very professional and worked around my schedule. Needless to say, I will be using them for future projects and referring them to all my family and friends.",
      rating: 5
    },
    {
      title: "Arada Grantz, Realtor",
      text: "Greetings to all potential home buyers and owners, My name is Arada Grantz and I am a realtor for Keller Williams Realty here in the DMV area. I refer Deon owner of TK360, LLC to all my clients as well as to do all inspection list work no matter how small or big the task may be. I have had TK360 even do projects to my personal properties that I own and some of which have sold. Just this year TK360 remodeled a condo that I use to own in Alexandria VA to get it ready for sale, they also installed a 22’ double garage door drain at my house in McLean VA. I have no problem referring Deon and his team at TK360 because I know what ever the project may be it will be done right and in a orderly fashion.",
      rating: 5
    },
  ])
  public testimonials$: Observable<any[]> = this.testimonals_.asObservable();

  private galleryImages_: BehaviorSubject<GalleryImage[]> = new BehaviorSubject([
    {
      path: '../../assets/images/gallery/tk360_kitchen_island-01.jpeg',
      caption: ''
    }, {
      path: '../../assets/images/gallery/tk360_kitchen2-01.jpeg',
      caption: ''
    }, {
      path: '../../assets/images/gallery/tk360_solar-01.jpeg',
      caption: ''
    }, {
      path: '../../assets/images/gallery/tk360_floors.jpg',
      caption: ''
    }, {
      path: '../../assets/images/gallery/tk360_floors2.jpg',
      caption: ''
    }
  ]);
  public galleryImages$: Observable<GalleryImage[]> = this.galleryImages_.asObservable().pipe(
    map(images => {
      return images.map((img, i) => {
        return {
          ...img,
          position: i
        }
      })
    })
  )

  // ========== DATA ACCESS METHODS ==========

  public updateDisplayType(displayType): void {
    this.displayType_.next(displayType)
  }

  public toggleSidenav(status: boolean = !this.sidenavIsOpen_.value) {
    this.sidenavIsOpen_.next(status);
  }

  public selectImgByPosition$(position: number): Observable<GalleryImage> {
    return this.galleryImages$.pipe(
      map(images => {
        return images[position]
      })
    )
  }

  public getMaxGalleryPosition(): number {
    return this.galleryImages_.value.length - 1;
  }
}
