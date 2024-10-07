const readline=require('readline-sync') 

let book_store=[
    { name: "The Great Gatsby", price: 499, status: "available", quantity: 5 },
    { name: "To Kill a Mockingbird", price: 699, status: "available", quantity: 10 },
    { name: "1984", price: 299, status: "unavailable", quantity: 0 },
    { name: "The Catcher in the Rye", price: 399, status: "available", quantity: 4 },
    { name: "The Hobbit", price: 850, status: "available", quantity: 7 },
    { name: "Fahrenheit 451", price: 200, status: "unavailable", quantity: 0 },
    { name: "Moby-Dick", price: 549, status: "available", quantity: 3 },
    { name: "War and Peace", price: 999, status: "available", quantity: 6 },
    { name: "Pride and Prejudice", price: 199, status: "available", quantity: 12 },
    { name: "Jane Eyre", price: 449, status: "unavailable", quantity: 0 },
    { name: "The Lord of the Rings", price: 899, status: "available", quantity: 9 },
    { name: "The Book Thief", price: 750, status: "available", quantity: 8 },
    { name: "Wuthering Heights", price: 300, status: "unavailable", quantity: 0 },
    { name: "Crime and Punishment", price: 649, status: "available", quantity: 4 },
    { name: "Brave New World", price: 350, status: "available", quantity: 3 },
    { name: "The Odyssey", price: 250, status: "unavailable", quantity: 0 },
    { name: "Animal Farm", price: 150, status: "available", quantity: 15 },
    { name: "Les Misérables", price: 999, status: "available", quantity: 7 },
    { name: "Dracula", price: 799, status: "unavailable", quantity: 0 },
    { name: "The Picture of Dorian Gray", price: 399, status: "available", quantity: 6 }
]

function displayMenu(){
    console.log(`
        ****Display Menu****\n
       1) show available books to users
       2) add book
       3) show cart
      `);
    
       choice = readline.question('Enter your choice (1, 2 or 3): ');
    
      switch(choice) {
        case '1':
          console.log("You selected: show available books to users");
          break;
        case '2':
          console.log("You selected: add book");
          break;
        case '3':
          console.log("You selected: show cart");
          break;
        
    }
}
displayMenu()








