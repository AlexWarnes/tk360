import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../../models/GalleryImage.model';

@Component({
  selector: 'app-gallery-thumbnail',
  templateUrl: './gallery-thumbnail.component.html',
  styleUrls: ['./gallery-thumbnail.component.scss']
})
export class GalleryThumbnailComponent implements OnInit {
  @Input() imgData: GalleryImage
  constructor() { }

  ngOnInit(): void {
  }

}
