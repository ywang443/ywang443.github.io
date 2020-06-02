
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.99
	},
	{
		name: "Avocado",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.99
	},
	{
		name: "Beef Stew Chuncks",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 26.32
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Chichken wings",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.51
	},
	{
		name: "Garlic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Pork Lion Chop",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.88
	},
	{
		name: "Raspberry",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Sausage",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.00
	},
	{
		name: "Shrimp",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].glutenFree == true)&&(prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}
		else if (restriction == "None"){
			product_names.push([prods[i].name,prods[i].price]);
		}
	}
	product_names.sort(sortPrice);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function sortPrice(x,y){
	if (x[1] === y[1] ){
		return 0;
	}
	else {
		return (x[1] < y[1])? -1 : 1;
	}
}
