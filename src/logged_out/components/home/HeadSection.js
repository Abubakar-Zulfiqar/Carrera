import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  noDecoration: {
    textDecoration: "none !important",
  },
});

const HeadSection = (props) => {
  const { classes } = props;

  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            sx={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              overflow: "hidden",
              height: "100vh",
            }}
            className="background37"
          >
            <div class="carousel-caption slider-text-middle">
              <Grid
                container
                justify="center"
                alignItems="center"
                sx={{ textAlign: "left", marginLeft: "5rem" }}
              >
                <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                  <Typography
                    variant="h1"
                    className="font-weight-800 alt-font"
                    style={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "70px",
                      lineHeight: "70px",
                      marginTop: "-40rem",
                    }}
                  >
                    <span className="text-white">Kitchen</span>
                  </Typography>
                  <div
                    class="separator-line-horrizontal-medium-thick bg-yellow width-10 margin-25px-bottom"
                    style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  ></div>

                  <Typography
                    variant="h5"
                    className="text-white font-weight-500 alt-font"
                    sx={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "32px",
                      lineHeight: "40px",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    Hi-tech for your kitchen
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-weight-500 alt-font text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "23px",
                      width: "60%",
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                    }}
                  >
                    From quartz toasters to glass kettles and feature rich food
                    mixers to beautiful blenders... Carrera kitchen tools
                    perform like world class culinary athletes.
                  </Typography>
                  <Link to="/kitchen" className={classes.noDecoration}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm mt-3"
                    >
                      <span className="text-uppercase">Explore kitchen</span>
                    </button>
                  </Link>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            sx={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              overflow: "hidden",
              height: "100vh",
            }}
            className="background38"
          >
            <div class="carousel-caption slider-text-middle">
              <Grid
                container
                justify="center"
                alignItems="center"
                sx={{ textAlign: "left", marginLeft: "5rem" }}
              >
                <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                  <Typography
                    variant="h1"
                    className="font-weight-800 alt-font"
                    style={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "70px",
                      lineHeight: "70px",
                      marginTop: "-40rem",
                    }}
                  >
                    <span className="text-white">Styling</span>
                  </Typography>
                  <div
                    class="separator-line-horrizontal-medium-thick bg-yellow width-10 margin-25px-bottom"
                    style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  ></div>

                  <Typography
                    variant="h5"
                    className="text-white font-weight-500 alt-font"
                    sx={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "32px",
                      lineHeight: "40px",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    Bringing your style to life
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-weight-500 alt-font text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "23px",
                      width: "60%",
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                    }}
                  >
                    Carrera styling tools are engineered in Germany to the
                    highest standards delivering salon quality tools that are
                    both powerful and expertly designed.
                  </Typography>
                  <Link to="/styling" className={classes.noDecoration}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm mt-3"
                    >
                      <span className="text-uppercase">Explore styling</span>
                    </button>
                  </Link>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            sx={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              overflow: "hidden",
              height: "100vh",
            }}
            className="background39"
          >
            <div class="carousel-caption slider-text-middle">
              <Grid
                container
                justify="center"
                alignItems="center"
                sx={{ textAlign: "left", marginLeft: "5rem" }}
              >
                <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                  <Typography
                    variant="h1"
                    className="font-weight-800 alt-font"
                    style={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "70px",
                      lineHeight: "70px",
                      marginTop: "-40rem",
                    }}
                  >
                    <span className="text-white">Grooming</span>
                  </Typography>
                  <div
                    class="separator-line-horrizontal-medium-thick bg-yellow width-10 margin-25px-bottom"
                    style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  ></div>

                  <Typography
                    variant="h5"
                    className="text-white font-weight-500 alt-font"
                    sx={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "32px",
                      lineHeight: "40px",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    We speak your body language
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-weight-500 alt-font text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "23px",
                      width: "60%",
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                    }}
                  >
                    Carrera grooming tools can deal with unwanted hair on any
                    part of your body, whatever your gender. Shave, clip, trim
                    and groom... whatever your style.
                  </Typography>
                  <Link to="/grooming" className={classes.noDecoration}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm mt-3"
                    >
                      <span className="text-uppercase">Explore grooming</span>
                    </button>
                  </Link>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            sx={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              overflow: "hidden",
              height: "100vh",
            }}
            className="background40"
          >
            <div class="carousel-caption slider-text-middle">
              <Grid
                container
                justify="center"
                alignItems="center"
                sx={{ textAlign: "left", marginLeft: "5rem" }}
              >
                <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                  <Typography
                    variant="h1"
                    className="font-weight-800 alt-font"
                    style={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "70px",
                      lineHeight: "70px",
                      marginTop: "-40rem",
                    }}
                  >
                    <span className="text-white">Magazine</span>
                  </Typography>
                  <div
                    class="separator-line-horrizontal-medium-thick bg-yellow width-10 margin-25px-bottom"
                    style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  ></div>

                  <Typography
                    variant="h5"
                    className="text-white font-weight-500 alt-font"
                    sx={{
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                      fontSize: "32px",
                      lineHeight: "40px",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    Feeding your imagination
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-weight-500 alt-font text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "23px",
                      width: "60%",
                      animationDuration: "2s",
                      animationName: "fadeInDown",
                      animationFillMode: "both",
                    }}
                  >
                    Our magazine blog isn't just about products, it's about what
                    you can do with them. Check in for cool styling tips, tasty
                    recipes and rising trends.
                  </Typography>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm mt-3"
                  >
                    <span className="text-uppercase" aria-disabled>
                      Explore magazine
                    </span>
                  </button>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(HeadSection);
