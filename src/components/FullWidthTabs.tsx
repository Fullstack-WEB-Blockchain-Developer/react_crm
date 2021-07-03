import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Button, Paper, Avatar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MailIcon from '@material-ui/icons/Mail';
import CreateIcon from '@material-ui/icons/Create';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraRearIcon from '@material-ui/icons/CameraRear';
import AddCircle from '@material-ui/icons/AddCircle';
import CustomizedTimeline from './CustomizedTimeline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  icon: {
      '& > svg': {
          margin: theme.spacing(1),
          
      },
      textAlign: 'justify',
      backgroundColor: 'lightGray',
      margin: '5px'
  },
  tTrans: {
      textTransform: 'capitalize',
      border: '1px solid gray',
      width: '100%',
      borderRadius: '0px',
      marginBottom: '5px'
  },
  tabPanelBorder: {
      border: '1px solid gray',
      margin: '5px',
      marginTop: '0px',

    },
    
}));
const style = {
    minWidth: 'auto',
    fontSize: '10px'
};
const GlobalCss = withStyles({
    '@global': {
        '.MuiBox-root': {
            padding: '5px'
        },
        '.MuiButton-root': {
            padding: '2px',
            lineHeight: '1'
        }
    }
})(() => null);



export default function FullWidthTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Grid className={classes.tabPanelBorder}>
            <GlobalCss />
            <TabPanel value={value} index={0}>
                <Button  className={classes.tTrans} >
                    Schedule an Email
                </Button>
                <Button  className={classes.tTrans}>
                    Build & Price-Send Deal
                </Button>
                <CustomizedTimeline />
                <Grid container spacing={2}>
                  <Grid item md={2}>
                    <span>Time</span>
                    <p>11:35</p>
                    <p>13:05</p>
                  </Grid>
                  <Grid item md={10}>
                    <Typography>Events</Typography>
                    <Paper>
                      <Typography>Appointment</Typography>
                      <Typography>Who: Sam Wilson</Typography>
                      <Typography><LocationOnIcon/>Where:Zoom Meetings</Typography>
                      <Typography><Avatar>W</Avatar>Hosted By: Sam Wision</Typography>
                    </Paper>
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <AddCircle />
                      </IconButton>
                      <Typography>Add an event</Typography>
                    </label>
                  </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Grid>
        <Grid className={classes.icon}>
            <IconButton>
                <MailIcon />
            </IconButton><IconButton>
                <CreateIcon />
            </IconButton>
            <IconButton>
                <CallToActionIcon />
            </IconButton>
            <IconButton>
                <LocalOfferIcon />
            </IconButton>
            <IconButton>
                <VideocamIcon />
            </IconButton>
            <IconButton>
                <CameraRearIcon />
            </IconButton>
        </Grid>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Follow Up" {...a11yProps(0)} style={style} />
            <Tab label="Approval" {...a11yProps(1)} style={style} />
            <Tab label="Delivery" {...a11yProps(2)} style={style} />
            </Tabs>
        </AppBar>
        
    </div>
  );
}
