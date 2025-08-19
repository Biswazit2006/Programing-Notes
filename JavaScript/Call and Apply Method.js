// Booking Function
const book = function(name,seatnum){
    console.log(`${name} Booked a ticket In ${this.Bus},Ticket ${this.bCode}-${seatnum} `);
    this.Ticket.push(`${name}-${seatnum}`);
}
// book('ali','f4')

// Buses (As object)
const Hanif ={
    Bus:'Hanif Paribahan',
    bCode:'HN',
    Ticket:[],
}

const Tuhin ={
    Bus:'Tuhin Paribahan',
    bCode:'TN',
    Ticket:[],
}

const GreenLine = {
    Bus:'Green Line Paribahan',
    bCode:'GL',
    Ticket:[],
}

const Rp={
    Bus:'RP Paribahan',
    bCode:'RP',
    Ticket:[],
}

// Ticket Booking By Call Method 
book.call(Hanif,'Rahul','F3');      //Call Method sintax = call(this,data1,data2,data3,......)
book.call(Tuhin,'Biswazit','C2');

// Ticket Booking By Call Method 
const Ticketdata=['Rahim','D1']     //Make a array with data
book.apply(GreenLine,Ticketdata)    //Appy sintax = appy(this,dataArray)

// Cheak buses ticket
console.log(Tuhin.Ticket);      //For Tuhin
console.log(Hanif.Ticket);      //For Hanif
console.log(Rp.Ticket);         //For Rp
console.log(GreenLine.Ticket);  //For GreenLine