import { Grid } from '@mui/material';
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

function Cart(props) {
    const { cartItems, handleClose } = props;
    return (
        <Offcanvas show={props.show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{ fontWeight: '500', fontSize: '26px', marginBottom: '2rem' }}>Cart</div>
                {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center' }}>Cart is empty</div>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <Grid container height="2rem" direction="row" textAlign="center" marginBottom="8rem" key={item.id} spacing={5}>
                                <Grid item xs={4}>
                                    <img src={item.image} alt={item.name} width="50%" />
                                </Grid>
                                <Grid item xs={4} sx={{ fontSize: '14px' }}>
                                    <p>{item.name}</p>
                                    <Button variant='secondary' onClick={props.handleRemoveFromCart}>-</Button>
                                    <span style={{ margin: '10px' }}>{item.quantity}</span>
                                    <Button variant='secondary' onClick={props.handleAddToCart}>+</Button>
                                </Grid>
                                <Grid item xs={4} sx={{ fontSize: '14px', fontWeight: '500' }}>
                                    <p>£{item.quantity * item.price}</p>
                                </Grid>
                            </Grid>
                        ))}
                    </div>
                )}
                <div className='position-absolute bottom-0 w-100' style={{ padding: "15px 40px 20px 20px" }}>
                    <p className='text-uppercase' style={{ float: 'left' }}>SubTotal:</p>
                    <p style={{ float: 'right', fontWeight: '500' }}>£{props.getTotalPrice()}</p>
                    <Button variant="secondary" onClick={handleClose} style={{ clear: 'both', marginTop: "15px", width: '100%', padding: '10px 5px' }}>
                        Close
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;