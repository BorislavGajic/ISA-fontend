import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTES} from '../sidebar/sidebar.component';
import {LogovanjeServiceService} from '../../../service/logovanjeService/logovanje-service.service';

@Component({
  selector: 'app-navbar-admin-klinike',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarAdminKlinikeComponent implements OnInit {

  private listTitles: any[];
  // tslint:disable-next-line:variable-name
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  public isCollapsed = true;
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }

  constructor(  private element: ElementRef, private router: Router, private logovanjeService: LogovanjeServiceService) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
      const $layer: any = document.getElementsByClassName('close-layer')[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
  }


  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const mainPanel =  document.getElementsByClassName('main-panel')[0] as HTMLElement;
    const html = document.getElementsByTagName('html')[0];
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }

    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }

 sidebarClose() {
   const html = document.getElementsByTagName('html')[0];
   this.toggleButton.classList.remove('toggled');
   const mainPanel =   document.getElementsByClassName('main-panel')[0] as HTMLElement;

   if (window.innerWidth < 991) {
     // tslint:disable-next-line:only-arrow-functions
     setTimeout(function() {
       mainPanel.style.position = '';
     }, 500);
   }
   this.sidebarVisible = false;
   html.classList.remove('nav-open');
 }
 /*
 sidebarToggle() {
   // const toggleButton = this.toggleButton;
   // const html = document.getElementsByTagName('html')[0];
   const $toggle = document.getElementsByClassName('navbar-toggler')[0];

   if (this.sidebarVisible === false) {
     this.sidebarOpen();
   } else {
     this.sidebarClose();
   }
   const html = document.getElementsByTagName('html')[0];

   if (this.mobile_menu_visible === 1) {
     // $('html').removeClass('nav-open');
     html.classList.remove('nav-open');
     if ($layer) {
       $layer.remove();
     }
     // tslint:disable-next-line:only-arrow-functions
     setTimeout(function() {
       $toggle.classList.remove('toggled');
     }, 400);

     this.mobile_menu_visible = 0;
   } else {
     // tslint:disable-next-line:only-arrow-functions
     setTimeout(function() {
       $toggle.classList.add('toggled');
     }, 430);

     const $layer = document.createElement('div');
     $layer.setAttribute('class', 'close-layer');


     if (html.querySelectorAll('.main-panel')) {
       document.getElementsByClassName('main-panel')[0].appendChild($layer);
     } else if (html.classList.contains('off-canvas-sidebar')) {
       document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
     }

     setTimeout(function() {
       $layer.classList.add('visible');
     }, 100);

     $layer.onclick = function() { //asign a function
       html.classList.remove('nav-open');
       this.mobile_menu_visible = 0;
       $layer.classList.remove('visible');
       setTimeout(function() {
         $layer.remove();
         $toggle.classList.remove('toggled');
       }, 400);
     }.bind(this);

     html.classList.add('nav-open');
     this.mobile_menu_visible = 1;

   }
 };

 getTitle(){
   var titlee = this.location.prepareExternalUrl(this.location.path());
   if(titlee.charAt(0) === '#'){
     titlee = titlee.slice( 2 );
   }
   titlee = titlee.split('/').pop();

   for(var item = 0; item < this.listTitles.length; item++){
     if(this.listTitles[item].path === titlee){
       return this.listTitles[item].title;
     }
   }
   return 'Dashboard';
 }
*/

 logout() {
   this.logovanjeService.logout();

 }
}
