import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBlogPost = [
        {
            mainImg: 'assets/img/blog/blog1.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 7, 2024',
            title: '10 Types of Social Proof and What Makes Them Effective',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog2.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 6, 2024',
            title: 'Tech Products That Make It Easier to Stay Home',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog1.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 7, 2024',
            title: '10 Types of Social Proof and What Makes Them Effective',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog2.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 6, 2024',
            title: 'Tech Products That Make It Easier to Stay Home',
            link: 'blog-details'
        }
    ]
    

    blogSlides:  OwlOptions = {
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
          0: {
            items: 1
          },
          375: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      };

}