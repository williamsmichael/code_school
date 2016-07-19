// Shaping up with Angular.js
// storing modules

(function(){
	var app = angular.module('store', []);

	// controllers
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	// gems
	var gems = [
		{
			name: 'Dodecahedron', 
			price: 2.95, 
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine. Dodeca is one of those gems', 
			canPurchase: true, 
			images: {
				full: 'images/gem-full.png',
				thumb: 'images/gem-thumb.png',
			},
		},
		{
			name: 'Pentagonal Gem', 
			price: 5.95, 
			description: '. . .', 
			canPurchase: true,
			images: {
				full: 'images/gem2-full.jpg',
				thumb: 'images/gem2-thumb.jpg',
			},

		},
		{ 
			name: 'Azurite', price: 2.95, description: '. . .', canPurchase: true,
		},
    	{ 
    		name: 'Bloodstone', price: 2, description: '. . .', canPurchase: true,
    	},
    	{ 
    		name: 'Zircon', price: 3.95, description: '. . .', canPurchase: true, 
    	}
	];

})();


