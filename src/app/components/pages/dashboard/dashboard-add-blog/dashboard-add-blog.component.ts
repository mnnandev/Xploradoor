 
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-add-blog',
    templateUrl: './dashboard-add-blog.component.html',
    styleUrls: ['./dashboard-add-blog.component.scss']
})
export class DashboardAddBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    breadcrumb = [
        {
            title: 'Add Blog',
            subTitle: 'Dashboard'
        }
    ]
    images = [
        { id: 1, src: 'assets/img/listings/listings4.jpg', alt: 'Image 1' },
        { id: 2, src: 'assets/img/listings/listings4.jpg', alt: 'Image 2' },
        { id: 3, src: 'assets/img/listings/listings4.jpg', alt: 'Image 3' },
        // Add more images as needed
      ];
    
      selectedImages: Set<number> = new Set();
    
      toggleSelection(imageId: number) {
        if (this.selectedImages.has(imageId)) {
          this.selectedImages.delete(imageId);
        } else {
          this.selectedImages.add(imageId);
        }
      }
    
      deleteSelectedImages() {
        this.images = this.images.filter(image => !this.selectedImages.has(image.id));
        this.selectedImages.clear();
      }

}