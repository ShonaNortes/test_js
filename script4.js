const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  // Filtre les entrepreneurs nés dans les années 70
  const entrepreneursAnnees70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
  console.log("Les entrepreneurs nés dans les années 70 sont :", entrepreneursAnnees70);
  
  // Array contenant le prénom et le nom des entrepreneurs
  const nomsComplets = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
  console.log("Les prénoms et noms des entrepreneurs sont :", nomsComplets);
  
  // Calcul de l'âge actuel de chaque inventeur
  const dateActuelle = new Date().getFullYear();
  entrepreneurs.forEach(entrepreneur => {
      const age = dateActuelle - entrepreneur.year;
      console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`);
  });
  
  // Trie les entrepreneurs par ordre alphabétique du nom de famille
  const entrepreneursTries = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
  console.log("Les entrepreneurs triés par nom de famille sont :", entrepreneursTries);
  