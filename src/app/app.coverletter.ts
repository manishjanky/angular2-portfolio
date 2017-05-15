import { Component }  from '@angular/core';
import { AppService }         from './app.service';

@Component({
    selector:'about',
    templateUrl:'./templates/app.coverletter.html',
    styleUrls:['./styles/app.about.css'],

})
export class CoverLetterComponent{
    profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);            
    }
}