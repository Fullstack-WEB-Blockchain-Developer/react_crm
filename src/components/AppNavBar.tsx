import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color:"red",
    height:'45px',
  },
  toolbar: {
    minHeight: 0,
    height:45,
  },
}));

interface AppNavBarProps {
  handleDrawerToggle: () => void;
  styles: TODO;
}
// class Header extends React.Component {
const AppNavBar: React.FC<AppNavBarProps> = ({ styles, handleDrawerToggle}) => {
const handleClick = () => {
    // window.open(
    //   "https://github.com/harryho/react-crm",
    //   undefined,
    //   undefined,
    //   false
    // );
  };

  let style = useStyles(styles);

  

  return (
    <div>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
               onClick={handleDrawerToggle}
            color="inherit"
            aria-label="menu"
          >
            <Typography variant="h4"  className={style.title}>
              S
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;
