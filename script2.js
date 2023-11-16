// Fonction pour calculer la factorielle d'un nombre
function factorielle(n) 
{
  let i = 1;
  let result = 1;

  while (i <= n)
  {
      result = result * i;
      i++;
  }
  console.log(result);
  alert(result);
}

// Demande à l'utilisateur de saisir un nombre pour calculer sa factorielle
let nombre = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));
factorielle(nombre);