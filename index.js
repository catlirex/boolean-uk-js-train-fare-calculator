let age = prompt("What is your age?")
let travelDistance = prompt("How far you going to travel? (in km)")
let price = travelDistance * 0.21 

if(age < 18) price *= 0.8
if(age > 65) price *= 0.6

alert(`Your train fare: £ ${price}`)
