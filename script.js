/* Declaré un variable */
let sayHellow = "coucou depuis la console depuis une variable";
/* Affiché en console */
console.log(sayHellow);
/* affiché type en console */
console.log(typeof sayHellow);

console.log("--------------------------------------------------------");
/* test affichage types */ 
let myFloat = 3.5;
let myNumber = 5;
let myStatus = true;
console.log(myFloat)
console.log(typeof myFloat)
console.log(myNumber);
console.log(typeof myNumber);
console.log(myStatus);
console.log(typeof myStatus);
console.log("--------------------------------------------------------");
/* Différence "let"(variable "normal") "var"(variable global)  et "const"(constante(qui ne peux etre modifié)) */

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";
  console.log(data3);
} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"


console.log("--------------------------------------------------------");
let a = 1;
let b = 1;
a++;
console.log(a);
console.log(b += 2);


/* En JS on peux concaténer des strings avec un + */
let c = "Bonjour", d = "Monde";
console.log(c + " " + d);


console.log("--------------------------------------------------------");
console.log(String(36));
console.log(typeof String(36));
console.log(Number("5"));
console.log(typeof Number(5));


console.log("--------------------------------------------------------");
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP[0]);
console.log(typeof statusDeTHP);
console.log("--------------------------------------------------------");
console.log(typeof statusDeTHP);
console.log("--------------------------------------------------------");
console.log(statusDeTHP);
console.log(statusDeTHP[statusDeTHP.length - 1]);
statusDeTHP[0] = "La moussaille";
console.log(statusDeTHP[0]);
statusDeTHP.push("Flibustier");
console.log(statusDeTHP[3]);
statusDeTHP.unshift("Pirate");
console.log(statusDeTHP);
statusDeTHP.pop();
console.log(statusDeTHP);
statusDeTHP.shift();
console.log(statusDeTHP);
statusDeTHP.push("Flibustier");
statusDeTHP.push("Pirate");
console.log(statusDeTHP);
console.log(statusDeTHP.slice(0,2));
console.log(statusDeTHP);
console.log(statusDeTHP.slice(3,5));
console.log(statusDeTHP);
/* Ici on accède a l'array contenu dans statusDeTHP puis on regarde le nombre d'éléments dans l'array (-1 minimum car une array se compte a partir de 0)  */
console.log(statusDeTHP[statusDeTHP.length - 2]);
console.log(statusDeTHP[statusDeTHP.length - 1]);
/* Renvoi "undefined" puisque que si 3élement renvois 3 et que l'index du dernier des 3 éléments et en réalité 2 (0.1.2) */
console.log(statusDeTHP[statusDeTHP.length]);
console.log("--------------------------------------------------------");

let e = 8;
console.log("Bonjour à tous les "+ e);
console.log(e + ` 3 ${e}`);

let numStudent = 5;
let statement = `Dans mon groupe on est ${numStudent} gars qui fonnt un site de marriage (OMG)`;
console.log(statement);
let testIndex = "The Hacking Project";
console.log(testIndex.length);
console.log("TheHackingProject"[0] +"TheHackingProject"[1] + "TheHackingProject"[2]);
console.log("The Hacking Project".indexOf("Hacking"));
console.log(testIndex.toLowerCase());
console.log(testIndex.toUpperCase());

console.log("--------------------------------------------------------");
const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson);

const newContent = lesson.join(",");
console.log(newContent);
console.log("--------------------------------------------------------");

let THPSessionNum2 = { numOfMouss: 80, cities: ["Paris", "Lyon", "Montpellier"], successRate: 0.80, sessionMoto: "keep pushing to the top"};
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);
console.log(THPSessionNum2.cities);
console.log(THPSessionNum2.successRate);
console.log("--------------------------------------------------------");

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir
THPSessionNum2.favoriteLesson = "La non présentation de Sinatra" // je modifie l'attribut que j'ai rajouté précédement
console.log(THPSessionNum2.favoriteLesson); 
let attributName = "successRate";
console.log(THPSessionNum2[attributName]);
console.log(THPSessionNum2.successRate);

console.log("--------------------------------------------------------");
console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number


/* Aussi, quand on débute, il est fortement conseillé de se contenter d'utiliser === sinon tu risques d'avoir des surprises.
De même, on a un opérateur != (compare le contenu) et un !== (compare le contenu et le type) : utilise !== au maximum quand tu commences en JS. */

