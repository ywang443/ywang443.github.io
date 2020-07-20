import React from 'react';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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


function getSteps(t) {
  return [t("Stepper:Step1"), t("Stepper:Step2"), t("Stepper:Step3")];
}

function getStepContent(step,pFunction,t) {
  const classess = fromStyles();

  switch (step) {
    case 0:
      return (
        <PersonalInfo t={t} functionCallFromParent={pFunction.bind(this)} />    );
    case 1:
      return (
        <div>
        <span>{t("Stepper:String1")}</span>
        <br></br>
          <br></br>
        <div class="row col-12">
       <input type="checkbox">
         </input><p>{t("Stepper:Studio")}</p>
       <input type="checkbox">
         </input><p>{t("Stepper:OneBedroom")}</p>
       <input type="checkbox">
         </input><p>{t("Stepper:TwoBedroom")}</p>
       <input type="checkbox">
         </input><p>{t("Stepper:ThreeBedroom")}</p>
       <input type="checkbox">
         </input>{t("Stepper:Penthahouse")}
       </div>
       </div>
      );
    case 2:
      return t("Stepper:String2");
    default:
      return t("Stepper:String3");
  }
}

export default function VerticalLinearStepper() {
  const [t, i18n] = useTranslation();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(t);
  const [flag,setflag] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const  pFunction =(data_from_child)=>{
    //console.log("flag from PersonalInfo: "+ data_from_child);
    //console.log("flag state: "+ flag);
    setflag(data_from_child);
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index,pFunction,t)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      variant="contained"
                      onClick={handleBack}
                      className={classes.button}
                    >
                    {t("Stepper:Back")}
                    </Button>
                    <Button
                      disabled={!flag}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? t("Stepper:Finish"): t("Stepper:Next")}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>

          <Button variant="contained" color="primary" onClick={handleReset} className={classes.button}>
            {t("Stepper:Reset")}
          </Button>
        </Paper>
      )}
    </ThemeProvider>
    </div>
  );
}
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ['',true],
      Password: ['',true],
      Firstname: ['',true],
      Lastname: ['',true],
      cellphone: ['',true],
      email: ['',true],
      address: ['',true],
      postcode: ['',true],
      flag: false,
    };
  }

  onChange(event){
    if ((!this.state.username[1])&&(!this.state.Password[1])&&(!this.state.Firstname[1])
    &&(!this.state.Lastname[1])&&(!this.state.cellphone[1])&&(!this.state.email[1])&&(!this.state.address[1])&&(!this.state.postcode[1])){
      this.setState({flag : true})
    }else{
      this.setState({flag : false})
    }

    if(event.target.id === "username"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ username : ["", false]});
      } else {
        this.setState({ username : [this.props.t("Stepper:Error1"), true] });
      }
    }
    else if (event.target.id === "Password"){
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(event.target.value)) {
        this.setState({ Password : ["", false]});
      } else {
        this.setState({ Password : [this.props.t("Stepper:Error2"), true] });
      }
    }
    else if(event.target.id === "First Name"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ Firstname : ["", false]});
      } else {
        this.setState({ Firstname : [this.props.t("Stepper:Error3"), true] });
      }
    }
    else if (event.target.id === "Last Name"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ Lastname : ["", false]});
      } else {
        this.setState({ Lastname : [this.props.t("Stepper:Error4"), true] });
      }
    }
    else if (event.target.id === "cellphone"){
      if ( /^[0-9]{10}$/.test(event.target.value)) {
        this.setState({ cellphone : ["", false]});
      } else {
        this.setState({ cellphone : [this.props.t("Stepper:Error5"), true] });
      }
    }
    else if (event.target.id === "email"){
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
        this.setState({ email : ["", false]});
      } else {
        this.setState({ email : [this.props.t("Stepper:Error6"), true] });
      }
    }
    else if(event.target.id === "address"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ address : ["", false]});
      } else {
        this.setState({ address : [this.props.t("Stepper:Error7"), true] });
      }
    }
    else if (event.target.id === "postcode"){
      if (/[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/.test(event.target.value)) {
        this.setState({ postcode : ["", false]});
      } else {
        this.setState({ postcode : [this.props.t("Stepper:Error8"), true] });
      }
    }
    this.props.functionCallFromParent(this.state.flag);

  }

  render() {
    return (
      <form className={fromStyles.root} noValidate autoComplete="off">
      <div>
      <TextField
      error={this.state.username[1]}
      onChange={this.onChange.bind(this)}
      id="username"
      label={this.props.t("Stepper:Username")}
      defaultValue=""
      helperText={this.state.username[0]}
      variant="filled"/>
      </div>
      <br></br>
      <div>
      <TextField
      error={this.state.Password[1]}
      onChange={this.onChange.bind(this)}
      id="Password"
      label={this.props.t("Stepper:Password")}
      defaultValue=""
      helperText={this.state.Password[0]}
      variant="filled"
      />
      </div>
      <br></br>
        <div>
        <TextField
        error={this.state.Firstname[1]}
        onChange={this.onChange.bind(this)}
        id="First Name"
        label={this.props.t("Stepper:Firstname")}
        defaultValue=""
        helperText={this.state.Firstname[0]}
        variant="filled"/>
          </div>
          <br></br>
          <div>
          <TextField
          error={this.state.Lastname[1]}
          onChange={this.onChange.bind(this)}
          id="Last Name"
          label={this.props.t("Stepper:Lastname")}
          defaultValue=""
          helperText={this.state.Lastname[0]}
          variant="filled"/>
        </div>
        <br></br>
        <div>
        <TextField
        error={this.state.cellphone[1]}
        onChange={this.onChange.bind(this)}
        id="cellphone"
        label={this.props.t("Stepper:Cellphone")}
        defaultValue=""
        helperText={this.state.cellphone[0]}
        variant="filled"/>
        </div>
        <br></br>
        <div>
        <TextField
          error={this.state.email[1]}
          onChange={this.onChange.bind(this)}
          id="email"
          label={this.props.t("Stepper:Email")}
          defaultValue=""
          helperText={this.state.email[0]}
          variant="filled"
        />
        </div>
        <br></br>
        <div>
        <TextField
          error={this.state.address[1]}
          onChange={this.onChange.bind(this)}
          id="address"
          label={this.props.t("Stepper:Address")}
          defaultValue=""
          helperText={this.state.address[0]}
          variant="filled"
        />
        </div>
        <br></br>
        <div>
        <TextField
          error={this.state.postcode[1]}
          onChange={this.onChange.bind(this)}
          id="postcode"
          label={this.props.t("Stepper:Postcode")}
          defaultValue=""
          helperText={this.state.postcode[0]}
          variant="filled"
        />
        </div>
        </form>
                     );
  }
}
