import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Grid, IconButton, withStyles  } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({   
    bd: {
        margin: '5px',
        backgroundColor: '#fff4fb'
    },
    mg: {
        margin: '5px',
        backgroundColor: '#fff4fb'
    },
    typoPad: {
        paddingLeft: '10px'
    },
    align: {
        textAlign: 'right'
    },
    iconPad: {
        padding: '2px'
    },
    topPad: {
        paddingTop: '10px'
    },
}));

const theme = createMuiTheme({
    typography: {
      fontSize: 10,      
    },
  });
const GlobalCss = withStyles({
    '@global': {
        '.MuiSvgIcon-root': {
            fontSize: 'large'
        }
    }
})(() => null);

export default function PaperInfo(props){
    const classes = useStyles();
    return (
        <Paper className={classes.mg} elevation={3}>
            <Grid container xs={12} md={12} className={classes.topPad}>
                {props.data.map((item) => (
                    <Grid item xs={6} className={classes.typoPad}>
                        <ThemeProvider theme={theme}>
                            <Typography display="inline">{item.name}</Typography>
                            <Typography display="inline">{item.value}</Typography>
                        </ThemeProvider>
                    </Grid>
                ))} 
            </Grid>
            <Grid className={classes.align}>
                <GlobalCss/>
                <IconButton aria-label="AddCircleOutline" className={classes.iconPad}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
        </Paper>     
    )
};