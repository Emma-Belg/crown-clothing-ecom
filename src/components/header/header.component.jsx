import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from '../../assets/4.3_crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">

        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="">CONTACT</Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className="option" to='/signin'>SIGN IN</Link>)
            }
        </div>

    </div>
);

const mapStateToProps = state => ({
    //you can follow the chain of user (found in root-reducer), then currentUser (found in user.reducer)
    currentUser: state.user.currentUser
});
//using mapStateToProps and connect() will always be used anywhere we need to get properties from our reducers
//connect() is a higher order function which is a function that re
export default connect(mapStateToProps)(Header);
