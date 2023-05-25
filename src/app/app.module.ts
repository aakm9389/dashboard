import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchatComponent } from './Les-modules/achat/achat.component';
import { Achat2Component } from './Les-modules/achat2/achat2.component';
import { BashComponent } from './Les-modules/bash/bash.component';
import { InventaireComponent } from './Les-modules/inventaire/inventaire.component';
import { Inventaire2Component } from './Les-modules/inventaire2/inventaire2.component';
import { CommandeComponent } from './Les-modules/commande/commande.component';
import { Commande2Component } from './Les-modules/commande2/commande2.component';
import { StatistiqueComponent } from './Les-modules/statistique/statistique.component';
import { AchatParmoisComponent } from './Les-modules/statistique/achat-parmois/achat-parmois.component';
import { CommandeParMoisComponent } from './Les-modules/statistique/commande-par-mois/commande-par-mois.component';
import { NombreClientComponent } from './Les-modules/statistique/nombre-client/nombre-client.component';
import { VenteparmoisComponent } from './Les-modules/statistique/VenteParMois/venteparmois/venteparmois.component';
import { RapportComponent } from './Les-modules/rapport/rapport.component';
import { CanauxComponent } from './Les-modules/rapport/canaux/canaux.component';
import { ConversionComponent } from './Les-modules/rapport/conversion/conversion.component';
import { UtilisateurComponent } from './Les-modules/rapport/utilisateur/utilisateur.component';
import { ProfilComponent } from './Les-modules/profil/profil.component';
import { NotifComponent } from './Les-modules/notif/notif.component';
import { ParaComponent } from './Les-modules/para/para.component';
import { ConnexionComponent } from './Les-modules/connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitComponent } from './produit/produit.component';
import { ModifierComponent } from './modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    AchatComponent,
    Achat2Component,
    BashComponent,
    InventaireComponent,
    Inventaire2Component,
    CommandeComponent,
    Commande2Component,
    StatistiqueComponent,
    AchatParmoisComponent,
    CommandeParMoisComponent,
    NombreClientComponent,
    VenteparmoisComponent,
    RapportComponent,
    CanauxComponent,
    ConversionComponent,
    UtilisateurComponent,
    ProfilComponent,
    ParaComponent,
    NotifComponent,
    ConnexionComponent,
    FooterComponent,
    ProduitComponent,
    ModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
