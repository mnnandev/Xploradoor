import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    

    

    // Signin/Signup Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}