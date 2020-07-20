import React from 'react';
import { makeStyles, createMuiTheme ,ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price range($)
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={5000}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
    </ThemeProvider>

  );
}
