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

const N_532 = (props) => {
  const { classes, theme } = props;
  const [isVisible, setIsVisible] = useState(false);
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
    id: 3,
    name: "Hair Dryer 532",
    price: 39.99,
    image: `${process.env.PUBLIC_URL}/images/logged_out/№532 01.jpg`,
  };

  const onScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


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
        <Grid container spacing={5} sx={{ marginTop: "15rem" }}>
          <Grid container md={10} direction="row">
            <Grid xs={6}>
              <Typography
                variant="h1"
                sx={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  color: "#232323",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "80px",
                  fontWeight: 800,
                  lineHeight: "95px",
                }}
              >
                HAIR DRYER №532
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
                  marginBottom: "3rem",
                  marginTop: "3rem",
                }}
              >
                Power on the go
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  animationDuration: "1s",
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
                Looking for a compact travel hairdryer with all the features of
                a home model? Well the Carrera hairdryer 532 has dual voltage,
                permanent ionisation, an airstream enriched with argan oil and
                keratin, two heat settings, an overheat cutout, Cool Shot and
                1600 watts of power.
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
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№532 01.jpg`}
                alt=""
                style={{
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%!important",
                }}
              />
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
          <Grid item direction="column">
            <Grid item textAlign="center">
              <Typography
                variant="h4"
                sx={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  color: "#232323",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "66px",
                }}
              >
                Practical power wherever you roam
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  color: "#232323",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "20px",
                  margin: "0 120px 0 120px",
                }}
              >
                Wherever your adventures take you; to work, on holiday or just
                for a weekend away, the portable Carrera 532 has all you need to
                style on the go.
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item xs={3}>
              <ul style={{ margin: "10rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Power Boost 1.600 Watt high-quality power</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
                <li
                  style={{ marginTop: "5rem" }}
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Titanium and ceramic coating</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
                <li
                  style={{ marginTop: "5rem" }}
                  data-aos="zoom-in-up"
                  data-aos-delay="400"
                >
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>2 heat and speed settings</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
              </ul>
            </Grid>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№532 02.jpg`}
                alt=""
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  width: "30rem",
                }}
              />
            </figure>
            <Grid item xs={3}>
              <ul style={{ margin: "10rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Ionisation for quick drying tangle free hair</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
                <li
                  style={{ marginTop: "5rem" }}
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Dual voltage for global use</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
                <li
                  style={{ marginTop: "5rem" }}
                  data-aos="zoom-in-up"
                  data-aos-delay="400"
                >
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Practical folding handle</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 03 */}
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "10rem",
            textAlign: "center",
          }}
        >
          <Grid xs={12}>
            <Typography
              variant="h4"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Sometimes size matters
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
                paddingLeft: "20rem",
                paddingRight: "20rem",
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              When you are travelling you need a dryer that is compact and
              lightweight. The folding handle feature on this dryer no only
              makes packing it a breeze but also gives you the option of simply
              popping it in your hand luggage.
            </Typography>
          </Grid>
          <Grid xs={12} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№532 03.jpg`}
                alt=""
                style={{
                  maxWidth: "none",
                  height: "auto",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  animationName: "fadeInLeft",
                  animationFillMode: "both",
                  animationDuration: "3s",
                  width: "1000px",
                }}
              />
            </figure>
          </Grid>
        </Grid>

        {/* Section 04 */}
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "10rem",
          }}
        >
          <Grid xs={6}>
            <Typography
              variant="h4"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              For hair that shines wherever you go
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
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              A ceramic coated exit grille ensures that there are no uneven heat
              spots that can dry out and damage hair, plus the styling nozzle is
              coated with argan oil molecules that enhance the airstream
              creating smoother hair and quicker styling. So wherever your
              travels take you, they'll be no bad hair days.
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
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№532 04.jpg`}
                alt=""
                style={{
                  maxWidth: "none",
                  height: "auto",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  animationName: "fadeInLeft",
                  animationFillMode: "both",
                  animationDuration: "3s",
                  width: "1000px",
                }}
              />
            </figure>
          </Grid>
        </Grid>

        {/* Section 05 */}
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№532 05.jpg`}
              alt=""
            />
            <Typography variant="body1">1600 WATTS POWER</Typography>
            <Typography variant="body2" color="textSecondary">
              A compact dryer with a Power Boost that delivers more than 2PS?
              absolutely! Plus a streamlined air shovel that gives you power to
              spare and a bit more.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№532 06.jpg`}
              alt=""
            />
            <Typography variant="body1">TITANUIM CERAMIC COATING</Typography>
            <Typography variant="body2" color="textSecondary">
              Ceramics have high mechanical rigidity; titanium resists corrosion
              and extreme temperatures really effeciently. Used together, they
              also enable the DC motor to rev much higher and faster.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№532 07.jpg`}
              alt=""
            />
            <Typography variant="body1">CONSTANT IONIZATION</Typography>
            <Typography variant="body2" color="textSecondary">
              You want to dry and style your hair, not charge it with static
              electricity. That’s why it feeds ions into the airstream
              constantly. Ions help by smoothing the hair for a lustrous look.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№532 08.jpg`}
              alt=""
            />
            <Typography variant="body1">WE LOVE DETAILS</Typography>
            <Typography variant="body2" color="textSecondary">
              All products are presented on Carrera yellow background with a
              little text information about the product's key features. All
              packaged up a ready to go with style.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 06 */}
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№532 09.jpg`}
              alt=""
            />
          </Grid>
        </Grid>

        {/* Section 08 */}
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
                <li>1600 W power</li>
                <li>Dual voltage switch: 110 V / 240 V for global use</li>
                <li>
                  Ceramic coated air outlet grille to ensure even heat
                  distribution
                </li>
                <li>Permanently ionised</li>
                <li>
                  Air flow infused with argan oil &amp; keratin for perfectly
                  shiny hair
                </li>
                <li>
                  2 heat / 2 speed settings adjustable via sliding switch (0, 1,
                  2)
                </li>
                <li>Practical folding handle</li>
                <li>Cool shot</li>
                <li>Protection against overheating</li>
                <li>Colour: CRR Graphite Grey / Titanium</li>
                <li>Included accessories: styling nozzle, storage pouch</li>
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

export default withStyles(styles, { withTheme: true })(N_532);
