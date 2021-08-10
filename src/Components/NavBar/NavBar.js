import Grid from "@material-ui/core/Grid";
import logo from "../../images/playedit_logo.png";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function NavBar() {
  return (
    <div className="NavBar">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={2} md={4}>
          <img src={logo} className="logo"></img>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SearchBar
            fullWidth={true}
            variant={"outlined"}
            label={"Search..."}
          ></SearchBar>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <ButtonGroup
            size="medium"
            color="primary"
            aria-label="medium outlined primary button group"
          >
            <Button>Login</Button>
            <Button>Signup</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavBar;
