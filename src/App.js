import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from"./firebase/firebase.utils";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentUser : null
        }
    }

    // to method  auth.onAuthStateChanged returns   !>>>> firebase.Unsubscribe <<<<!
    //https://stackoverflow.com/questions/42762443/how-can-i-unsubscribe-to-onauthstatechanged

    unsubscribeFromAuth = null;

    componentDidMount() {
         this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser : user})
            console.log(user, "is logged in")
        })
    }

    //the following is test code

    //  unsub = () => {
    //     this.unsubscribeFromAuth();
    //     console.log("user unsubscribed")
    // }

      componentWillUnmount() {
          this.unsubscribeFromAuth();
          console.log("user unsigned")
      }

    render() {
        return (
            <div>
                <button onClick={this.unsub}>nikos</button>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>

        );
    }
}

export default App;
