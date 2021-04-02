import React from 'react'
import './header.css';
import {FiSearch,FiShoppingCart} from "react-icons/fi";

import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';
function Header(props) {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    } 
    return (
        <div className="header">
           <Link to="/">
                    <img className="header__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" width="300px" height="100px" />
           </Link>               
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <FiSearch className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello Sonny</span>    
                    <span className="header__optionLineTwo">{user ? 'sign out':'sign in'}</span>   
                </div>     
                </Link>   
                <div className="header__option">
                    <span className="header__optionLineOne">return</span>    
                    <span className="header__optionLineTwo">& orders</span>  
                </div>     
                <div className="header__option">
                    <span className="header__optionLineOne">your</span>    
                    <span className="header__optionLineTwo">Prime</span>  
                </div>  
                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <FiShoppingCart/>
                    </Link>
                    
                    <span className="header__optionLineTwo header__basketcount">{
                        basket.length > 0 ?  basket.length : 0
}
</span>
                </div>    
            </div>

        </div>
    )
}


export default Header;