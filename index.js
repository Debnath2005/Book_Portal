const readline=require('readline-sync') 

let book_store=[
    { id: 100, name: "The Great Gatsby", price: 499, status: "available", quantity: 5 },
    { id: 101, name: "To Kill a Mockingbird", price: 699, status: "available", quantity: 10 },
    { id: 102, name: "1984", price: 299, status: "unavailable", quantity: 0 },
    { id: 103, name: "The Catcher in the Rye", price: 399, status: "available", quantity: 4 },
    { id: 104, name: "The Hobbit", price: 850, status: "available", quantity: 7 },
    { id: 105, name: "Fahrenheit 451", price: 200, status: "unavailable", quantity: 0 },
    { id: 106, name: "Moby-Dick", price: 549, status: "available", quantity: 3 },
    { id: 107, name: "War and Peace", price: 999, status: "available", quantity: 6 },
    { id: 108, name: "Pride and Prejudice", price: 199, status: "available", quantity: 12 },
    { id: 109, name: "Jane Eyre", price: 449, status: "unavailable", quantity: 0 },
    { id: 110, name: "The Lord of the Rings", price: 899, status: "available", quantity: 9 },
    { id: 111, name: "The Book Thief", price: 750, status: "available", quantity: 8 },
    { id: 112, name: "Wuthering Heights", price: 300, status: "unavailable", quantity: 0 },
    { id: 113, name: "Crime and Punishment", price: 649, status: "available", quantity: 4 },
    { id: 114, name: "Brave New World", price: 350, status: "available", quantity: 3 },
    { id: 115, name: "The Odyssey", price: 250, status: "unavailable", quantity: 0 },
    { id: 116, name: "Animal Farm", price: 150, status: "available", quantity: 15 },
    { id: 117, name: "Les Misérables", price: 999, status: "available", quantity: 7 },
    { id: 118, name: "Dracula", price: 799, status: "unavailable", quantity: 0 },
    { id: 119, name: "The Picture of Dorian Gray", price: 399, status: "available", quantity: 1 }   
]
let Cards=[]
function displayMenu(){
    console.log(`
        ****Display Menu****\n
       1) show available books to users
       2) add book
       3) show cart
      `);
    
      let choice = readline.question('Enter your choice (1, 2 or 3): ');
    
      switch(choice) {
        case '1':
          console.log("You selected: show available books to users");
          handleAvailableBook();
          break;
        case '2':
          console.log("You selected: add book");
          handleAddCard()
          break;
        case '3':
          console.log("You selected: show cart");
          handleShowCard()
          break;
    }
}

displayMenu()

function handleAvailableBook(){
    console.log(`
+----------+-------------------------------+--------------------+--------------+------------+
|   Id     |             Name              |       Price        |    Status    |  Quantity  |
+----------+-------------------------------+--------------------+--------------+------------+`);
    book_store.forEach((book)=>{
        console.log(`| ${String(book.id).padEnd(8)} | ${book.name.padEnd(29)} | ${String(book.price).padEnd(18)} | ${book.status.padEnd(12)} | ${String(book.quantity).padEnd(10)} |`);   
    })
console.log("+----------+-------------------------------+--------------------+--------------+------------+");

displayMenu()
}


function handleAddCard(){
  let id = readline.question('Enter the Id of Book you want to add to Cart: ');
  
  const filter=book_store.filter((book)=>{
    return book.id==id
  })
  
  if(filter.length!=0 && filter[0].quantity !=0){
    Cards.push({...filter[0], quantity:1})
    book_store.forEach((book)=>{
      if(book.id==id){
        book.quantity -= 1
      if(book.quantity==0){
         book.status="unavailable"
      }
      }
    })
    console.log("Successfully Book Added To Cart");
  }
  else{
    console.log("Invalid Book Id Or quantity is Empty");
  }
  displayMenu()
}

function handleShowCard(){
 console.log("");
  console.log(`         ---->>>> View Card Items <<<<----

+----------+-------------------------------+--------------------+------------+
|   Id     |             Name              |       Price        |  Quantity  |
+----------+-------------------------------+--------------------+------------+`);
   Cards.map((book)=>{
    console.log(`| ${String(book.id).padEnd(8)} | ${book.name.padEnd(29)} | ${String(book.price).padEnd(18)} | ${String(book.quantity).padEnd(10)} |`);
   })
console.log(`+----------+-------------------------------+--------------------+------------+`)
}