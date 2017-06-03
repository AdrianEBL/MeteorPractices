Template.Recipe.helpers({
	updateRecipeId: ()=> {
		return this._id;
	}
});

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	}
});