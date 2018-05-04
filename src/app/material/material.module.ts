import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false,
    },
  ],
})

export class MaterialModule { }
