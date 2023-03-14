import React, { useState, useEffect } from "react";

import withStyles from "@mui/styles/withStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Divider, Grid, Typography } from "@mui/material";

import Cart from "../cart/Cart";

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

const Header = (props) => {
    const { classes, theme } = props;
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = () => {
        const itemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === props.data.id
        );
        if (itemIndex >= 0) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...props.data, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };

    const handleRemoveFromCart = () => {
        const itemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === props.data.id
        );
        if (itemIndex >= 0) {
            const updatedCartItems = [...cartItems];
            if (updatedCartItems[itemIndex].quantity > 1) {
                updatedCartItems[itemIndex].quantity -= 1;
                setCartItems(updatedCartItems);
            } else {
                updatedCartItems.splice(itemIndex, 1);
                setCartItems(updatedCartItems);
            }
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const openCartHandler = () => {
        setShowCart(true);
    };

    const closeCartHandler = () => {
        setShowCart(false);
    };
    return (
        <>
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    top: "104px",
                    position: "fixed",
                    height: "54px",
                    width: "100%",
                    background: "#f8f8f8",
                    zIndex: 1000,
                    marginLeft: "0px",
                    textAlign: "center",
                }}
                direction="row"
            >
                <Grid xs={4}>
                    <Typography variant="h6">{props.data.name}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" color="textSecondary">
                        Price: <b>£{props.data.price}</b> + shipping
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Button
                        className={classes.btn}
                        variant="contained"
                        onClick={() => handleAddToCart(props.data)}
                    >
                        ADD TO CART
                    </Button>

                    <ShoppingCartIcon
                        onClick={openCartHandler}
                        style={{ fontSize: "2rem", marginLeft: "2rem", cursor: "pointer" }}
                    />
                    <span>({cartItems.length})</span>
                    <Cart
                        show={showCart}
                        handleClose={closeCartHandler}
                        cartItems={cartItems}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        getTotalPrice={getTotalPrice}
                    />
                </Grid>
            </Grid>
            <Divider sx={{ margin: "1rem 0 1rem 0" }} />
        </>
    );
};

export default withStyles(styles, { withTheme: true })(Header);
