//Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a>
//from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//<div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a>
//from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import React from "react";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import SignIn from "./signin/SignIn";
import contact from "./contact/contact";
import ResidentsPortal from "./ResidentsPortal/ResidentsPortal";
import { makeStyles, createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Backdrop from '@material-ui/core/Backdrop';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33eb91',
      main: '#00a152',
      dark: '#124116',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

const usesStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Header() {

  const classess = useStyles();
  const classes = usesStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div class="card bg-transparent text-white">
      <img class="card-img" src="./imgs/headerbck.jpg" alt="Card image" height="75%"/>
      <div class="card-img-overlay">
        <h4 class="text py-3 bg-transparent">
          <Link to="/" class="text -left px-3">
            <a class="text-success">SweetHome</a>
            <img src="./imgs/icons/sweethome.png" width="50"/>
          </Link>
          <Link to="/RentalProperties" class="text-white px-3">Rental Properties
          </Link>
          <Link to="/ResidentsPortal" class="text-white px-3">Residents Portal
          </Link>
          <Link to="/About" class="text-white px-3">About us
          </Link>
          <Link id="sign" onClick={handleOpen}
          to="/page404" class="float-right text-success">
          <img src="./imgs/icons/sign.png" width="20"/>SIGN IN
          </Link>
          <Link to="/contact"  type= "button" class="float-right btn btn-outline-success">CONTACT US
          </Link>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
          <Fade in={open}>
            <div className={classes.paper}>
              <div>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={classess.paper}>
                  <h2 id="title"><span className="text-success">SweetHome</span>
                  <img src="./imgs/icons/sweethome.png" width="50"/>
                  </h2>
                    <Typography component="h1" variant="h5">
                      Sign In
                    </Typography>
                    <form className={classess.form} noValidate>
                      <Grid container spacing={2}>

                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="Username"
                            label="Username"
                            name="Username"
                            autoComplete="Username"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                          />
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                      </Grid>
                      <ThemeProvider theme={theme}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classess.submit}
                      >
                        Sign In
                      </Button>
                      </ThemeProvider>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link href="#" variant="body2" to="/ResidentsPortal" onClick={handleClose}>
                            Don't have an account? Sign Up here!
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>

                </Container>
              </div>
            </div>
          </Fade>
        </Modal>
        </h4>

      </div>

      </div>

  );
}


export default Header;
