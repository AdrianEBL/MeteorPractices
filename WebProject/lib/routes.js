FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout'); //Se pone la ruta del layout
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'}); //Se pone la ruta del layout
  }
});
