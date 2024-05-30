// q1 - Using variable concatenation add two different variables together and print this off.
var variable1 = "I will be the first sentence"
var variable2 = "This will be the second sentence"

console.log(variable1+" "+variable2)


//q2 - Use string interpolation to print off a sentence with 5 different variable. These variables can include anything you want.
var name="Saed"
var age=36
var city="london"

console.log(`${variable1} ${variable2} ${name} ${age} ${city}`)

//q3 - Create a shopping list of 5 items

var shoppingList = ["socks", "jackets","hat", "shirts", "tie"]

//q4 - From the method of learnt in this class get. Replace the 4 item in the list and make it something different. Cannot alter original array.

shoppingList[1] = "apples"
console.log(shoppingList)

//q5 - Add 3 extra items into the shopping list array made and print off the new list.**

shoppingList.push("cherry")
shoppingList.push("mangos")
shoppingList.push("salad")
console.log(shoppingList)

//q6 - Slice the list getting every item after the third item.

console.log(shoppingList.slice(1))


//q7 - Array slice the list getting the first and the second item in the list.

console.log(shoppingList.splice(0,2))

//q8 - Create another list that contains more than 10 items

var list2 = ["bread", "milk", "juice", "apples", "banana", "cakes", "sweets", "crisps", "grapes", "vegetables"]
console.log(list2.length)
console.log(list2.includes("juice"))


//q9 - Using the first shopping list. Array slice the second list created using the total number of items in the first list

console.log(shoppingList.length)
console.log(list2.slice(8))








