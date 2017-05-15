import { Component }  from '@angular/core';

@Component({
    selector:'navbar',
    templateUrl:'./templates/app.navbar.html',
    styleUrls:['./styles/app.navbar.css'],
    host: {
        '(window:scroll)': 'updateHeader($event)',
        '(document:click)':'sideNav()'
    }  
})
export class NavBarComponent{
    navLinks=['About','Accolades','Projects','CoverLetter','Contact'];
    toggleSideNav=false;
    isScrolled = false;
    currPos: Number = 0;
    changePos: Number = 100;
    sideNav(){
        event.stopPropagation();
        if((<HTMLSpanElement>event.target).id=="sidenavbutton"){
        this.toggleSideNav=!this.toggleSideNav;
            return false;
        }else{
            if(this.toggleSideNav==true){
                this.toggleSideNav=false;
            }
        }    
    }
     updateHeader(evt:any) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }
}