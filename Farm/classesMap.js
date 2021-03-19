class Map {
  constructor(longueur, largeur){
    this.tabMap = new Array(longueur);

    //Création Map 2 dimensions
    for (var i = 0; i < this.tabMap.length; i++) {
      this.tabMap[i] = new Array(largeur);
    }

    //Initialiser toutes les cases en herbe :
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        this.tabMap[i][j] = new BasicParcelle();
      }
    }

  }
  placerParcelle(indiceX, indiceY,parcelle){
    this.tab[indiceX][indiceY] = parcelle;
  }
}



class BasicParcelle {
  //Attributs d'une parcelle :
  this.Hauteur = 0;
  this.Largeur = 0;
  this.appearance; // Image a insérer, herbe de base

  constructor(hauteur,largeur){
    this.Hauteur = hauteur;
    this.Largeur = largeur;
    this.appearance = 'herbe.png';
    placerParcelle(0,0)
  }
}

class ParceTerre extends BasicParcelle {

}

class ParcePousse extends ParcTerre {

}

class ParcePousseFinie extends ParcPousse {

}

class ParcePlaceMachine extends BasicParcelle {

}

let Map1 = new Map(20,20);