console.log("--------------------------------------------------------");
let number = 2; //le test avec valeur 2
if(number > 0) {
console.log("number est positif");
} else if(number === 0) {
console.log("number est nul");
} else {
console.log("number est négatif");
} 
let numberNegative = -1; // le test avec valeur -1
if(numberNegative > 0) {
  console.log("number est positif");
} else if(numberNegative === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 
let number0 = 0; // le test avec valeur 0
if(number0 > 0) {
  console.log("number est positif");
} else if(number0 === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 
let numberstr = "0"; // le test avec valeur "0"
if(number0 > 0) {
  console.log("number est positif");
} else if(numberstr == 0) { // En JS, il existe un opérateur == (deux signes "égal") et un opérateur === (trois signes "égal"). Ils sont très différents : == va comparer uniquement le contenu des deux variables alors que === va comparer le contenu et le type.
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 
if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true && false) {
  console.log("ce message ne s'affiche pas car avec un ET, si les deux conditions ne sont pas TRUE, le résultat est false je fait cela pour moi car cette condition n'as aucun sens en vrai...");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}
if (!true) {
  console.log("ce message ne s'affiche pas car un NON sur TRUE donne FALSE");
}
let test = false;
if (test === !true) {
  console.log("ce message s'affiche car la variable 'test' est false et NON sur TRUE donne FALSE");
}
console.log("--------------------------------------------------------");


weekNum = 1; //teste avec plusieurs valeurs
switch (weekNum) {

case 1:
console.log("Semaine 1 - Introduction au Code");
break;

case 2:
console.log("Semaine 2 - Découverte de Ruby");
break;

case 3:
console.log("Semaine 3 - Programmation Orientée Objet");
break;

case 4:
console.log("Semaine 4 - Initiation à Rails");
break;

case 5:
console.log("Semaine 5 - Rails intermédiaire");
break;

case 6:
console.log("Semaine 6 - Rails avancé");
break;

case 7:
console.log("Semaine 7 - HTML / CSS et intro au JS");
break;

case 8:
console.log("Semaine 8 - JavaScript de front");
break;

default:
console.log(`Cette entrée '${weekNum}' n'est pas reconnue`);
break;
}
console.log("--------------------------------------------------------");
let num = 2; //fais aussi le test avec un chiffre non nul
if (num) {
  console.log(`ce message ne s'affiche que si num (valeur stocké dans la variable : ' ${num} ') est non nul` );
}

let string = "Blabla"; //fais aussi le test avec un mot non vide
if (string) {
  console.log(`ce message ne s'affiche que si string ( valeur stocké dans la variable : ' ${string} ') est non vide`);
}

let myVariable  = [" Barbecues", " Poulets", " Merguezs", " Brochettes"]// ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log(`ce message ne s'affiche que si myVariable ( valeur stocké dans la variable : ' ${myVariable} ') contient une valeur`);
}

console.log("--------------------------------------------------------");
// LES BOUCLES
// boucle for:
for(let count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}
// console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
//passe count en var pour tester ce que ça donne
for(var count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}
console.log(count);

// boucle while :
let answer = "oui";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

let word = "";
let letter;

while (true) {
  letter = prompt('Tape UNE lettre stp :');

  if (letter) {
    word += letter; //on rajoute la lettre saisie à la suite du mot
    console.log(word);
  } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
    break; // On quitte la boucle
  }
}
console.log(`voilà ce que tu as tapé : ${word}`);
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :");
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :");
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");
// LES FONCTIONS 

function sayHello() {
  console.log("Hello");
}

sayHello();

function showString(blabla) {
  console.log(blabla);
}

showString("Je sais faire une fonction basique simple basique.. parce que je suis pas trop con");

console.log("--------------------------------------------------------");
function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));
console.log(multiply(2, multiply(2, 3)));
console.log(multiply(2, multiply(2,multiply(2,3)))); 
console.log(multiply(2, multiply(2,multiply(2,multiply(2,3))))); // inception
// console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction

console.log("--------------------------------------------------------");

const multiplys = (inputNumber1, inputNumber2) =>{ // déclarer fonction annonyme de façon épuré
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiplys(2, 3));

const otherMultiply = multiplys; //On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3));

const eniemeMultiply = otherMultiply;//Et ainsi de suite
console.log(eniemeMultiply(2, 3));