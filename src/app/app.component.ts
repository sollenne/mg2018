import {AfterViewInit, Component, Renderer2, ViewChild} from '@angular/core';
import {VariantService} from './services/variant.service';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav') public sidenav: MatSidenav;

  constructor(
    private renderer: Renderer2,
    private variantService: VariantService,
    private sidenavService: SidenavService,
  ) {
    this.setAppVariant('mg');
  }

  public setAppVariant(variant?: string): void {
    this.renderer.addClass(document.body, variant);
    this.variantService.setVariant(variant);
  }

  public ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
