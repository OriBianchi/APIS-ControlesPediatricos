/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
//pop up
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";



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
import ballena from "assets/img/CuteCons/ballena.jpg";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [classicModal, setClassicModal] = React.useState(false);

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
                    <h4>Iniciar Sesión</h4>

                  </CardHeader>
                  <CardBody>

                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "Contraseña",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />

                    <Button
                      color="primary" simple
                      block
                      onClick={() => setClassicModal(true)}

                    >
                      ¿Olvidaste tu contraseña?
                    </Button>
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal,
                      }}
                      open={classicModal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => setClassicModal(false)}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          style={{ padding: "0px 0px 0px 0px" }}
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setClassicModal(false)}
                        >
                          <Close className={classes.modalClose} />

                        </IconButton>

                        <h3 className={classes.modalTitle} style={{ padding: "0px 0px 0px 160px", margin: "0px" }}>Recuperar Contraseña</h3>

                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <p style={{ padding: "0px 0px 0px 20px" }}>
                          Te enviaremos un correo con una contraseña nueva para que puedas ingresar nuevamente.
                        </p>
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <img src={ballena} width="350" heigh="150" style={{ padding: "0px 0px 0px 230px" }}></img>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button
                          onClick={() => setClassicModal(false)}
                          color="default"
                          round


                        >
                          Cancelar
                        </Button>
                        <Button color="info" round>
                          Enviar
                        </Button>

                      </DialogActions>
                    </Dialog>
                  
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"/"} className={classes.link}>
                      <Button round color="info" size="lg">

                        Ingresar
                      </Button>
                    </Link>
                  </CardFooter>




                  <p1 style={{ padding: "72.5px" }} >
                    ¿No tenes una cuenta?
                    <Link to={"register-page"} className={classes.link}> Registrate</Link>
                  </p1>
                  <p className={classes.divider}></p>



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
