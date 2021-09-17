/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ChildCareIcon from '@material-ui/icons/ChildCare';
//Calendario 
//import Date from "react-datetime";
import "assets/css/calendario.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// Sexo
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";


//import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

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

                    <GridItem xs={12} sm={12} md={14}>

                      <GridContainer>
                        <p className={classes.divider}>Fecha de nacimiento:</p>
                        <GridItem xs={12} sm={12} md={6}>

                          <br />
                          <FormControl fullWidth>
                            <DatePickerComponent placeholder="              ..."format="dd-MMM-yy"></DatePickerComponent>
                            
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <p1 style={{ padding: "65px" }} ></p1>
              <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <p className={classes.divider}>Sexo:</p>
              </div>
              <div style={{padding: "0px 0px 0px 30px" }} 
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Masculino"
                />
              </div>
              <div style={{padding: "0px 0px 0px 30px" }} 
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Feminino"
                />
              </div>
          
            </GridItem>




                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"register-page"} className={classes.link}>
                      <Button round color="default" size="md">
                        Anterior
                      </Button>
                    </Link>
                    <Link to={"register-datos-child-page"} className={classes.link}>
                      <Button round color="info" size="md">

                        Continuar
                      </Button>
                    </Link>
                  </CardFooter>
            
              




                  <p className={classes.divider}></p>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div >
  );
}
