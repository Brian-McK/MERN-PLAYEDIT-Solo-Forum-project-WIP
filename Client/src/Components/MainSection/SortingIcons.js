import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    width: '50%',
    border: '2px solid blue',
  },
  customGridItemIcons: {
    border: '2px solid red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

function SortingIcons() {
  const classes = useStyles();

  return (
    <div className="SortingIcons">
      <Grid
        className={classes.customWidthContainer}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item className={classes.customGridItemIcons}>
          <WhatshotIcon color="primary" fontSize="large" />
          Hot
        </Grid>
        <Grid item className={classes.customGridItemIcons}>
          <NewReleasesIcon color="primary" fontSize="large" />
          New
        </Grid>
        <Grid item className={classes.customGridItemIcons}>
          <ArrowUpwardIcon color="primary" fontSize="large" />
          Top
        </Grid>
      </Grid>
    </div>
  );
}

export default SortingIcons;
