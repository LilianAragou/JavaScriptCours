class warrior {
    //enregistre les valeurs de base pour réinitialiser le personnage si nécessaire
    constructor(name, hp, dmg, precision) {
        this.basename = name;
        this.basehp = hp;
        this.basedmg = dmg;
        this.baseprecision = precision;
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.precision = precision;
    }
    //affiche le résultat de l'attaque et retire les hp de l'ennemi
    attack(enemy){
        if(this.precision_check()){
            enemy.hp = enemy.hp - this.dmg;
            console.log(this.name + " a touché sa cible, il infligé " + this.dmg.toString() + " dégats !");
        } else {
            console.log(this.name + " a raté sa cible.");
        }
    }
    precision_check(){
        if(this.precision>Math.random()){
            return true
        }
        return false
    }
    init(){
        this.name = this.basename;
        this.hp = this.basehp;
        this.dmg = this.basedmg;
        this.precision = this.baseprecision;
    }
}

//fonction pour simuler un combat
function fight(fighter1, fighter2){
    //remet les hp et autres stat du combattants à celles définies pour qu'il puisse enchainer les combats
    fighter1.init();
    fighter2.init();
    console.log(fighter1.name + " combat contre " + fighter2.name + ", que le meilleur gagne !");
    //combat tant que les comnbattants on des hp, les 2 attaquent en simultané
    while(fighter1.hp > 0 && fighter2.hp > 0){
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }
    /*celui qui a le moins d'hp à la fin est éliminé, ce qui empêche les égalités
    ou les combats injustes ou l'un commencerait avant l'autre
    ex : Garen finit avec 0 hp et darius finit avec -2 hp, ils sont tous
    les 2 morts mais garen gagne*/
    if(fighter1.hp>fighter2.hp){
        console.log(fighter1.name + " a gagné.");
        return fighter1
    } else{
        console.log(fighter2.name + " a gagné.");
        return  fighter2
    }
}

//fonction pour créer un tournoi à partir d'une liste de combattants
function start_tournoi(list){
    //initialise les variables
    let l1 = list;
    let l2 = [];
    let i = 0
    while(l1.length > 1) {
        l2 = [];
        //pour chaque paire de combattant, lance un combat
        for(i = 0; i < l1.length - 1; i += 2){
            l2.push(fight(l1[i], l1[i + 1]));
        }
        //si il reste un combattant isolé à la fin, le faire progresser au prochain round
        if (i + 1 == l1.length) {
            l2.push(l1[length])
        }
        l1 = l2;
    }
    console.log(l1[0].name + " a gagné le tournoi.");
}

//fonction pour mélanger la liste
function shuffle(list) {
    //on fait des échanges aléatoires pour chaque élément de la liste
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}

//liste des personnages avec leurs statistiques
var caitlyn = new warrior("Caitlyn", 10, 5, 1);
var garen = new warrior("Garen", 20, 4, 0.65);
var darius = new warrior("Darius", 18, 5, 0.6);
var ekko = new warrior("Ekko", 14, 7, 0.4);
var ornn = new warrior("Ornn", 23, 3, 0.7);
var ashe = new warrior("Ashe", 10, 6, 0.8);
var fortune = new warrior("Miss Fortune", 11, 5, 0.9);
var anivia = new warrior("Anivia", 12, 10, 0.3);

//initialisation de la liste des combattants du tournoi et mélange pour avoir des tournois différents à chaque fois
var list = [caitlyn, garen, darius, ekko, ornn, ashe, fortune, anivia];
shuffle(list);
start_tournoi(list);