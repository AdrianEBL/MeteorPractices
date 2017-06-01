Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"

  }

  desc: {
    type: String,
    label: "Description"
  }


});
