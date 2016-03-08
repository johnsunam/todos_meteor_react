Navbar=React.createClass({
  getInitialState(){
    return{
      message:"",
      messageClass:"hidden"
    }
  },
  displayError(message){
    this.setState({message:message,messageClass:"alert alert-danger message"})
  },
  handleSubmit(e){
    e.preventDefault();
    var that =this;
var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
Meteor.loginWithPassword(email,password,function(e){
  if(e){
    console.log(e.reason);
    that.displayError(e.reason);
  }
  else {
    FlowRouter.go('/dashboard');
  }
});
  },
  render(){
    return(
    <div>
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Todos</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form className="navbar-form navbar-right" onSubmit={this.handleSubmit} role="form">
        <span className={this.state.messageClass}>
        {this.state.message}
        </span>
          <div className="form-group">
            <input type="text" className="form-control" ref="email" placeholder="Email or Phone number"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" ref="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Login</button>

        </form>
      </div>
    </div>
  </nav>
    </div>
    )
  }
});
