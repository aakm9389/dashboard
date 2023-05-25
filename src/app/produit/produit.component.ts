import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   isChecked = false;
   filteredItems: string[] = [];
   critereRecherche: string = '';
   toggleCheckbox() {
     this.isChecked = !this.isChecked;
   }

  
 
   
  
   HommeHabit =[
    {marque: 'T-shirt',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Jean',
    description:'La qualité fait la différence',
    prix:'20.000F',
    img:'assets/img/jean.jpg'
    },
    {marque: 'Jeans',
    description:'large sélection de jeans',
    prix:'10.000F',
    img:'assets/img/pantalon1.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'5.000F',
    img:'assets/img/homme1.jpg'
    },
    {marque: 'Chaussures',
    description:'La qualité pure',
    prix:'15.000F',
    img:'assets/img/chaussure.jpg'
    },
    {marque: 'Robe',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img/robe.jpg'
    },
    {marque: 'Collier ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'assets/img/collier.jpg'
    },
    {marque: 'talon',
    description:'Confortable pour vos filles',
    prix:'15.000F',
    img:'assets/img/talon.jpg'
    },
   
    {marque: 'Robe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'assets/img/robe2.jpg'
    },
    {marque: 'Sac à main ',
    description:'Souplesse pure',
    prix:'7.000F',
    img:'assets/img/sac2.jpg'
    },
    {marque: 'T-shirt',
    description:'Confortable-Durable',
    prix:'5.000F',
    img:'assets/img/T-shirt3.png'
    },
    {marque: 'Habit-bb',
    description:'Elégance pure',
    prix:'10.000F',
    img:'assets/img/bb.jpg'
    },
    {marque: 'Chemise-Oversize',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'assets/img/homme.jpg'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'assets/img/bazin.jpg'
    }
   ,
 
    
    {marque: 'Jordan',
    description:'Elégance pure',
    prix:'25.000F',
    img:'assets/img/chaussure4.jpg'
    },
    {marque: 'Robe ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'assets/img/Robe5.jpg'
    },
    {marque: 'Jean ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'assets/img/pantalon3.jpg'
    },
    {marque: 'Chemise-Oversize',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'assets/img/homme.jpg'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'assets/img/pantalon2.jpg'
    },
    {marque: 'Ceinture',
    description:'Dior en cuir noir',
    prix:'20.000F',
    img:'assets/img/homme2.jpg'
    },
    {marque: 'Vaxe',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'assets/img/femme1.jpg'
    },
    {marque: 'Fashion',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img/chaussure10.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'assets/img/lunettes.jpg'
    },
    {marque: 'Pull ',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'assets/img/pull.jpg'
    },
    
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'assets/img/montre.jpg'
    },
    {marque: 'jupe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'assets/img/jupe.jpg'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'assets/img/bazin.jpg'
    },
    {marque: 'Papettes',
    description:'Simple et leger',
    prix:'10.000F',
    img:'assets/img/tapettes.jpg'
    },
    {marque: 'Robe-Oversize',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/img/Robes.jpg'
    },
    {marque: 'Collier',
    description:'Mettre votre tenue en valeur',
    prix:'20.000F',
    img:'assets/img/collier2.jpg'
    },
    {marque: 'T-shirt',
    description:'Être classe est un choix',
    prix:'5.000F',
    img:'assets/img/T-shirt.jpg'
    },
    {marque: 'Pantalon',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'assets/img/Pantalon.jpg'
    },
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',

    }
  ]
  
modif: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
Recherche: string='';
Nombre: number=10;
P: boolean=false;




  OnModif(produit: any){
    this.modif= produit.marque
    this.Descrip= produit.description
    this.Prixx= produit.prix
    this.Mark= produit.marque
this.vue=true


  }
  OnRetour(){
    if(this.modif){
      this.modif=''
      this.vue=false
   
    }
  }
  OnSupprimer(index: any){
    if (index !== -1) {
      // Utilisation de la méthode splice pour supprimer l'élément du tableau
      this.HommeHabit.splice(index, 1);
     
    }
  }


  transform(items: any[], critereRecherche: string): any[] {
    // Vérifier si la liste d'items et le critère de recherche sont définis
    if (!items || !critereRecherche) {
      return items; // Retourner la liste d'items sans filtrage si l'un des deux est vide
    }

    // Filtrer les items en fonction du critère de recherche
    critereRecherche = critereRecherche.toLowerCase(); // Convertir le critère de recherche en minuscules pour la comparaison insensible à la casse
    return items.filter(item => item.nom.toLowerCase().includes(critereRecherche)); // Filtrer les items dont le nom contient le critère de recherche
  }
}
