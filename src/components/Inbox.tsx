import React from 'react';
import { match } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM} from "../types";
import { ApiAction, GET_EMAILCRM } from "../store/types";

const useStyles = () => {
    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%'
        },
        paper: {
            width: '100%',
            minHeight: 670,
            margin: 0,
            height: 'auto'
        },
        iconLM: {
            textAlign: 'right'
        },
        breadcrumbsFont: {
            fontSize: '12px',
            alignItems: 'center'
        },
        containerP: {
            padding: '20px 25px 0px 25px'
        }, 
        table: {
        minWidth: 'auto',
        },
        caret: {
            height: 15,
            backgroundImage: 'url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png)',
            width: 15,
            cursor: 'pointer',  
        },
        cellflex: {
            display: 'flex',
            fontSize: '12px'
        },
        font: {
            fontSize: '12px',
            lineHeight: 'o.5'
        }
    }
}


interface EmailCRMProps {
    // match: match;
    emailCrm: EmailCRM;
    getEmailCRM: typeof thunkApiCall;
    errorMessage?: string;
    isFetching: boolean;
    updated: boolean;
}
  
interface EmailCRMState {
    emailCrm: EmailCRM;
    snackbarOpen: boolean;
    autoHideDuration: number;
  }
  
//   function Inbox(props) {
class Inbox extends React.Component<EmailCRMProps, EmailCRMState> {
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      this.onSnackBarClose = this.onSnackBarClose.bind(this);
    }
  
    state = {
      emailCrm: {} as EmailCRM,
      snackbarOpen: false,
      autoHideDuration: 2000,
    };
  
    componentDidMount() {
      // @ts-ignore
      const emailCrmId = 1;
      let action: ApiAction;
      if (emailCrmId) {
        action = getAction(GET_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
        this.props.getEmailCRM(action);
      }
    }
  
    componentDidUpdate(prevProps) {
      // reset page if items array has changed
      if (this.props.emailCrm !== prevProps.emailCrm) {
        this.setState({ emailCrm: this.props.emailCrm });
      }
      if (
        this.props.updated !== prevProps.updated &&
        this.props.updated === true
      ) {
        this.setState({ snackbarOpen: true });
      }
  
    }
  
    onSnackBarClose() {
      this.setState({
        snackbarOpen: false,
      });
    }
    
    render() {
        const classes = useStyles();
        const { isFetching, emailCrm } = this.props;

        return (
            <div style={{display: 'flex'}}>
                <Paper elevation={3} style={classes.paper}>
                    <Grid xs={12} container style={classes.containerP}>
                        <Grid xs={6} item container style={classes.breadcrumbsFont}>
                            <Grid item xs={'auto'}>{isFetching} - {this.state.emailCrm.from}</Grid>
                            <DoubleArrow />
                            <Grid item>Follow up</Grid>
                        </Grid>
                        <Grid xs={6} item style={{textAlign: 'right'}}>
                            <Tooltip title="Print" arrow>
                                <IconButton color="inherit">
                                    <Print />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Launch" arrow>
                                <IconButton color="inherit">
                                    <Launch />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid xs={12} container style={classes.containerP} >
                        <Grid item container xs={6}>
                            <Grid item xs={2} alignItems='center'>
                                <AccountCircle style={{fontSize: '40px'}}/>
                            </Grid>
                            <Grid item container xs={10}>
                                <Grid item xs={12}>{'props.data[2].value'}</Grid>
                                <Grid item xs={12} style={{display: 'flex'}}>
                                    <Typography style={classes.font}>to me</Typography>
                                    <div style={classes.caret}></div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} alignItems={'center'} direction={'row-reverse'}>
                            <Grid item xs={'auto'}>
                                <Tooltip title="MoreVert" arrow>
                                    <IconButton color="inherit">
                                        <MoreVert />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Tooltip title="Reply" arrow>
                                    <IconButton color="inherit">
                                        <Reply />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Tooltip title="StarBorder" arrow>
                                    <IconButton color="inherit">
                                        <StarBorder />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                {'this.props.data[3].value'} beforeTime
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>

                    </Grid>
                </ Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {
      emailCrm,
      isFetching,
      updated,
    } = state;
  
    return {
      emailCrm,
      isFetching,
      updated,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      getEmailCRM: (action) => dispatch(thunkApiCall(action)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
