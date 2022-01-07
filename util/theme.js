import {
    createTheme,
    responsiveFontSizes
} from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
    palette: {
     /* primary: {
        main: '#000000'
      },
      secondary: {
        main: '#000000'
      }
    */
    },
    typography: {
      //fontFamily: 'Inter',
      //fontFamily: '"Open Sans", sans-serif;'
    },
  }), { factor: 2.5 });

export default theme;