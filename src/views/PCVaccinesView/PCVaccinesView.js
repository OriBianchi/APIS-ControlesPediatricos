/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Cuerpo
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinksLI from "components/Header/PCHeaderLinksLoggedIn.js";
//Core
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom";
import Vacunita from "assets/img/CuteCons/vacunita.png"

import VacunasTable from "components/Table/VacunasTable.js"

//Icons -- Media

//Card
import Card from "components/Card/Card.js"

const useStyles = makeStyles(styles);
export default function ProfilePage(props) {
  // eslint-disable-next-line no-unused-vars
  const [cardAnimation, setCardAnimation] = React.useState("cardHidden");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="info"
        brand="Pediacare"
        rightLinks={<HeaderLinksLI />}
        fixed
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}>


      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>                  <p style={{ color: "white" }}>.</p></GridItem>
            
            <img src={Vacunita} style={{ width: "100px", left: "10%", bottom: "8%" }}></img>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <p style={{ color: "white" }}>.</p>
                  <p style={{ color: "white" }}>.</p>
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>Vacunas</h2>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            {/* ------- Hijo Seleccionado --------------*/}
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              <p> Estas viendo las vacunas de:</p> <p style={{ fontWeight: "bold", fontSize: "1.3em" }}>Aquiles Bailo</p>
            </GridItem>
          </GridContainer>

          {/* -----    Contenedor de Tabla  -------*/}
          <GridContainer>

            <VacunasTable />

            <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
              <Card>
                <Link to={"register-vaccine"}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                    size="large">
                    Añadir
                  </Button>
                </Link>
              </Card>
            </GridItem>

          </GridContainer>
        </div>
      </div>
      <Footer />
    </div >
  );
}
