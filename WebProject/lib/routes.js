FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout'); //Se pone la ruta del layout
  }
});


FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'}); //Se pone la ruta del layout
  }
});
