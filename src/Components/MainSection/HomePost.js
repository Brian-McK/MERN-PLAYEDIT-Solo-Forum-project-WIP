import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PostVote from "./PostVote";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    border: "2px solid yellow",
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
        <Grid item className={classes.customGridItemIcons}>
          <PostVote></PostVote>
        </Grid>
        <Grid item className={classes.customGridItemIcons}>
          Main Section
        </Grid>
        <Grid item className={classes.customGridItemIcons}>
          Image Preview
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePost;