import { Component }  from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector:'accolades',
    templateUrl:'./templates/app.accolades.html',
    styleUrls:['./styles/app.accolades.css'], 
})
export class AccoladesComponent{
   profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);               
    }
    hack(val) {
  return Array.from(val);
}
}