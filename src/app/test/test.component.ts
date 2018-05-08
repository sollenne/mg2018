import {Component, OnInit, Renderer2} from '@angular/core';
import {VariantService} from '../services/variant.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private variantService: VariantService,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  public theme(theme: string): void {
    this.renderer.removeClass(document.body, VariantService.CURRENT_VARIANT);
    this.variantService.setVariant(theme);
    this.renderer.addClass(document.body, theme);
    console.log(VariantService.CURRENT_VARIANT);
  }

}
