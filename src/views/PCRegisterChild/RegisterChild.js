/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ChildCareIcon from '@material-ui/icons/ChildCare';
//Calendario 


// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="info"
        brand="PediaCare"
        rightLinks={<HeaderLinks />
        }
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Registrar Hij@</h4>

                  </CardHeader>
                  <CardBody>

                    <CustomInput
                      labelText="Nombre..."
                      id="Nombre"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "Nombre",
                        endAdornment: (
                          <InputAdornment position="end">
                            <ChildCareIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Apellido..."
                      id="Apellido"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "Apellido",
                        endAdornment: (
                          <InputAdornment position="end">
                            <ChildCareIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="DNI..."
                      id="DNI"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "DNI",
                        endAdornment: (
                          <InputAdornment position="end">
                            <FingerprintIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  



                    <p1 style={{ padding: "65px" }} >

                      <Link to={"register-page"} className={classes.link}> ¿Olvidaste tu contraseña?     </Link>

                    </p1>

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button round color="info" size="lg">

                      Continuar
                    </Button>
                  </CardFooter>






                  <p className={classes.divider}></p>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
