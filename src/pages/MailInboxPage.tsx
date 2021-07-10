import React from "react";
import { match } from "react-router-dom";
import PageBase from "../components/PageBase";
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";

import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

import { thunkApiCall } from "../services/thunks";
import { EmailCRM} from "../types";
import {
  ApiAction,
  GET_EMAILCRM,
} from "../store/types";
import SkeletonForm from "../components/SkeletonForm";
import { formPageStyles } from "../styles";

const styles = formPageStyles;

interface EmailCRMProps {
  match: match;
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

class MailInboxPage extends React.Component<
  EmailCRMProps,
  EmailCRMState
> {
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
    const { isFetching, emailCrm } = this.props;
    console.log('================== render mailbox====================')
    console.log(emailCrm)

    return (
      <PageBase title="Email Inbox" navigation="Application / Email Inbox ">
        {isFetching ? (
          <div>
            <SkeletonForm />
          </div>
        ) : (
          <Grid container style={styles.container} spacing={3}>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="UID"
                label="UID"
                name="UID"
                fullWidth={true}
                value={this.state.emailCrm.uid}
                // onChange={}
              />
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="From Email"
                label="From Email"
                name="From Email"
                fullWidth={true}
                value={this.state.emailCrm.from}
                // onChange={}
              />
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="Subject"
                label="Subject"
                name="Subject"
                fullWidth={true}
                value={this.state.emailCrm.subject}
                // onChange={}
              />
            </Grid>

            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="Body"
                label="Body"
                name="Body"
                fullWidth={true}
                value={this.state.emailCrm.body}
                // onChange={}
              />
            </Grid>
          </Grid>
        )}
      </PageBase>
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

export default connect(mapStateToProps, mapDispatchToProps)(MailInboxPage);
