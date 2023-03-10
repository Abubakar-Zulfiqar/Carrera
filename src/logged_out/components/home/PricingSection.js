import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

import "../../../index.css";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  button: {
    fill: theme.palette.common.white,
    backgroundColor: "#343a40",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
});

function PricingSection(props) {
  const { classes } = props;
  return (
    <>
      {/* Section 01 */}
      <Grid
        container
        className="padding-40px-tb bg-extra-dark-gray action-section"
      >
        <Grid item xs={12}>
          <div className="justify-content-center">
            <div className="position-relative text-center">
              <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                HI-TECH FOR YOUR KITCHEN
              </span>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Section 02 */}
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        sx={{
          backgroundPosition: "0px 58.7016px",
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundAttachment: "fixed",
          width: "auto",
          height: "60vh",
        }}
        className="background41"
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          sx={{ textAlign: "left", marginLeft: "10rem" }}
        >
          <Grid item xs={6} sx={{ paddingRight: "40px" }}>
            <Link to="/kitchen" className={classes.noDecoration}>
              <Typography
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  fontSize: "70px",
                  lineHeight: "70px",
                }}
              >
                <h2 className="alt-font text-extra-dark-gray font-weight-800 width-25 margin-40px-tb d-block text-uppercase">
                  <mark className="bg-black text-yellow">
                    &nbsp;&nbsp;Kitchen&nbsp;&nbsp;
                  </mark>
                </h2>
              </Typography>
            </Link>

            <Typography
              variant="body2"
              color="textSecondary"
              className="font-weight-500 alt-font"
              sx={{
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
                fontSize: "12px",
                lineHeight: "14px",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              MIX + BLEND + TOAST + BOIL
            </Typography>
            <Typography
              variant="body1"
              className="font-weight-500 alt-font"
              style={{
                fontSize: "16px",
                lineHeight: "23px",
                width: "60%",
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
              }}
            >
              From quartz toasters to glass kettles and feature rich mixers to
              beautiful blenders that can make soup, cook pasta and clean
              themselves... Carrera kitchen tools not only look super cool but
              also perform like world className culinary athletes.
            </Typography>
            <Link to="/kitchen" className={classes.noDecoration}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm mt-3"
              >
                <span className="text-uppercase">shop kitchen</span>
              </button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>

      {/* Section 03 */}
      <Grid
        container
        className="padding-40px-tb bg-extra-dark-gray action-section"
      >
        <Grid item xs={12}>
          <div className="justify-content-center">
            <div className="position-relative text-center">
              <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                HIGH-TECH FOR YOUR BATHROOM
              </span>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Section 04 */}
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        sx={{
          backgroundPosition: "0px 58.7016px",
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundAttachment: "fixed",
          width: "auto",
          height: "60vh",
        }}
        className="background42"
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          sx={{ textAlign: "left", marginLeft: "10rem" }}
        >
          <Grid item xs={6} sx={{ paddingRight: "40px" }}>
            <Link to="/grooming" className={classes.noDecoration}>
              <Typography
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  fontSize: "70px",
                  lineHeight: "70px",
                }}
              >
                <h2 className="alt-font text-extra-dark-gray font-weight-800 width-25 margin-40px-tb d-block text-uppercase">
                  <mark className="bg-black text-white">
                    &nbsp;&nbsp;grooming&nbsp;&nbsp;
                  </mark>
                </h2>
              </Typography>
            </Link>

            <Typography
              variant="body2"
              color="textSecondary"
              className="font-weight-500 alt-font"
              sx={{
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
                fontSize: "12px",
                lineHeight: "14px",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              SHAVE + CLIP + TRIM + GROOM
            </Typography>
            <Typography
              variant="body1"
              className="font-weight-500 alt-font"
              style={{
                fontSize: "16px",
                lineHeight: "23px",
                width: "60%",
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
              }}
            >
              Carrera make tools that deal with unwanted hair on any part of
              your body. For supersmooth skin, or to keep hair in check. These
              tools are not designed for men or women, but made for anyone that
              demands performance, utility and aesthetics, however they
              identify.
            </Typography>
            <Link to="/grooming" className={classes.noDecoration}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm mt-3"
              >
                <span className="text-uppercase">shop grooming</span>
              </button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>

      {/* Section 05 */}
      <Grid
        container
        className="padding-40px-tb bg-extra-dark-gray action-section"
      >
        <Grid item xs={12}>
          <div className="justify-content-center">
            <div className="position-relative text-center">
              <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                PROFESSIONAL STYLING AT HOME
              </span>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Section 06 */}
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        sx={{
          backgroundPosition: "0px 58.7016px",
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundAttachment: "fixed",
          width: "auto",
          height: "60vh",
        }}
        className="background43"
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          sx={{ textAlign: "left", marginLeft: "10rem" }}
        >
          <Grid item xs={6} sx={{ paddingRight: "40px" }}>
            <Link to="/styling" className={classes.noDecoration}>
              <Typography
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  fontSize: "70px",
                  lineHeight: "70px",
                }}
              >
                <h2 className="alt-font text-extra-dark-gray font-weight-800 width-25 margin-40px-tb d-block text-uppercase">
                  <mark className="bg-black text-yellow">
                    &nbsp;&nbsp;Styling&nbsp;&nbsp;
                  </mark>
                </h2>
              </Typography>
            </Link>

            <Typography
              variant="body2"
              color="textSecondary"
              className="font-weight-500 alt-font"
              sx={{
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
                fontSize: "12px",
                lineHeight: "14px",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              DRY + STRAIGHTEN + BRUSH + CURL
            </Typography>
            <Typography
              variant="body1"
              className="font-weight-500 alt-font"
              style={{
                fontSize: "16px",
                lineHeight: "23px",
                width: "60%",
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
              }}
            >
              Carrera styling tools, like all Carrera products, are engineered
              in Germany to the highest standards. Their salon quality styling
              tools are powerful, beautifully engineered and long-lasting with
              gender-neutral designs that deliver outstanding performance beyond
              borders.
            </Typography>
            <Link to="/styling" className={classes.noDecoration}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm mt-3"
              >
                <span className="text-uppercase">shop styling</span>
              </button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>

      {/* Section 07 */}
      <Grid
        container
        className="padding-40px-tb bg-extra-dark-gray action-section"
      >
        <Grid item xs={12}>
          <div className="justify-content-center">
            <div className="position-relative text-center">
              <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                BECAUSE BEAUTY KNOWS NO BOUNDS
              </span>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Section 08 */}
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        sx={{
          backgroundPosition: "0px 58.7016px",
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundAttachment: "fixed",
          width: "auto",
          height: "60vh",
        }}
        className="background44"
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          sx={{ textAlign: "left", marginLeft: "10rem" }}
        >
          <Grid item xs={6} sx={{ paddingRight: "40px" }}>
            <Link to="/beauty" className={classes.noDecoration}>
              <Typography
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInDown",
                  animationFillMode: "both",
                  fontSize: "70px",
                  lineHeight: "70px",
                }}
              >
                <h2 className="alt-font text-extra-dark-gray font-weight-800 width-25 margin-40px-tb d-block text-uppercase">
                  <mark className="bg-black text-white">
                    &nbsp;&nbsp;BEAUTY&nbsp;&nbsp;
                  </mark>
                </h2>
              </Typography>
            </Link>

            <Typography
              variant="body2"
              color="textSecondary"
              className="font-weight-500 alt-font"
              sx={{
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
                fontSize: "12px",
                lineHeight: "14px",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              BRUSH + CURL + STRAIGHTEN + STYLE
            </Typography>
            <Typography
              variant="body1"
              className="font-weight-500 alt-font"
              style={{
                fontSize: "16px",
                lineHeight: "23px",
                width: "60%",
                animationDuration: "2s",
                animationName: "fadeInDown",
                animationFillMode: "both",
              }}
            >
              Both male and female skin requires daily care to maintain a
              healthy balance. Carrera beauty products are made for everyone and
              anyone who enjoys a personal care routine. Whether you are
              applying or removing make-up or prepping your face for a shave,
              Carrera beauty tools are made for you, whatever your gender.
            </Typography>
            <Link to="/beauty" className={classes.noDecoration}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm mt-3"
              >
                <span className="text-uppercase">shop beauty</span>
              </button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    </>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
