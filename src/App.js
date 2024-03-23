import {useAuth0} from '@auth0/auth0-react'
import Home from './components/Home';

import './App.css';
function App() {
    const { user, loginWithRedirect,isAuthenticated,logout } = useAuth0();
    console.log('Current User',user)
    return (
      <div className="App">
          {
            isAuthenticated ? (
              <div className= "google-home">
             <Home />
             {isAuthenticated && (
        <>
          <h1 className="username">UserName: <span className="username-value">{user.name}</span></h1>
          <h1 className="useremail">UserEmail: <span className="useremail-value">{user.email}</span></h1>
        </>
      )}
             <button onClick={(e) => logout()} className='logout-button'>Logout</button>
             </div>
            ) : (
      <div className="container">
          <div className="welcome-text">
              <h2>Welcome to Google Login Page</h2>
              <p>Login and Access the data</p>
          </div>
          <button onClick = {(e) => loginWithRedirect()} className="login-button">
                Login
              </button>
      </div>  
            )}
      </div>
    );
  }

export default App;
