import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './Les-modules/achat/achat.component';
import { BashComponent } from './Les-modules/bash/bash.component';
import { Achat2Component } from './Les-modules/achat2/achat2.component';
import { InventaireComponent } from './Les-modules/inventaire/inventaire.component';
import { Inventaire2Component } from './Les-modules/inventaire2/inventaire2.component';
import { CommandeComponent } from './Les-modules/commande/commande.component';
import { Commande2Component } from './Les-modules/commande2/commande2.component';
import { RapportComponent } from './Les-modules/rapport/rapport.component';
import { StatistiqueComponent } from './Les-modules/statistique/statistique.component';
import { ConnexionComponent } from './Les-modules/connexion/connexion.component';
import { NotifComponent } from './Les-modules/notif/notif.component';
import { ParaComponent } from './Les-modules/para/para.component';
import { ProfilComponent } from './Les-modules/profil/profil.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path : '',
    component : BashComponent
  },
  {
    path : 'bash',
    component : BashComponent
  },
  {
    path : 'achat',
    component : AchatComponent
  },
  {
    path : 'achat2',
    component : Achat2Component
  },
  {
    path : 'inventaire',
    component : InventaireComponent
  },
  {
    path : 'inventaire2',
    component : Inventaire2Component
  },
  {
    path : 'commande',
    component : CommandeComponent
  },
  {
    path : 'commande2',
    component : Commande2Component
  },
  {
    path : 'statistique',
    component : StatistiqueComponent
  },
  {
    path : 'rapport',
    component : RapportComponent
  },
  {
    path : 'para',
    component : ParaComponent
  },
  {
    path : 'notif',
    component : NotifComponent
  },
  {
    path : 'connexion',
    component : ConnexionComponent
  },
  {
    path : 'profil',
    component : ProfilComponent
  },
  {
    path : 'produit',
    component : ProduitComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
