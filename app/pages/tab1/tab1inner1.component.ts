import { Component } from "@angular/core";
import { Page } from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "tab1inner1",
    templateUrl: "pages/tab1/tab1inner1.component.html",
})

export class Tab1inner1Component {
    

    constructor(private page: Page, private routerExtensions: RouterExtensions){
        console.log("Tab1inner1Component");
    }



 }
