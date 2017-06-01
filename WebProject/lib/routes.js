FlowRouter.route('/', {
  name: 'home',
  action() {
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
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});