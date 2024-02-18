import React, { useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInputGroup,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { getCartTotal } from '../utils/cartSlice';


const Nav = () => {
    const { cart, totalQuantity } = useSelector(store => store.allCart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>

                <Link to="/" >
                    <MDBNavbarBrand>

                        Navbar

                    </MDBNavbarBrand>
                </Link>
                <Link to="/" >
                    <MDBNavbarBrand>


                        <span>All Product</span>

                    </MDBNavbarBrand>
                </Link>
                <Link to="/cart">
                    <MDBBtn color='dark'>

                        cart {totalQuantity}

                    </MDBBtn>
                </Link>


            </MDBContainer>
        </MDBNavbar>
    )
}

export default Nav
