class Map {
  constructor(longueur, largeur){
    this.tabMap = new Array(longueur);

    //Création Map tab 2 dimensions
    for (var i = 0; i < this.tabMap.length; i++) {
      this.tabMap[i] = new Array(largeur);
    }

    //Initialiser toutes les cases en herbe :
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        this.tabMap[i][j] = new Parcelle(); // de base herbe dans le constructor de Parcelle()
      }
    }

  }
  placerParcelle(indiceX, indiceY,parcelle){
    this.tab[indiceX][indiceY].onclick = parcelle;
  }
}


class Parcelle {
  //Attributs d'une parcelle :
  this.Hauteur = 0;
  this.Largeur = 0;
  this.appearance; // Image a insérer, herbe de base
  this.plantable = false;

  constructor(hauteur,largeur){
    this.Hauteur = hauteur;
    this.Largeur = largeur;
    this.appearance = 'herbe.png';

  }
}

class ParcePlaceMachine extends Parcelle {

}


class ParceTerre extends Parcelle {
  constructor(){
    super(1,1);
    this.appearance = 'terre.png';
    this.plantable = true;
  }
}

class ParcePousse extends ParceTerre {
  constructor(){

  }
}

class ParcePousseFinie extends ParcePousse {

}


let Map1 = new Map(20,20);
let testTerre = new ParceTerre();
Map.placerParcelle(1,1,testTerre); // Place une parcelle de terre en (1,1)
