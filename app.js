// Shaping up with Angular.js
// storing modules

(function(){
	var app = angular.module('store', []);
	var gems = [
		{
			name: 'Dodecahedron', price: 2.95, description: 'Some gems have hidden qualities beyond their luster, beyond their shine. Dodeca is one of those gems', canPurchase: true,
		},
		{
			name: 'Pentagonal Gem', price: 5.95, description: '. . .', canPurchase: true,

		},
		{ 
			name: 'Azurite', price: 2.95, description: '. . .', canPurchase: true,
		},
    	{ 
    		name: 'Bloodstone', price: 5.95, description: '. . .', canPurchase: true,
    	},
    	{ 
    		name: 'Zircon', price: 3.95, description: '. . .', canPurchase: true, 
    	}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();


