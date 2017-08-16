import { Component,Input, Output,ViewChild,ElementRef } from "@angular/core";
import {Page } from "ui/page";
@Component({
    selector: "rmtabcontainer",
    templateUrl: "rmtabview/rmtabcontainer.component.html",
})

export class RMTabContainer {
   @Input() tabnumber: number;
   
 }
