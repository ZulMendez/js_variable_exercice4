// exo 1 

// let nom = "Mendez" ;
// let prenom = "Zulma" ;
// let ville = prompt("Asuncion") ;
// alert(ville)
// console.log(nom, prenom);

// exo 2

// let nom = "Mendez" ;
// let prenom = "Zulma" ;
// let depart = "Bruxelles" ;
// let destination = "Bora Bora" ;
// console.log(`Le voyage de ${depart} vers ${destination} a été enregistré au nom de ${nom}, ${prenom}`) ;

let quest1 = prompt ('quel est votre prenom?') ;
let quest2 = prompt ('quel est votre nom?') ;
let quest3 = prompt ('quel est votre ville de départ?') ;
let quest4 = prompt ('quel est votre destination?') ;

let phrase = `Le voyage de ${quest3} vers ${quest4} a été enregistré au nom de ${quest2}, ${quest1}` ;
console.log(phrase) ;