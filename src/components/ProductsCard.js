import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { addToCart } from '../utils/cartSlice';

const ProductsCard = () => {
    const dispatch = useDispatch()

    const items = useSelector(store => store.allCart)
    const cartItems = items.items
    return (
        <div className='m-2'>
            <MDBContainer>

                <MDBRow className='mb-3'>

                    {
                        cartItems.map((item) => (

                            <MDBCol size="md" key={item.id}>
                                <MDBCard>
                                    <MDBCardImage src={item.img} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>

                                        <MDBBtn onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }


                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default ProductsCard