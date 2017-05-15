import { Component }  from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector:'accolades',
    templateUrl:'./templates/app.projects.html',
    styleUrls:['./styles/app.accolades.css'], 
})
export class ProjectsComponent{
   profile:Object;
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);               
    }
}