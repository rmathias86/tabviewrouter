import { Component } from "@angular/core";

import { Page } from "ui/page";
@Component({
    selector: "tab2.component",
    templateUrl: "pages/tab2/tab2.component.html",
})

export class Tab2Component {
    


    // constructor(private _page: Page){
    //     if(this._page.actionBar.navigationButton)
    //         this._page.actionBar.navigationButton.visibility = "collaped";
    // }


    constructor(){
        console.log("Tab2Component");
    }


 }
