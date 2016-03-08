Signup=React.createClass({
  handleSubmit(e){
    e.preventDefault();
    var that=this;
    var first_name=ReactDOM.findDOMNode(this.refs.first_name).value.trim();
    var last_name=ReactDOM.findDOMNode(this.refs.last_name).value.trim();
    var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
    var user={email:email,password:password,profile:{fullname:(first_name+last_name).toLowerCase(),
      first_name:first_name,last_name:last_name,avatar:"http://placehold.it/150x150",friends:[]}};
    Accounts.createUser(user,function(e){
      if(e){
        that.displayError(e.reason);
      }
      else{
        FlowRouter.go('/dashboard');
      }

    });

  },
  render(){
    return(
      <div className="column col-md-4 pull-right container well">
      <h1 className="h1">SignUp</h1>
      <form className="form pull-left" role="form" onSubmit={this.handleSubmit}>
      <div>
      <div className="form-group col-md-6 pull-left" >
      <input type="text" className="form-control" ref="first_name" placeholder="First Name"/>
      </div>
      <div className="form-group col-md-6 pull-left">
      <input type="text" className="form-control" placeholder="Last Name"  ref="last_name"/>
      </div>
      </div>
      <div className="form-group col-md-12 pull-left">
      <input type="email" className="form-control" ref="email" placeholder="Eamil or Phone number"/>
      </div>
      <div className="form-group pull-left col-md-12">
      <input type="password" className="form-control" placeholder="Password" ref="password"/>
      </div>
      <button className="btn btn-primary" type="submit">Register</button>
      </form>
      </div>
    )
  }
});
