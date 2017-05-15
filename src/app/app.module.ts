import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { ManinContentComponent }  from './app.maincomponent';
//import all the classes that have been exported and needs to be apart of the App
import {NavBarComponent} from './app.navbarcomponent'
import {ContainerComponent} from './app.containercomponent'
import { RouterModule }   from '@angular/router';
import {AppService} from './app.service'
import {AboutComponent} from './app.about'
import {FooterComponent} from './app.footer'
import {AccoladesComponent} from './app.accolades'
import {ProjectsComponent} from './app.projects'
import {CoverLetterComponent} from './app.coverletter'
import {ContactComponent} from './app.contact'


@NgModule({
    imports:[BrowserModule,HttpModule,RouterModule.forRoot([
        {
            path:'About',
            component: AboutComponent
        },
        {
            path:'',
            component: AboutComponent
        },
        {
            path:'Accolades',
            component: AccoladesComponent
        },
        {
            path:'Projects',
            component: ProjectsComponent
        } ,
        {
            path:'CoverLetter',
            component: CoverLetterComponent
        } ,
        {
            path:'Contact',
            component: ContactComponent
        }
    ])],
    declarations:[ManinContentComponent,
                    NavBarComponent,
                    ContainerComponent,AboutComponent,
                    FooterComponent,AccoladesComponent,
                    ProjectsComponent,CoverLetterComponent,
                    ContactComponent],//include all components here as the AppModule needs to know what all components are declared and will be used 
    bootstrap:[ManinContentComponent],
    providers: [ AppService ],
})
export class AppModule{}