import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { bitch } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.setState({currentUser: 'hassan'})
        userRef.onSnapshot(snapShot => {
          bitch({
              id: snapShot.id,
              ...snapShot.data()
          });
        });  
      }
      bitch(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUpPage } />
      </Switch>
        
      </div>
    );
  }
  
}
const mapDispatchToProps = dispatch => ({
  bitch: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
