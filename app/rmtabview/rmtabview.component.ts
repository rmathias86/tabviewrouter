import { Component,Input, Output } from "@angular/core";
import {Page } from "ui/page";
@Component({
    selector: "rmtabview",
    templateUrl: "rmtabview/rmtabview.component.html",
})

export class RMTabView {
    @Input() selectedTab : number = 0;

    constructor(private page: Page){
        
    }



    onComponentChange(value){
       this.selectedTab = value;
       console.log("Selected tab:" +this.selectedTab);
    }
    
    


 }
