import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HomePost from "./HomePost";
import Image from "../../images/gaming.jpg";
import Image2 from "../../images/ps4.png";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    width: "90%",
  },
}));

function HomePosts() {
  const classes = useStyles();

  return (
    <div className="HomePosts">
      <Grid
        className={classes.customWidthContainer}
        container
        direction="row"
        spacing={1}
      >
        <Grid item xs={12}>
          <HomePost Image={Image} Title={"Some image title"}></HomePost>
        </Grid>
        <Grid item xs={12}>
          <HomePost Image={Image2} Title={"Some image title"}></HomePost>
        </Grid>
        <Grid item xs={12}>
          <HomePost Image={Image} Title={"Some image title"}></HomePost>
        </Grid>
        <Grid item xs={12}>
          <HomePost Image={Image2} Title={"Some image title"}></HomePost>
        </Grid>
        <Grid item xs={12}>
          <HomePost Image={Image} Title={"Some image title"}></HomePost>
        </Grid>
        <Grid item xs={12}>
          <HomePost Image={Image2} Title={"Some image title"}></HomePost>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePosts;
