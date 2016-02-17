import React from 'react';
import { Link } from 'react-router';

export default class HomeIntroduction extends React.Component{
  render(){
    return(
      <section className="introduction">
        {this.IntroductionSection}
      </section>
    )
  }

  get IntroductionSection() {
    if(this.props.loggedIn){
      return(
        <h1>Wow you are logged in! <Link to="/app">Go to the Application</Link></h1>
      )
    }
    else{
      return(
        <div className="inner">
          <h1>In order to access your account content you must login with <span className="text-reddit">Reddit</span>.</h1>
          <div
            className={this.props.loggingIn ? "home-button disabled" : "home-button"}
            onClick={this.props.login}
            >Login</div>
          <span className="home-button-info">Uses oAuth</span>
        </div>
      )
    }
  }
}
