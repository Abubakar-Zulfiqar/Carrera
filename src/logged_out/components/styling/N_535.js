import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  Divider,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Cart from "../cart/Cart";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomVideo from "../../../shared/components/ZoomVideo";

import "../../../index.css";

const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  card: {
    boxShadow: theme.shadows[4],
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
    },
  },
});

const N_535 = (props) => {
  const { classes, theme } = props;
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = () => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === data.id);
    if (itemIndex >= 0) {
      const newItem = { ...data, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    } else {
      const newItem = { ...data, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

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
      (cartItem) => cartItem.id === data.id
    );
    if (itemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...data, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveFromCart = () => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === data.id
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

  const data = {
    id: 5,
    name: "Carrera Hot Air Brush",
    price: 99.99,
    image: `${process.env.PUBLIC_URL}/images/logged_out/№535 01.jpg`,
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
          <Typography variant="h6">{data.name}</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="body2" color="textSecondary">
            Price: <b>£{data.price}</b> + shipping
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => addToCartHandler(data)}
          >
            ADD TO CART
          </Button>

          <ShoppingCartIcon
            onClick={openCartHandler}
            style={{ fontSize: '2rem', marginLeft: '2rem', cursor: 'pointer' }}
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

      {/* Section 01 */}
      <Container>
        <Grid
          container
          spacing={5}
          sx={{
            marginTop: "15rem",
            textAlign: "center",
          }}
        >
          <Grid container direction="row">
            <Grid xs={12}>
              <Typography
                variant="h2"
                sx={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  color: "#232323",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "80px",
                  fontWeight: 700,
                  lineHeight: "95px",
                }}
              >
                HOT AIR BRUSH №535
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  color: "#626262",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                Become your own stylist
              </Typography>
              <div
                style={{
                  display: "grid",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  pt={2}
                  sx={{
                    animationDuration: "3s",
                    animationName: "fadeInUp",
                    animationFillMode: "both",
                  }}
                >
                  <Grid spacing={1} container>
                    {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                      (type, index) => (
                        <Grid item key={index}>
                          <ShareButton
                            type={type}
                            title="CARRERA"
                            description="High-tech for you and your home"
                            disableElevation
                            variant="contained"
                            className="text-white"
                            classes={{
                              label: "text-white",
                            }}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              </div>
            </Grid>
            <Grid xs={12}>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№535 01.jpg`}
                alt=""
                style={{
                  animationDuration: "3s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%!important",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  animationDuration: "3s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  color: "#626262",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: 300,
                  lineHeight: "26px",
                  marginBottom: "3rem",
                  marginTop: "3rem",
                }}
              >
                Professional hair stylists can dry and style at the same time,
                but you don't have an extra pair of hands when you're on your
                own, that's why the Carrera Hot Air Brush makes the perfect tool
                for creating professional results for yourself, by yourself.
                With a host of premium features and expert attachments it's your
                secret drying and styling palm-sized professional.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 02 */}
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={5}
          sx={{
            background: theme.palette.secondary.main,
            marginTop: "10rem",
          }}
        >
          <Grid item xs={4}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 02.jpg`}
              alt=""
              style={{
                animationDuration: "2s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                height: "auto",
                width: "20rem",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#626262",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "23px",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            >
              <ul className="p-0 list-style-3">
                <li>
                  Round brush attachment ø 22 mm for consistent curls and volume
                  right from the hairline. Retractable bristles for safe styling
                  for the novice.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№535 03.jpg`}
                alt=""
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  width: "20rem",
                }}
              />
            </figure>
            <Typography
              variant="body1"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#626262",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "23px",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            >
              <ul className="p-0 list-style-3">
                <li>
                  Round brush attachment ø 50 mm for structured volume with long
                  hair, plus generous high-volume waves like a gorgeous
                  waterfall of curly goodness.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№535 04.jpg`}
                alt=""
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  width: "20rem",
                }}
              />
            </figure>
            <Typography
              variant="body1"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#626262",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "23px",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            >
              <ul className="p-0 list-style-3">
                <li>
                  Round brush attachment ø 38 mm for super long-lasting super
                  extra large volume with mid-length hair, and consistent
                  medium-size glossy curls.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        {/* Section 03 */}
        <Grid container direction="row">
          <Grid xs={6} sx={{ marginTop: "10rem" }}>
            <Typography
              variant="h4"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                fontWeight: 500,
                marginBottom: "2rem",
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Style like a pro with Cool Shot
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#6f6f6f",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: "26px",
              }}
            >
              The best thing about a controlled blast of cold air is that it
              closes the pores on the hair as you style, fixing your style
              faster, producing a lustrous, healthy shine.
            </Typography>
            <Box
              pt={2}
              sx={{
                animationDuration: "3s",
                animationName: "fadeInUp",
                animationFillMode: "both",
              }}
            >
              <Grid spacing={1} container>
                {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                  (type, index) => (
                    <Grid item key={index}>
                      <ShareButton
                        type={type}
                        title="CARRERA"
                        description="High-tech for you and your home"
                        disableElevation
                        variant="contained"
                        className="text-white"
                        classes={{
                          label: "text-white",
                        }}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Grid>
          <Grid xs={6}>
            <figure>
              <img
                className={classNames(classes.img)}
                src={`${process.env.PUBLIC_URL}/images/logged_out/№535 05.jpg`}
                alt=""
                style={{
                  animationName: "fadeInLeft",
                  animationFillMode: "both",
                  animationDuration: "3s",
                  height: "auto",
                  width: "22rem",
                }}
              />
            </figure>
          </Grid>
        </Grid>

        {/* Section 04 */}
        <Grid
          container
          sx={{
            textAlign: "center",
            marginTop: "10rem",
            padding: "0 10rem 0 10rem",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">Even more cool features</Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 06.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              1200 watts
            </Typography>
            <Typography variant="body2" color="textSecondary">
              The more powerful the motor, the faster and more efficiently you
              can style. More power also means more volume – but only for hair.
              Even with over 1.6 PS of power on board, the grip is slim and
              comfortable.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 07.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Cool Shot
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Want your style to last all day, come what may? Just fix each
              finished strand with Cool Shot – and enjoy more lustre and
              smoothness too.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 08.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              For all hair types
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Do people always say your hair is hard to style? It isn’t, it just
              needs to be treated properly. With 3 heat settings and 2 speeds,
              even uncooperative hair is happy.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 09.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              extras as standard
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Whatever your hair type, whatever your plans, the 3 round brush
              attachments (ø22 mm, ø38 mm and ø50 mm) let you create anything
              from small ringlets to big, bouncy big curls.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 05 */}
        <Divider sx={{ margin: "1rem 0 1rem 0" }} />
        <Grid
          container
          md={10}
          sx={{
            textAlign: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">
              You're good to go, straight out of the box
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} sx={{ margin: "5rem" }}>
            <ZoomVideo
              src={`${process.env.PUBLIC_URL}/images/logged_out/№535 10.jpg`}
              alt=""
            />
          </Grid>
        </Grid>

        {/* Section 07 */}
        <Divider sx={{ margin: "1rem 0 1rem 0" }} />
        <Grid
          container
          md={10}
          sx={{
            marginTop: "5rem",
            margin: "5rem",
          }}
        >
          <Grid item xs={5}>
            <Typography variant="h5">Product specs</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                animationDuration: "3s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#6f6f6f",
                fontSize: "16px",
                lineHeight: "43px",
              }}
            >
              <ul className="p-0 list-style-3">
                <li>1,200 W power</li>
                <li>
                  Air flow infused with argan oil &amp; keratin for perfectly
                  shiny hair
                </li>
                <li>
                  Ceramic coated styling brush ensures even heat distribution
                  and prevents heat spots on hair
                </li>
                <li>Cool shot fixates and gives more hold</li>
                <li>
                  Styling accessories for large waves, XXL volume or curls
                </li>
                <li>Round brush attachment ø 50 mm for high-volume waves</li>
                <li>Round brush attachment ø 38 mm for long-lasting volume</li>
                <li>
                  Round brush attachment ø 22 mm with retractable bristles for
                  consistent curls
                </li>
                <li>Styling nozzle for fast dryling</li>
                <li>Permanently ionized by ionic generator</li>
                <li>3 heat / 2 speed settings</li>
                <li>Ergonomic grip for easy handling</li>
                <li>
                  Cool touch tip: heat-insulted brush heads for safe, more
                  precise styling
                </li>
                <li>Change attachments just by pushing a button</li>
                <li>Swivel joint power cord for greater freedom of movement</li>
                <li>Hanging loop</li>
                <li>Accessories: storage pouch</li>
              </ul>
            </Typography>
            <Box
              pt={2}
              sx={{
                animationDuration: "3s",
                animationName: "fadeInUp",
                animationFillMode: "both",
              }}
            >
              <Grid spacing={1} container>
                {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                  (type, index) => (
                    <Grid item key={index}>
                      <ShareButton
                        type={type}
                        title="CARRERA"
                        description="High-tech for you and your home"
                        disableElevation
                        variant="contained"
                        className="text-white"
                        classes={{
                          label: "text-white",
                        }}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "1rem 0 1rem 0" }} />
      </Container>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(N_535);
