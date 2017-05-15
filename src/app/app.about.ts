import { Component }  from '@angular/core';
import { AppService }         from './app.service';

@Component({
    selector:'about',
    templateUrl:'./templates/app.about.html',
    styleUrls:['./styles/app.about.css'],

})
export class AboutComponent{
    profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);            
    }
    hack(val) {
  return Array.from(val);
}
}