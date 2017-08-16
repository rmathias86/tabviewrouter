import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import {Page} from "ui/page";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Router } from '@angular/router';
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "rmtabviewitem",
    templateUrl: "rmtabview/rmtabviewitem.component.html",
})

export class RMTabViewItem {
    @Input() selected: boolean = false;
    @Output() outputEvent:EventEmitter<number>=new EventEmitter();
    @Input() tabnumber;
    @Input() routerpath: string;
    @Input() tabname: string;
    @Input() icon: string;

    constructor(
        private component: Page, 
        private router : Router,
        private routerExtension: RouterExtensions){
        
        this.component.isUserInteractionEnabled = true;
    }


    onTap(args){
        
        this.routerExtension.navigateByUrl(this.routerpath, {clearHistory: true, animated: false});
    }

    


 }
