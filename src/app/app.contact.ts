import { Component }  from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector:'contact',
    templateUrl:'./templates/app.contact.html',
    styleUrls:['./styles/app.about.css'], 
})
export class ContactComponent{
   profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);               
    }
}