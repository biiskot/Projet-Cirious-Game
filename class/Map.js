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
        this.tabMap[i][j] = new Parcelle(1,1); // de base herbe dans le constructor de Parcelle()
      }
      afficherMap();
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


  constructor(hauteur,largeur){
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.appearance = 'herbe.png';
    this.plantable = false;
  }

  afficherParcelle(indiceX, indiceY,map){
    //map.tabMap[indiceX][indiceY]
  }

}

class ParceTerre extends Parcelle {
  constructor(){
    super(1,1);
    this.appearance = 'terre.png';
    this.plantable = true;
  }

  launchPousse(graine, parcelledeterre){
    //graine = new Carotte();
    parcelledeterre = new ParcePousse(graine, parcelledeterre);

  }
}



function wait(i) {
  setTimeout(function() {
  }, 1000 * i); // fonction delay de 1 seconde
}

class ParcePousse extends Parcelle {
  this.graineChoisie;
  this.pousseFinie = false;
  this.timerPousse = 0;

  constructor(graine,parcelle){
    super(1,1);
    if(parcelle.plantable == true){
      parcelle.appearance = 'pousses.png'
      this.graineChoisie = graine;

      poussePlante(parcelle);
    }

    else {
      console.log("Vous ne pouvez pas planter sur cette case");
    }
  }

  poussePlante(parcellequipousse){
    while (this.timerPousse < this.graineChoisie.growTime) { // Si le timer est inférieur au temps de pousse
    wait(i); //attendre une seconde
     this.timerPousse++; // timer += 1 seconde
  }
  this.pousseFinie = true;
  recolte(parcellequipousse); // Appel de la fonction qui change l'image de la parcelle et donne les récompenses
}

  recolte(parcellePrete){
    if(this.pousseFinie == true){
      this.appearance = 'poussesFinies.png'

      parcellePrete.onclick = function(){
        //joueur.solde += this.graineChoisie.reward; // ajoute au solde du joueur la récompense définie dans la classe de la graine
        //joueur.inventaire // Nouvelle case tableau qui ajoute les carotte ou patates...
        console.log("récolte effectuée, or gagné :" + this.graineChoisie.reward + " nouveau solde = " + joueur.solde);
      }; // Donne de l'argent et les ressources au joueur (classe Player) au moment du clic sur la parcelle passée en parametre
    }
  }

}




