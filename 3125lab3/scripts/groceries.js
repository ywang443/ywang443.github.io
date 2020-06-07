// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products
// All of the products images are downloads from https://www.loblaws.ca/

var products = [
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 9.00,
		category: "fruits",
		image: "img/apple.png",
	},
	{
		name: "Avocado",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.00,
		category: "fruits",
		image: "img/avocado.png",
	},
	{
		name: "Beef Stew Chuncks",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 26.00,
		category: "meat",
		image: "img/BeefStewChuncks.png",
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.50,
		category: "bakery",
		image: "img/bread.png",
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.00,
		category: "vegetables",
		image: "img/brocoli.png",
	},
	{
		name: "Chichken wings",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.20,
		category: "meat",
		image: "img/wings.png",
	},
	{
		name: "Garlic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00,
		category: "vegetables",
		image: "img/garlic.png",
	},
	{
		name: "Pork Lion Chop",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.80,
		category: "meat",
		image: "img/PorkLionChop.png",
	},
	{
		name: "Raspberry",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00,
		category: "fruits",
		image: "img/raspberry.png",
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		category: "meat",
		image: "img/salmon.png",
	},
	{
		name: "Sausage",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.00,
		category: "meat",
		image: "img/sausage.png",
	},
	{
		name: "Shrimp",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		category: "meat",
		image: "img/shrimp.png",
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.99,
		category: "dairy products",
		image: "img/milk.png",
	},
	{
		name: "cider",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99,
		category: "beverages",
		image: "img/cider.png",
	},
	{
		name: "olive oil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 13.99,
		category: "cooking products",
		image: "img/oliveoil.png",
	},
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].image]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].image]);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].glutenFree == true)&&(prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].image]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].image]);
		}

		else if (restriction == "None"){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].image]);
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

function getCategory(category,restriction){
	filter= restrictListProducts(products	, restriction);
	lnew=[]
		for (let i=0; i<filter.length; i+=1) {
			if ((category == "fruits") && (filter[i][2]==["fruits"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "bakery") && (filter[i][2]==["bakery"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "meat") && (filter[i][2]==["meat"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "vegetables") && (filter[i][2]==["vegetables"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "beverages") && (filter[i][2]==["beverages"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "dairy products") && (filter[i][2]==["dairy products"])){
				lnew.push(filter[i]);
			}
			else if  ((category == "cooking products") && (filter[i][2]==["cooking products"])){
				lnew.push(filter[i]);
			}
			else if  (category == "all"){
				lnew.push(filter[i]);
			}

		}
		lnew.sort(sortPrice);
		return lnew;
}
