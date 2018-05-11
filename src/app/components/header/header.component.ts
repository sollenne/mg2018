import { Component, OnInit } from '@angular/core';
import { VariantService } from '../../services/variant.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public variant: string;

  constructor(
    private sidenavService: SidenavService,
  ) {
    this.variant = VariantService.CURRENT_VARIANT;
  }

  ngOnInit() {}

  public mobileNavAction(): void {
    console.log('mobile navigation action');
  }

  public toggleSidenav(): void {
    console.log('toggle sidenav');
    this.sidenavService.toggle();
  }
}
