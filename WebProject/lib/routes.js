FlowRouter.triggers.enter([function (context, redirect) {
  if(!Meteor.userId){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()){
        FlowRouter.go('recipe-book');
    }
      GAnalytics.pageview();
    BlazeLayout.render('HomeLayout'); //Se pone la ruta del layout
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
      GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'}); //Se pone la ruta del layout del cual se llamara
  }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});
