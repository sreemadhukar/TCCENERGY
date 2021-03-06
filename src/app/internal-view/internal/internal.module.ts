import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InternalRoutingModule } from "./internal-routing.module";
import { InternalComponent } from "./internal.component";
import { InternalNavBarComponent } from "./internal-nav-bar/internal-nav-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { CommonComponentsModule } from "src/app/common-components/common-components.module";
import { InternalRightNavBarComponent } from './internal-right-nav-bar/internal-right-nav-bar.component';

@NgModule({
  declarations: [InternalComponent, InternalNavBarComponent, InternalRightNavBarComponent],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MatIconModule,
    CommonComponentsModule
  ]
})
export class InternalModule {}
