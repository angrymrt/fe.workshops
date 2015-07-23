var cookbook = (function() {
	var _title = "David's Delicious Deserts";
	var _recipes = [
		{
			title: "Bananen split",
			ingredients: ["Banaan", "IJs"]
		},
		{
			title: "Vlaflip",
			ingredients: ["Vla", "Vruchtenhagel"]
		}
	];

	// reveal public members..
	return {
		giveRecipes: giveRecipes,
		giverecipe: giveRecipe,
		title: title
	};
	
	// public functions..
	function giveRecipes() {
		console.log(_title + " (" + _recipes.length + " recipes)");
		for (var recipe in _recipes) {
			if (_recipes.hasOwnProperty(recipe)) {
				var element = _recipes[recipe];
				giveRecipe(element);
			}
		}
	}
	function giveRecipe(recipe) {
		_createDescription(recipe);
	}
	function title(){
		if (arguments.length == 0) {
			return _title;
		}
		_title = arguments[0];
	}
	
	// private functions..
	function _createDescription(recipe) {
		console.log("* " + recipe.title);
		for (var ingredient in recipe.ingredients) {
			if (recipe.ingredients.hasOwnProperty(ingredient)) {
				var element = recipe.ingredients[ingredient];
				console.log(" * " + element);
			}
		}
	}
})();

cookbook.giveRecipes();