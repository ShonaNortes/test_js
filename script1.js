// Fonction pour dire bonjour avec un le prénom renseigné 

let prenom = prompt("Entrez votre prénom :");

if (prenom != null && prenom.length > 0)
{
    console.log("Bonjour, " + prenom + " !");
} else {
    console.log("Vous n'avez pas saisi de prenom.");
}
