// let age = prompt("What is your age?")
// let travelDistance = prompt("How far you going to travel? (in km)")
// let price = travelDistance * 0.21 

// if(age < 18) price *= 0.8
// if(age > 65) price *= 0.6

// alert(`Your train fare: £ ${price}`)

let age = prompt("What is your age?")

let startPoint = prompt("Choose your starting point form your following: London, Bristol, Oxford, Manchester")

let endPoint = prompt("Choose your destination form your following: London, Bristol, Oxford, Manchester")

let pricePerKM = 0.21
let ticketPrice 

let i=0
if (endPoint == "London")  i=0
if (endPoint == "Bristol") i=1
if (endPoint == "Oxford") i=2
if (endPoint == "Manchester") i=3


let fromLondon = [0, 10, 20, 30]
let fromBristol = [10, 0, 30, 40]
let fromOxford = [20, 30, 0, 20]
let fromManchester = [30, 40, 20, 0]

if (startPoint == "London"){
    ticketPrice = fromLondon[i] * pricePerKM
}

if (startPoint == "Bristol"){
    ticketPrice = fromBristol[i] * pricePerKM
}

if (startPoint == "Oxford"){
    ticketPrice = fromOxford[i] * pricePerKM
}

if (startPoint == "Manchester"){
    ticketPrice = fromManchester[i] * pricePerKM
}

let discountedPrice = ticketPrice
if(age < 18) discountedPrice = ticketPrice * 0.8
if(age > 65) discountedPrice = ticketPrice * 0.6


alert(`The distance between ${startPoint} & ${endPoint} is ${ticketPrice/0.21}km. Your train fare is £${discountedPrice}`)