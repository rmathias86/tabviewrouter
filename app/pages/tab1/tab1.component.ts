import { Component, AfterViewInit} from "@angular/core";
import { Page } from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";
import { Router } from '@angular/router';
@Component({
    selector: "tab1.component",
    templateUrl: "pages/tab1/tab1.component.html",
})

export class Tab1Component implements AfterViewInit{
    

    constructor(private router: Router, private routerExtension: RouterExtensions){
        console.log("Tab1Component");
        this.router.navigate([
            '/tab1',
                { outlets: { tab1outlet: ['tab1home'] } }
            ]);
    }


    ngAfterViewInit(): void {
        
    }



 }
