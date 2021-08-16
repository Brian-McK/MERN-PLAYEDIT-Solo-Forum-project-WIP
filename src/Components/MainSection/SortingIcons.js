import Grid from "@material-ui/core/Grid";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function SortingIcons() {
  return (
    <div className="SortingIcons">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="icon">
          <WhatshotIcon color="primary" fontSize="large" />
          Hot
        </Grid>
        <Grid item className="icon">
          <NewReleasesIcon color="primary" fontSize="large" />
          New
        </Grid>
        <Grid item className="icon">
          <ArrowUpwardIcon color="primary" fontSize="large" />
          Top
        </Grid>
      </Grid>
    </div>
  );
}

export default SortingIcons;
