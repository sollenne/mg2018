import { Component, OnInit } from '@angular/core';
import { VariantService } from '../../services/variant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    VariantService,
  ]
})
export class FooterComponent implements OnInit {
  public variant: string;
  public showCountryLinksSection: boolean;
  public showFooterLinks: boolean;
  public showLicenseStatement: boolean;
  public showLocale: boolean;
  public showPoweredByMoneyGram: boolean;
  public showSocialMediaLinks: boolean;

  footerLinksSections = [
    {
      sectionTitle: 'Quick Links',
      links: [
        {viewValue: 'Send money', path: 'account/mandatory-signUp'},
        {viewValue: 'Pay bills', path: 'account/mandatory-signUp'},
        {viewValue: 'Estimate fees', path: 'estimate/receiverInfo'},
        {viewValue: 'Track a transaction', path: 'track'},
        {viewValue: 'Find a location', path: 'locations'},
        {viewValue: 'Top-up mobile phones', path: 'mobile-phone-top-up'},
        {viewValue: 'MoneyGram Plus™', path: 'moneygram-plus'},
      ],
    },
    {
      sectionTitle: 'Learn More',
      links: [
        {viewValue: 'How to send money', path: 'how-to-send-money'},
        {viewValue: 'Send money online', path: 'send-money-online'},
        {viewValue: 'Send money in person', path: 'send-money-in-person'},
        {viewValue: 'Send money with MobilePass', path: 'send-money-with-mobilepass'},
        {viewValue: 'Send money to a bank account', path: 'send-money-to-a-bank-account'},
        {viewValue: 'Send money to a mobile wallet', path: 'send-money-to-a-mobile-wallet'},
        {viewValue: 'Send money to an inmate', path: 'send-money-to-an-inmate'},
        {viewValue: 'How to receive money', path: 'how-to-receive-money'},
      ],
    },
    {
      sectionTitle: '',
      links: [
        {viewValue: 'How to pay bills', path: 'how-to-pay-bills'},
        {viewValue: 'Healthcare payments', path: 'healthcare-payments'},
        {viewValue: 'Child support payments', path: 'child-support-payments'},
        {viewValue: 'Money orders', path: 'money-orders'},
        {viewValue: 'Load prepaid cards', path: 'load-prepaid-cards'},
        {viewValue: 'Mobile phone top-up', path: 'mobile-phone-top-up'},
      ],
    },
    {
      sectionTitle: 'Support',
      links: [
        {viewValue: 'Contact Us', path: 'how-to-pay-bills'},
        {viewValue: 'FAQ', path: 'healthcare-payments'},
        {viewValue: 'Report fraud', path: 'child-support-payments'},
        {viewValue: 'Fraud Aware', path: 'money-orders'},
      ],
    },
    {
      sectionTitle: 'Corporate',
      links: [
        {viewValue: 'About MoneyGram', path: 'about-moneygram'},
        {viewValue: 'Careers', path: 'careers'},
        {viewValue: 'Investors', path: 'investors'},
        {viewValue: 'Become an Agent', path: 'become-an-agent'},
        {viewValue: 'Agent Reports', path: 'agent-reports'},
        {viewValue: 'MoneyGram Foundation', path: 'moneygram-foundation'},
        {viewValue: 'Scam Awareness Alliance', path: 'scam-awareness-alliance'},
      ],
    },
  ];

  countryLinks = [
    {path: 'send-money-to-costa-rica',  name: 'Costa Rica'},
    {path: 'send-money-to-ghana',       name: 'Ghana'},
    {path: 'send-money-to-india',       name: 'India'},
    {path: 'send-money-to-jamaica',     name: 'Jamaica'},
    {path: 'send-money-to-kenya',       name: 'Kenya'},
    {path: 'send-money-to-mexico',      name: 'Mexico'},
    {path: 'send-money-to-nicaragua',   name: 'Nicaragua'},
    {path: 'send-money-to-pakistan',    name: 'Pakistan'},
    {path: 'send-money-to-philippines', name: 'The Philippines'},
    {path: 'send-money-to-poland',      name: 'Poland'},
    {path: 'send-money-to-romania',     name: 'Romania'},
    {path: 'send-money-to-thailand',    name: 'Thailand'},
    {path: 'send-money-to-ukraine',     name: 'Ukraine'},
    {path: 'send-money-to-usa',         name: 'United States'},
  ];

  legalLinks = [
    {viewValue: 'Compliance',           path: 'compliance'},
    {viewValue: 'Terms of Use',         path: 'terms-of-use'},
    {viewValue: 'Privacy Policy',       path: 'privacy-policy'},
    {viewValue: 'Terms and Conditions', path: 'terms-and-conditions'},
    {viewValue: 'Legal Notices',        path: 'legal-notices'},
    {viewValue: 'State Licensing',      path: 'state-licensing'},
  ];

  socialMediaLinks = [
    {iconName: 'facebook',      path: 'out/socialMedia/facebag'},
    {iconName: 'twitter',       path: 'out/socialMedia/twatter'},
    {iconName: 'you-tube',      path: 'out/socialMedia/losetube'},
    {iconName: 'linked-in',     path: 'out/socialMedia/limpedin'},
    {iconName: 'google-plus',   path: 'out/socialMedia/cia'},
  ];

  constructor() {
    this.getVariantConfig();
  }

  ngOnInit() {
  }

  public getVariantConfig() {
    this.variant = VariantService.CURRENT_VARIANT;
    this.showCountryLinksSection = VariantService.IS_BASE;
    this.showFooterLinks = !VariantService.IS_CPP;
    this.showLicenseStatement = !VariantService.IS_CPP;
    this.showLocale = !VariantService.IS_CPP;
    this.showPoweredByMoneyGram = VariantService.IS_WALMART;
    this.showSocialMediaLinks = !VariantService.IS_CPP;
  }

}
