//import logo from './logo.svg';
import './App.css';
import { config } from './Config';
import { PublicClientApplication } from '@azure/msal-browser';
import { Component } from 'react';
class App extends Component{
  
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {}
    };
    this.login = this.login.bind(this)

    this.PublicClientApplication = new PublicClientApplication(
      {
        auth:{
          clientId: config.appId,
          redirectUri: config.redirectUri,
          authority: config.authority
        },
        cache: {
          cacheLocation: 'sessionStorage',
          storeAuthStateInCookie: true
        }
      }
    );
  }

  async login(){
    try{
      await this.PublicClientApplication.loginPopup(
        {
          scopes: config.scopes,
          prompt: 'select_account'
        }
      );
      this.setState({isAuthenticated: true})
    }

    catch(err){
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err
      });
    }
  }
  
  logout(){
    this.PublicClientApplication.logout();
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        
          <img src={'https://d106p58duwuiz5.cloudfront.net/event/cover/c8b1d66e071c46d480ec1919ac2be676.jpg'} className="App-logo" alt="logo" />
          <p>
            Pogchamp
          </p>
          {
            this.state.isAuthenticated    ? <p>
                Succesful logged in
            </p>:
            <p>
            <button onClick={this.login()}>Login in</button>
            </p>
            
          }
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  

}

export default App;
