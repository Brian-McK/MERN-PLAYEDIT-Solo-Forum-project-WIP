import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PostVote from "./PostVote";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    minHeight: "inherit",
  },
  customGridItemIcons: {
    border: "2px solid green",
    minHeight: "inherit",
  },
}));

function HomePost() {
  const classes = useStyles();

  return (
    <div className="HomePost">
      <Grid
        className={classes.customWidthContainer}
        container
        direction="row"
        alignItems="center"
      >
        <Grid
          item
          className={classes.customGridItemIcons}
          xs={2}
          sm={2}
          md={2}
          lg={1}
        >
          <PostVote></PostVote>
        </Grid>
        <Grid
          item
          className={classes.customGridItemIcons}
          xs={7}
          sm={6}
          md={7}
          lg={7}
        >
          Main Section
        </Grid>
        <Grid
          item
          className={classes.customGridItemIcons}
          xs={3}
          sm={4}
          md={3}
          lg={4}
        >
          Image Preview
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePost;
