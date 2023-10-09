// test data 
// vanilla,vanilla,vanilla,strawberry,coffee,coffee

// Prompt User for flavors 
const flavors = prompt('Please enter your order (comma separated) ')

// Split data into an array 
const flavorArr = flavors.split(',')

// declare an empty object to hold flavor counts 
const flavorCounts = {} 

// forEach function using flavor 
flavorArr.forEach(flavor => {
    // check if flavor exists 
    if (!flavorCounts[flavor]) {
        // start count at 0  
        flavorCounts[flavor] = 0 
    }
    // add 1 to flavorCounts if flavor is repeated 
    flavorCounts[flavor]++ 
})

// print out data as a table 
console.table(flavorCounts)