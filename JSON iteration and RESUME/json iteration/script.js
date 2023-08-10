let userName = {
    Name : "vijay",
    Age : 30,
    Gender : "male",
    City : "pollachi"
};



// FOR IN METHOD

for(let key in userName){
console.log(key, userName[key]);
}


// FOR of METHOD

let properties = Object.keys(userName);
 console.log(properties);
 console.log(properties.length);


 for(let property of properties){
console.log(property);
}



let value = Object.values(userName);
console.log(value);

for(let val of value){
console.log(val);
}



let entries = Object.entries(userName);
console.log(entries);

for(let entry of entries){
console.log(`${entry[0]}: ${entry[1]}`);
}


for(let [key, val] of entries){
    console.log(`${key}: ${val}`);
    }



    // FOREACH METHOD 

Object.keys(userName).forEach(key => {
    console.log(key, userName[key]);
})




Object.values(userName).forEach(value => {
    console.log(value);
})




Object.entries(userName).forEach(entry => {
    let [key, value] = entry
    console.log(key, value);
    
})