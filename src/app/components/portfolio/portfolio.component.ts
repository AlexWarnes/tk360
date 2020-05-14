import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { StateService } from '../../services/state/state.service';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';
import { map } from '../../../../node_modules/rxjs/operators';
import { GalleryImage } from '../../models/GalleryImage.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title: string = 'Portfolio';
  description: string = 'TK360 works with clients in the DC and VA area to make their properties reflect their aspirations for the future.'
  imgURL: string = "https://www.brownstoner.com/wp-content/uploads/2019/02/brooklyn-home-renovations-bolster-09.jpg"
  // imgURL: string = "https://images.unsplash.com/photo-1546198632-9ef6368bef12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

  images$ = this.STATE.galleryImages$;
  constructor(private STATE: StateService, private DIALOG: MatDialog) { }

  ngOnInit(): void {

  }
  handleImageClick(img: GalleryImage) {
    const maxPosition = this.STATE.getMaxGalleryPosition();
    this.DIALOG.open(GalleryDialogComponent, {
      panelClass: 'gallery-dialog',
      autoFocus: false,
      data: {
        position: img.position,
        maxPosition
      }
    })

  }
}
