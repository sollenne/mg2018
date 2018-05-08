import { Component, OnInit } from '@angular/core';
import { VariantService } from '../../services/variant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public variant: string;

  constructor() {
    this.variant = VariantService.CURRENT_VARIANT;
  }

  ngOnInit() {}

}
