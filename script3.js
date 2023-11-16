// Demande à l'utilisateur de saisir le nombre d'étages pour la pyramide
let nombreEtages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
let i = 0 ;

while (i <= nombreEtages)
{
	console.log(' '.repeat(nombreEtages - i) + '#'.repeat(i));
	i++;
}
