import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TenderRoutingModule } from "./tender-routing.module";
import { TenderComponent } from "./tender.component";
import { NewTenderComponent } from "./new-tender/new-tender.component";
import { CommonComponentsModule } from "src/app/common-components/common-components.module";
import { TenderDocumentsComponent } from "./tender-documents/tender-documents.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TenderComponent, NewTenderComponent, TenderDocumentsComponent],
  imports: [
    CommonModule,
    TenderRoutingModule,
    CommonComponentsModule,
    FormsModule
  ]
})
export class TenderModule {}
