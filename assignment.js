// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory.

let fruits=["Banana","Apples","Pinapples","Pears","Grapes"]

// Create a separate array with the corresponding stock quantities of each item.
let stockquantities =[10,20,30,40,50]


// Write a function to add a new item to the inventory, updating both arrays.
/* input takes in items ouput both of the arrays  with new items added
items functions takes in two arrays add an element to one array  also to the other array*/
function inventory(x,y){
    fruits.push(x)
     stockquantities.push(y)
return[fruits,stockquantities]
}
let x="oranges"
let y= 13
console.log(inventory(x,y))

// Write a function to update the stock quantity of an existing item.
/* input new stockquantity output array with the newstockquantity of an element process */
function updatequantity(x,newquantity){
let index=fruits.indexOf[x]
if(index !== -1){
    y[index]=newquantity
}
return newquantity
}
console.log(updatequantity("Apples",30))

function sum(){
    let total=0
    for (i=0;i<fruits.length;i++){
        total++
    }
    return total
    
}
let all = sum()
console.log(all)




function lowestStock(){
    let smallest= 0;
    for(i=0;i<stockquantities.length;i++){
        if(stockquantities[i]<stockquantities[smallest])
        smallest=i;
        

    }
    return fruits[smallest]
}
let lowest=lowestStock()
console.log(lowest)


