import { Component } from "@angular/core";
import { Page } from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "tab1home",
    templateUrl: "pages/tab1/tab1home.component.html",
})

export class Tab1HomeComponent {
    

    constructor(private page: Page, private routerExtensions: RouterExtensions){
        console.log("Tab1HomeComponent");
    }



 }
