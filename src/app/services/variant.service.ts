import {Injectable} from '@angular/core';

@Injectable()

export class VariantService {
  public static IS_BASE: boolean;
  public static IS_CPP: boolean;
  public static IS_WALMART: boolean;
  public static IS_CA_POST: boolean;
  public static CURRENT_VARIANT: string;

  constructor() {}

  public setVariant(theme?: string): void {
    this.discardVariants();

    if (theme) {
      VariantService.CURRENT_VARIANT = theme;

      switch (VariantService.CURRENT_VARIANT) {
        case 'walmart':
          VariantService.IS_WALMART = true;
          break;
        case 'cpp':
          VariantService.IS_CPP = true;
          break;
        case 'ca_post':
          VariantService.IS_CA_POST = true;
          break;
        default:
          VariantService.IS_BASE = true;
      }
    }
  }

  public discardVariants(): void {
    VariantService.IS_CPP     = false;
    VariantService.IS_WALMART = false;
    VariantService.IS_CA_POST = false;
    VariantService.IS_BASE    = false;
  }

}
