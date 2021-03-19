class Graine {
  this.name;
  this.growTime;
  this.reward;
  this.price;
  constructor(nom, tempsPousseSeconds, prix, recompenses){
    this.name = nom;
    this.growTime = tempsPousseSeconds;
    this.price = prix;
    this.reward = recompenses;
  }
}

class Patate extends Graine {
  constructor(){
    super('patate',60,5);
    this.recompenses =
  }
}

class Carotte extends Graine {
  constructor(){
    super('carotte',60);
  }
}

class Carotte extends Graine {
  constructor(){
    super('patate',60);
  }
}
