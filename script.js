// test data 
// vanilla,vanilla,vanilla,strawberry,coffee,coffee

// Prompt User for flavors 
const flavors = prompt('Please enter your order (comma separated) ')

// Split data into an array 
const flavorArr = flavors.split(',')

// Declare an empty object to hold flavor counts 
const flavorCounts = {} 

// forEach function using flavor 
flavorArr.forEach(flavor => {
    // check if flavor exists 
    if (!flavorCounts[flavor]) {
        // Initialize to zero 
        flavorCounts[flavor] = 0 
    }
    // Add 1 to flavorCounts if flavor exists
    flavorCounts[flavor]++ 
})

// Print out data as a table 
console.table(flavorCounts)