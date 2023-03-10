import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import withStyles from "@mui/styles/withStyles";
import { Typography, Card, Grid } from "@mui/material";

const styles = (theme) => ({
  img: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
    marginBottom: 8,
    transition: "all 500ms ease-in-out",
    cursor: "pointer",
  },
  card: {
    boxShadow: theme.shadows[2],
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    "&:active": {
      color: theme.palette.primary.dark,
    },
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark,
    },
  },
});

const Styling = (props) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const { classes } = props;

  return (
    <Container>
      <Grid
        container
        spacing={5}
        sx={{
          marginTop: "15rem",
          textAlign: "center",
        }}
      >
        <Grid container>
          <Grid xs={12}>
            <Typography
              variant="h2"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInDown",
                animationFillMode: "both",
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "80px",
                fontWeight: 700,
                lineHeight: "95px",
              }}
            >
              STYLING
            </Typography>
            <Typography
              variant="h5"
              sx={{
                animationDuration: "1s",
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
              What’s essential is not invisible to the eye.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{
          marginTop: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        <Card
          style={{
            position: "relative",
            animationDuration: "2s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <Link to="/carrera-ac-hair-dryer-631">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 01.jpg`}
              className={classes.img}
              alt=""
            />
            {isHovered1 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>631
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
        <Card
          style={{
            position: "relative",
            animationDuration: "2s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <Link to="/carrera-hair-dryer-531">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 02.jpg`}
              className={classes.img}
              alt=""
            />
            {isHovered2 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>531
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
        <Card
          style={{
            position: "relative",
            animationDuration: "2s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <Link to="/carrera-hair-dryer-532">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 03.jpg`}
              className={classes.img}
              alt=""
            />
            {isHovered3 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>532
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
        <Card
          style={{
            position: "relative",
            animationDuration: "4s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <Link to="/carrera-hair-straightener-534">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 04.jpg`}
              className={classes.img}
              alt=""
            />
            {isHovered4 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>534
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
        <Card
          style={{
            position: "relative",
            animationDuration: "4s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          <Link to="/carrera-hot-air-brush-535">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 05.jpg`}
              className={classes.img}
              alt=""
            />
            {isHovered5 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>535
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
        <Card
          style={{
            position: "relative",
            animationDuration: "4s",
            animationName: "fadeInUp",
            animationFillMode: "both",
          }}
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          <Link to="/carrera-curling-tong-537">
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/styling 06.jpg`}
              className={classes.img}
              alt=""
              style={{ alignContent: "center", justifyContent: "center" }}
            />
            {isHovered6 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                  <span className="font-weight-600">№</span>537
                </Typography>
                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                  <span
                    style={{
                      backgroundColor: "#fff871",
                      color: "black",
                      padding: "0.2em",
                    }}
                  >
                    more about this product
                  </span>
                </Typography>
              </div>
            )}
          </Link>
        </Card>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Styling);
