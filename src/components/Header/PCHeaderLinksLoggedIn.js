/*eslint-disable*/
import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Link to={"profile-page"} className={classes.link}>
        <Button  color="rose">
          <AccountCircleOutlinedIcon className={classes.icons} /> Mi Perfil
        </Button>
      </Link>
      <Link to={"/"} className={classes.link}>
        <Button  color="info">
          Cerrar Sesión
        </Button>
      </Link>
    </List>
  );
}
