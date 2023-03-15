import React from "react";

import { Grid } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { Offcanvas, Button } from "react-bootstrap";

const styles = (theme) => ({
    btn: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
        },
    },
});

function Cart(props) {
    const { cartItems, handleClose, classes } = props;

    return (
        <Offcanvas show={props.show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="shopify-buy__cart">
                    <div className="shopify-buy__cart__header alt-font">
                        Cart
                    </div>
                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: "center" }}>Cart is empty</div>
                    ) : (
                        <>
                            <div className="shopify-buy__cart-scroll">
                                {cartItems.map((item) => (
                                    <Grid
                                        container
                                        height="2rem"
                                        direction="row"
                                        textAlign="center"
                                        marginBottom="8rem"
                                        key={item.id}
                                        spacing={5}
                                    >
                                        <Grid item xs={4}>
                                            <img src={item.image} alt={item.name} width="50%" />
                                        </Grid>
                                        <Grid item xs={4} sx={{ fontSize: "14px" }}>
                                            <p>{item.name}</p>
                                            <Button
                                                className={classes.btn}
                                                style={{ border: 'none' }}
                                                onClick={() =>
                                                    props.updateQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                -
                                            </Button>
                                            <span style={{ margin: "10px" }}>{item.quantity}</span>
                                            <Button
                                                className={classes.btn}
                                                style={{ border: 'none' }}
                                                onClick={() =>
                                                    props.updateQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} sx={{ fontSize: "14px", fontWeight: "500" }}>
                                            <p>£{Number(item.quantity * item.price).toFixed(2)}</p>
                                        </Grid>
                                    </Grid>
                                ))}
                            </div>
                            <div
                                className="shopify-buy__cart-bottom">
                                <p className="text-uppercase" style={{ float: "left" }}>
                                    SubTotal:
                                </p>
                                <p style={{ float: "right", fontWeight: "500" }}>
                                    £{Number(props.getTotalPrice()).toFixed(2)}
                                </p>
                                <Button
                                    className={classes.btn}
                                    onClick={handleClose}
                                    style={{
                                        clear: "both",
                                        marginTop: "15px",
                                        width: "100%",
                                        padding: "10px 5px",
                                        border: 'none'
                                    }}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default withStyles(styles, { withTheme: true })(Cart);
