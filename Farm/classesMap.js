class Map {
  constructor(longueur, largeur){
    this.tabMap = new Array(longueur);

    //Création Map tab 2 dimensions
    for (var i = 0; i < this.tabMap.length; i++) {
      this.tabMap[i] = new Array(largeur);
    }

    //Initialiser toutes les cases en herbe :
    for (var i = 0; i < longueur.length; i++) {
      for (var j = 0; j < largeur.length; j++) {
        this.tabMap[i][j] = new Parcelle(); // de base herbe dans le constructor de Parcelle()
      }
    }

  }
  placerParcelle(indiceX, indiceY,parcelle){
    this.tabMap[indiceX][indiceY].onclick = parcelle;
  }

  afficherMap(){
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        //
      }
    }
  }
}



class Parcelle {
  //Attributs d'une parcelle :
  this.hauteur = 0;
  this.largeur = 0;
  this.appearance; // Image a insérer, herbe de base
  this.plantable = false;

  constructor(hauteur,largeur){
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.appearance = 'herbe.png';

  }

  afficherParcelle(indiceX, indiceY,map){
    //map.tabMap[indiceX][indiceY]
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

  launchPousse(parcelledeterre){
    parcelledeterre = new ParcePousse();
    poussePlante(parcelledeterre);
  }
}



function wait(i) {
  setTimeout(function() {
  }, 1000 * i); // fonction delay de 1 seconde
}

class ParcePousse extends ParceTerre {
  this.graineChoisie;
  this.pousseFinie = false;
  this.timerPousse = 0;

  constructor(graine){
    super();
    if(this.plantable == true){
      this.appearance = 'pousses.png'
      this.graineChoisie = graine;

    }

    else {
      console.log("Vous ne pouvez aps planter sur cette case");
    }
  }

  poussePlante(parcellequipousse){
    while (this.timerPousse < this.graineChoisie.growTime) {
    wait(i);
     this.timerPousse++;
  }
  this.pousseFinie = true;
  recolte(parcellequipousse); // Appel de la fonction qui change l'image de la parcelle et donne les récompenses
}

  recolte(parcellePrete){
    if(this.pousseFinie == true){
      this.appearance = 'poussesFinies.png'

      parcellePrete.onclick = function(){
        //joueur.solde += this.graineChoisie.reward; // ajoute au solde du joueur la récompense définie dans la classe de la graine
        //joueur.inventaire // Nouvelle case tableau qui joute les carotte ou patates...

      }; // Donne de l'argent et les ressources au joueur (fonction de la classe Player) au moment du clic sur la parcelle passée en parametre
    }
  }

}



let Map1 = new Map(20,20);

let testTerre = new ParceTerre();
Map.placerParcelle(1,1,testTerre); // Place une parcelle de terre en (1,1)
