import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showSidebar = true ;
  fullWidth: number;


  constructor() { }

  ngOnInit() {
    this.showSidebar = true;

  }

  toggleNavbar() {
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar);
  }

  // checkResize() {
  //   this.fullWidth = document.documentElement.clientWidth;
  //   if (this.fullWidth < 992) {
  //     this.showSidebar = false;
  //   } else {
  //     this.showSidebar = true;
  //   }
  // }


}
