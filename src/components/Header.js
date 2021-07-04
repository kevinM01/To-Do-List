import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  btn: {
    textDecoration: "none",
    color: "white"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  let name = props.details.name;
  console.log(name,props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} ><Link className={classes.btn}  to="/contact">
            Contact Us</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
           Hello {name}
          </Typography>
          <Link to="/" className={classes.btn}><Button color="inherit" >Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
