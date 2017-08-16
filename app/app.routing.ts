import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Tab1Component,Tab2Component, Tab1inner1Component, Tab1HomeComponent} from "./pages/"


const routes: Routes = [
    { path: "", redirectTo: "tab1", pathMatch: "full" },
    { path: "tab1", component: Tab1Component, children: [
        { path: "tab1home", component: Tab1HomeComponent, outlet: 'tab1outlet' },
        { path: "tab1inner1", component: Tab1inner1Component, outlet: 'tab1outlet' }
    ] },
    { path: "tab2", component: Tab2Component },
   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }