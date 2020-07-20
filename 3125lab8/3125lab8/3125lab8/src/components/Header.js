import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';


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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
   minWidth: 120,
 },
}));


function Header(props) {
  const classess = useStyles();
  const classes = usesStyles();
  const [open, setOpen] = React.useState(false);
  const [lang,setlang] = React.useState('en');
  const [t, i18n] = useTranslation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changelang = (event) =>{
    setlang(event.target.value);
    console.log("lang " + lang)
    i18n.changeLanguage(event.target.value);
  }


  return (

    <div class="card bg-transparent text-white">
      <img class="card-img" src="./imgs/headerbck.jpg"  height="75%"/>
      <div class="card-img-overlay">
        <h4 class="text py-3">
          <Link to="/" class="text -left px-3">
            <a class="text-success">{t("header:SweetHome")}</a>
            <img src="./imgs/icons/sweethome.png" width="50"/>
          </Link>
          <Link to="/RentalProperties" class="text-white px-3">{t("header:RentalProperties")}
          </Link>
          <Link to="/ResidentsPortal" class="text-white px-3">{t("header:ResidentsPortal")}
          </Link>
          <Link to="/About" class="text-white px-3">{t("header:AboutUs")}
          </Link>
          <ThemeProvider theme={theme}>
          <FormControl className={classes.formControl}>
          <InputLabel id="language">{t("header:Language")}</InputLabel>
          <Select
          labelId="language"
          id="language"
          onChange={changelang}
          >
         <MenuItem value={"en"}  class="bg-dark"> <a class="text-white">{t("header:English")}</a></MenuItem>
         <MenuItem value={"cn"}  class="bg-dark"> <a class="text-white">{t("header:ChineseSimplified")}</a></MenuItem>
          </Select>
          </FormControl>
          </ThemeProvider>



          <Link id="sign" onClick={handleOpen}
          to="/SignIn" class="float-right text-success">
          <img src="./imgs/icons/sign.png" width="20"/>{t("header:SignIn")}
          </Link>
          <Link to="/contact"  type= "button" class="float-right btn btn-outline-success">{t("header:ContactUs")}
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
                      {t("header:SignIn")}
                    </Typography>
                    <form className={classess.form} noValidate>
                      <Grid container spacing={2}>

                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="Username"
                            label={t("header:Username")}
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
                            label={t("header:Password")}
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
                        {t("header:SignIn")}
                      </Button>
                      </ThemeProvider>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link href="#" variant="body2" to="/ResidentsPortal" onClick={handleClose}>
                            {t("header:SignUp")}
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
