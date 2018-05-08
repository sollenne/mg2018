import {Component, Renderer2} from '@angular/core';
import {VariantService} from './services/variant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private renderer: Renderer2,
    private variantService: VariantService,
  ) {
    this.setAppVariant('walmart');
  }

  public setAppVariant(variant?: string): void {
    this.renderer.addClass(document.body, variant);
    this.variantService.setVariant(variant);
  }

}
