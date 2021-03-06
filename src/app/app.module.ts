import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { ComponentsModule } from './administrator-kc/components/components.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {RegZahtrviService} from './service/administrator-kc-service/reg-zahtrvi.service';
import { RegComponent } from './registracija/reg/reg.component';
import { LogovanjeComponent } from './registracija/logovanje/logovanje.component';
import { PotvrdaComponent } from './administrator-kc/potvrda/potvrda.component';
import { WelcomePageComponent } from './administrator-kc/welcome-page/welcome-page.component';
import { ProfileComponent } from './administrator-kc/profile/profile.component';
import { ForbiddenComponent } from './administrator-kc/forbidden/forbidden.component';
import { SestraLayoutComponent } from './sestra-home/sestra-layout/sestra-layout.component';
import {ComponentsModuleSestra} from './sestra-home/components/components.module';
import { PacijentListComponent } from './sestra-home/pacijent-list/pacijent-list.component';

import { LekarKcLayoutComponent } from './lekar/lekar-kc-layout/lekar-kc-layout.component';
import { ComponentsLekarModule } from './lekar/components/components.module';
import { ProfilSestraComponent } from './sestra-home/profil-sestra/profil-sestra.component';
import { KartonSestraComponent } from './sestra-home/karton-sestra/karton-sestra.component';
import { OdmorOdsustvoSestraComponent } from './sestra-home/odmor-odsustvo-sestra/odmor-odsustvo-sestra.component';

import {PacijentLayoutModule} from './pacijent/pacijent-layout/pacijent-layout.module';

import { KartonLekarComponent } from './lekar/karton-lekar/karton-lekar.component';
import { OveraReceptaComponent } from './sestra-home/overa-recepta/overa-recepta.component';
import { KlinikePacijentaComponent } from './pacijent/klinike-pacijenta/klinike-pacijenta.component';
import { KreirajKartonComponent } from './administrator-kc/kreiraj-karton/kreiraj-karton.component';
import { PreglediComponent } from './pacijent/pregledi/pregledi.component';
import { KartonPacijentaComponent } from './pacijent/karton-pacijenta/karton-pacijenta.component';
import {AdminKlinikeLayoutComponent} from './admin-klinike/admin-klinike-layout/admin-klinike-layout.component';
import {ComponentsAdminKlinikeModule} from './admin-klinike/components/components.module';


// import { SidebarLekarComponent } from './lekar/components/sidebar/sidebar.component';
// import { LicniProfilLekaraComponent} from './lekar/licni-profil/licni-profil.component';
// import { ListaPacijenataComponent } from './lekar/lista-pacijenata/lista-pacijenata.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ComponentsLekarModule,
    ComponentsAdminKlinikeModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ComponentsModuleSestra,
    PacijentLayoutModule

  ],
  declarations: [
    AppComponent,
    AdminKcLayoutComponent,
    RegComponent,
    LogovanjeComponent,
    PotvrdaComponent,
    ForbiddenComponent,
    SestraLayoutComponent,
    LekarKcLayoutComponent,
    AdminKlinikeLayoutComponent,


    // SidebarLekarComponent,
    // PotvrdaComponent
    // LicniProfilLekaraComponent,
    // ListaPacijenataComponent

  ],
  providers: [RegZahtrviService],
  bootstrap: [AppComponent]
})
export class AppModule { }
