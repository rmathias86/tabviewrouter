import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { RMTabView, RMTabViewItem, RMTabContainer } from "./rmtabview"
import { Tab1Component, Tab2Component, Tab1inner1Component, Tab1HomeComponent} from "./pages/"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        [RMTabView, RMTabViewItem, RMTabContainer],
        [Tab1Component, Tab2Component, Tab1inner1Component, Tab1HomeComponent]
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
