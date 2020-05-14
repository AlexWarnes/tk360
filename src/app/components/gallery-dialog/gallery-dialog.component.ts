import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { StateService } from '../../services/state/state.service';
import { Subject, BehaviorSubject } from '../../../../node_modules/rxjs';
import { switchMap, filter } from '../../../../node_modules/rxjs/operators';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESCAPE = 27
}

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public galleryData,
    private STATE: StateService) { }

  position$: BehaviorSubject<number> = new BehaviorSubject(undefined);
  maxPosition: number;
  displayImage$ = this.position$.pipe(
    filter(p => p !== undefined),
    switchMap(p => {
      return this.STATE.selectImgByPosition$(p)
    })
  )

  ngOnInit(): void {
    const { position, maxPosition } = this.galleryData;
    this.maxPosition = maxPosition;
    this.setPosition(position)
  }

  setPosition(p: number) {
    this.position$.next(p);
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log(event.keyCode);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.nextImage()
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.previousImage();
    }

    if (event.keyCode === KEY_CODE.ESCAPE) {
      this.closeGallery();
    }
  }

  nextImage(currentPosition = this.position$.value, maxPosition = this.maxPosition) {
    if (currentPosition === maxPosition) {
      this.setPosition(0);
    } else {
      this.setPosition(currentPosition + 1)
    }
  }

  previousImage(currentPosition = this.position$.value, maxPosition = this.maxPosition) {
    if (currentPosition === 0) {
      this.setPosition(maxPosition);
    } else {
      this.setPosition(currentPosition - 1)
    }
  }

  closeGallery() {
    this.dialogRef.close();
  }


}
