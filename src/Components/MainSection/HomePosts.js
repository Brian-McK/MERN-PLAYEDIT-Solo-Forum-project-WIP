import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HomePost from "./HomePost";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    width: "90%",
    border: "2px solid pink",
  }
}));

function HomePosts() {
  const classes = useStyles();

  return (
    <div className="HomePosts">
      <Grid
        className={classes.customWidthContainer}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <HomePost></HomePost>
        <HomePost></HomePost>
        <HomePost></HomePost>
        <HomePost></HomePost>
        <HomePost></HomePost>
        <HomePost></HomePost>
        <HomePost></HomePost>
      </Grid>
    </div>
  );
}

export default HomePosts;
