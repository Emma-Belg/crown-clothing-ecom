import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import './App.css';

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        //using auth from Firebase library
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });
            } else {
                //set current user to Null if user is not signed in
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signin'
                           render={() =>
                               this.props.currentUser ?
                                   (<Redirect to='/' />)
                                   : (<SignInAndSignUpPage />)}
                    />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

//function that gets dispatch property and returns an object where the prop name will be
//be the name of the prop that we want to pass in, that dispatches the new action.
const mapDispatchToProps = dispatch => ({
    //dispatch is a way for Redux to know that the object you pass me is an action object that I must pass to every reducer
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
