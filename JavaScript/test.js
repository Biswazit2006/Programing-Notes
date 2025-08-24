const person = {
    firstName: "Alom",
    lastName: "Hossain",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
};

// let display = person.fullName;
// console.log(setTimeout(display.bind(person),2000));

const GreenLine = {
    Bus: "Green Line Paribahan",
    bCode: "GL",
    Ticket: [],
};

GreenLine.busses = 20;
GreenLine.buyBus = function(){
    this.busses++;
}
GreenLine.buyBus();


// console.log(this.busses);
// console.log(GreenLine);

// document.querySelector(".btn").addEventListener('click',GreenLine.buyBus.bind(GreenLine));
// document.querySelector(".btn").addEventListener('click')