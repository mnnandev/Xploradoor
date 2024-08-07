 
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

}