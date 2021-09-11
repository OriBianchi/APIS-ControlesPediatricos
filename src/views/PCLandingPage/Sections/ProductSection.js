/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Wachines from "assets/img/CuteCons/wachines.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


import Abeja from "components/Animations/Bee/Bee.js";
import Hands from "components/Animations/Hands/Hands.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <Abeja />
      <Hands />
        <GridItem s={12} sm={12} md={8}>
          <img src={Wachines} alt="Niños"></img>
          <h2 className={classes.title}>
            Todos tus controles, en un mismo lugar.
          </h2>
          <h5 className={classes.description}>
            PediaCare es un servicio digital destinado a padres para
            el seguimiento médico de sus hijos.
            Nuestro objetivo es mantenerte al día en las nuevas novedades sobre calendarios de vacunación, 
            proveerte percentiles y otros parámetros de control
            para que cuentes con toda la información médica sobre tus hijos al alcance de tus manos.
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
