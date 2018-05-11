import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public sidenavLinks: any;
  public learnMoreLinks: any;

  constructor(
    private sidenavService: SidenavService,
  ) {
    this.sidenavLinks = [
      {
        name: 'Send Money',
        path: 'send',
      },
      {
        name: 'Pay Bills',
        path: 'payBills/select-biller',
      },
      {
        name: 'Estimate Fees',
        path: 'estimate',
      },
      {
        name: 'Track',
        path: 'track',
      },
      {
        name: 'Find a Location',
        path: 'locations',
      },
      {
        name: 'FAQ',
        path: 'faq',
      },
    ];

    this.learnMoreLinks = [
      {
        name: 'How to send money',
        path: '/how-to-send-money',
      },
      {
        name: 'How to receive money',
        path: '/how-to-receive-money',
      },
      {
        name: 'How to pay bills',
        path: '/how-to-pay-bills',
      },
      {
        name: 'MoneyGram Plus™',
        path: '/moneygram-plus',
      },
      {
        name: 'FAQ',
        path: 'faq',
      },
      {
        name: 'See all services',
        path: 'all-services',
      },
    ];
  }

  ngOnInit() {
  }

  public closeSidenav(): void {
    this.sidenavService.toggle();
  }

}
