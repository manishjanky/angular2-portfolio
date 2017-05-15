import { Component }  from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector:'footer',
    templateUrl:'./templates/app.footer.html',
    styleUrls:['./styles/app.footer.css'],  
})
export class FooterComponent{
    profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);               
    }
}