import { Component }  from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector:'footer',
    templateUrl:'./templates/app.footer.html',
    styleUrls:['./styles/app.footer.css'],  
})
export class FooterComponent{
    profile:Object;
    socialProfiles=[
		{
            "name":"facebook",
            "link":"http://facebook.com/manishjanky",
            "class":"fa-facebook-square"
        },
        {
            "name":"googlePlus",
            "link":"https://plus.google.com/107936389381835582160",
            "class":"fa-google-plus-square"
        },
        {
            "name":"github",
            "link":"https://github.com/manishjanky",
            "class":"fa-github-square"
        },
        {"name":"linkedin","link":"https://in.linkedin.com/in/manishjanky","class":"fa-linkedin-square"},
        {"name":"stackOverFlow","link":"http://stackoverflow.com/users/4948483/manish","class":"fa-stack-overflow"}
   ];
constructor(
    private appService: AppService){
        appService.getProfile().then(profile=>this.profile=profile);               
    }
   
}