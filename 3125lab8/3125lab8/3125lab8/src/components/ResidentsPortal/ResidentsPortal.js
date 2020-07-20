import React from 'react';
import StepperDemo from '../Stepper';
import Tooltip from '@material-ui/core/Tooltip';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { useTranslation } from  'react-i18next';



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
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const fromStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function ResidentsPortal() {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  return (
    <ThemeProvider theme={theme}>

		<div class="container">
    <div className="App">
    <br></br>
    <Tooltip
    title={t("RentalsPortals:help")}
     aria-label="add">
    <img src="./imgs/icons/question.png" width="50px" eight="50px"/>
    </Tooltip>
     <StepperDemo/>

    </div>
		</div>
    </ThemeProvider>

  );
}

export default ResidentsPortal;
