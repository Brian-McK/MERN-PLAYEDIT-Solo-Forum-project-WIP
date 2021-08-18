import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    border: "2px solid grey",
    height: "100%"
  }
}));

function PostVote() {
  const classes = useStyles();

  return (
    <div className="PostVote">
      <Grid
        className={classes.customWidthContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </Grid>
        <Grid item >
          Vote Count
        </Grid>
        <Grid item >
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostVote;
