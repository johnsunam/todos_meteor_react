publicRoutes=FlowRouter.group({
  name:'publicroutes'
});
publicRoutes.route('/',{
  name:'Home',
  action:function(){
    ReactLayout.render(Homelayout,{})
  }

});
publicRoutes.route('/dashboard',{
  name:'Dashboard',
  action:function(){
    ReactLayout.render(Layout,{});
  }
});
