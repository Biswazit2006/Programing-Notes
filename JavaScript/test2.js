// Booking Function
const book = function(name,seatnum){
    console.log(`${name} Booked a ticket In ${this.Bus},Ticket ${this.bCode}-${seatnum} `);
    this.Ticket.push(`${name}-${seatnum}`);
}
// book('ali','f4')

// Buses
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

// Ticket Booking
book.call(Hanif,'Rahul','F3');
// console.log(Hanif);
book.call(Tuhin,'Biswazit','C2')

// Booking with appy method
const Ticketdata=['Rahim','D1']
book.apply(GreenLine,Ticketdata)