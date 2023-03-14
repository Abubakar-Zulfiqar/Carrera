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
                <div
                    style={{ fontWeight: "500", fontSize: "26px", marginBottom: "2rem" }}
                >
                    Cart
                </div>
                {cartItems.length === 0 ? (
                    <div style={{ textAlign: "center" }}>Cart is empty</div>
                ) : (
                    <div>
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
                                    <p>£{item.quantity * item.price}</p>
                                </Grid>
                            </Grid>
                        ))}
                    </div>
                )}
                <div
                    className="position-absolute bottom-0 w-100"
                    style={{ padding: "15px 40px 20px 20px" }}
                >
                    <p className="text-uppercase" style={{ float: "left" }}>
                        SubTotal:
                    </p>
                    <p style={{ float: "right", fontWeight: "500" }}>
                        £{props.getTotalPrice()}
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
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default withStyles(styles, { withTheme: true })(Cart);
