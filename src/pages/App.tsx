import * as React from "react";
import "../styles.scss";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider, createStyles, makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import { Route, Redirect } from "react-router-dom";
import AppNavBar from "../components/AppNavBar";
import AppNavDrawer from "../components/AppNavDrawer";
import { WithWidth } from "@material-ui/core/withWidth";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import themeDefault from "../theme-default";
import { connect } from "react-redux";
import LoginPage from "./SignInPage";
import styles from "../styles";
import { User } from "../types";

import { thunkAuth } from "../services/thunks";
import { SIGN_IN, HttpMethod, SIGN_OUT } from "../store/types";
import DashboardPage from "./DashboardPage";
import CustomerListPage from "./CustomerListPage";
import CustomerFormPage from "./CustomerFormPage";
import OrderFormPage from "./OrderFormPage";
import OrderListPage from "./OrderListPage";
import ProductFormPage from "./ProductFormPage";
import ProductListPage from "./ProductListPage";
import AboutPage from "./AboutPage";
// import NotFoundPage from "./NotFoundPage";
import ChangePasswordPage from "./ChangePasswordPage";
import MaileInboxPage from "./MaileInboxPage";

const isSmallsWindowScreen = () => {
  return window.innerWidth <= 600;
};
const drawerWidth = 250;

const useStyles = (navDrawerOpen: boolean, isSmallScreen: boolean) => {
  return {
    appBar: {
      zIndex: 1500,
      position: "fixed",
      top: 0,
      overflow: "hidden",
      maxHeight: 45,
      minHeight: 0,
      width:
        navDrawerOpen && !isSmallScreen
          ? `calc(100% - ${drawerWidth}px)`
          : `100%`,
      marginLeft: navDrawerOpen && isSmallScreen ? drawerWidth : 0,
    },
    drawer: {
      width: isSmallScreen ? drawerWidth : 0,
      // flexShrink: 0,
      overflow: "auto",
    },
    content: {
      // margin: '10px 20px 20px 15px',
      flexGrow: 1,
      paddingLeft: navDrawerOpen && !isSmallScreen ? drawerWidth : 0,
    },
  };
};

type AppProps = {
  children: React.ReactChildren;
  isAuthenticated: boolean;
  errorMessage: string;
  user: User;
  isFetching: boolean;
  signInUser: typeof thunkAuth;
  signOutUser: typeof thunkAuth;
} & WithStyles<typeof styles> &
  WithWidth;

interface AppState {
  navDrawerOpen: boolean;
  isSmallScreen: boolean;
  showDashboard: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: Readonly<AppProps>) {
    super(props);
    this.state = {
      navDrawerOpen: isSmallsWindowScreen(),
      isSmallScreen: isSmallsWindowScreen(),
      showDashboard: false,
    };
    this.signOut = this.signOut.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  signInAction = {
    type: SIGN_IN,
    endpoint: "login/",
    method: HttpMethod.POST,
    data: {},
  };

  signOutAction = {
    type: SIGN_OUT,
    endpoint: "logout/",
    method: HttpMethod.GET,
    data: {},
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    // @ts-ignore
    const pathname = this.props.location.pathname;
    const showDashboard = pathname === "/" || pathname.endsWith("dashboard");
    this.setState({ showDashboard });
    // @ts-ignore
    this.props.isAuthenticated && this.props.location.pathname === "/" && this.props.history.push("/dashboard");
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated !== prevProps.isAuthenticated &&
      this.props.isAuthenticated === true
    ) {
      // this.setState({ snackbarOpen: true });
      // @ts-ignore
      this.props.isAuthenticated && this.props.location.pathname === "/" && this.props.history.push("/dashboard");
    }
  }

  handleDrawerToggle() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  resize() {
    this.setState({
      isSmallScreen: isSmallsWindowScreen(),
      navDrawerOpen: !isSmallsWindowScreen(),
    });
  }

  signIn(c) {
    this.signInAction.data = c;
    this.props.signInUser(this.signInAction);
  }

  signOut() {
    this.props.signOutUser(this.signOutAction);
  }

  changePass() {
    // @ts-ignore
    this.props.history.push("/changepass");
  }

  render() {
    const { isAuthenticated, user } = this.props;

    const firstname = user && user.firstname ? user.firstname : "";
    const lastname = user && user.lastname ? user.lastname : "";

    let { navDrawerOpen, isSmallScreen } = this.state;
    const appStlyes = useStyles(navDrawerOpen, isSmallScreen);

    // @ts-ignore
    const pathname = this.props.location.pathname;
    const showDashboard = pathname === "/" || pathname.endsWith("dashboard");

    return (
      <div>
        <DashboardPage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  const { isFetching, isAuthenticated, user } = auth;

  return {
    isAuthenticated,
    isFetching,
    // errorMessage,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signInUser: (action: TODO) => dispatch(thunkAuth(action)),
    signOutUser: (action: TODO) => dispatch(thunkAuth(action)),
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
