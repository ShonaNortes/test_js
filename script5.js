const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  // Est-ce que tous les livres ont été empruntés au moins une fois ?
  const allRented = books.every(book => book.rented > 0);
  console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?", allRented ? "Oui" : "Non");
  
  // Livre le plus emprunté
  const mostRented = books.reduce((maxRented, currentBook) => (currentBook.rented > maxRented.rented) ? currentBook : maxRented);
  console.log("Le livre le plus emprunté est :", mostRented.title);
  
  // Livre le moins emprunté
  const leastRented = books.reduce((minRented, currentBook) => (currentBook.rented < minRented.rented) ? currentBook : minRented);
  console.log("Le livre le moins emprunté est :", leastRented.title);
  
  // Trouve le livre avec l'ID: 873495
  const bookByID = books.find(book => book.id === 873495);
  console.log("Le livre avec l'ID 873495 est :", bookByID.title);
  
  // Supprime le livre avec l'ID: 133712
  const updatedBooks = books.filter(book => book.id !== 133712);
  
  // Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
  const sortedBooks = updatedBooks.filter(book => book.id !== 133712).sort((a, b) => a.title.localeCompare(b.title));
  console.log("Les livres triés par ordre alphabétique sont :", sortedBooks);
  