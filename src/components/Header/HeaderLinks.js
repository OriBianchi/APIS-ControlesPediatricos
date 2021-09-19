/*eslint-disable*/
import React from "react";

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
      <ListItem className={classes.listItem}>
        
          <Link to={"login-page"} className={classes.link}>
          <Button color="rose">
            <AccountCircleOutlinedIcon className={classes.icons} /> Iniciar Sesión

          </Button>
        </Link>

        <Link to={"register-page"} className={classes.link}>
          <Button color="info">
            <AccountCircleOutlinedIcon className={classes.icons} /> Registrarme

          </Button>
        </Link>
        </ListItem>
    </List>
  );
}
