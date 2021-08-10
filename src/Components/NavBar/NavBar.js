import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from '../../images/playedit_logo.png';
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="NavBar">
      <Grid container>
        <Grid item xs={12} sm={4} md={4}>
          <img src={logo} className="logo"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <SearchBar></SearchBar>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>Login</Grid>
      </Grid>
    </div>
  );
}

export default NavBar;
