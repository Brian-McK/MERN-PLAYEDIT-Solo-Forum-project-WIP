import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    width: "100%",
  }, 
  media: {
    height:"50px"
  }
}));

function CommunitiesListItem(props) {
  const classes = useStyles();
  return (
    <div className="CommunitiesListItem">
      <Grid container className={classes.customWidthContainer} direction="row">
        <Grid item xs={2} style={{ border: "2px solid blue" }}>
          {props.Rank}
        </Grid>
        <Grid item xs={3} style={{ border: "2px solid blue" }}>
          <Card>
              <CardMedia
                component="img"
                className={classes.media}
                image={props.Image}
                title={props.Title}
              />
          </Card>
        </Grid>
        <Grid item xs={7} style={{ border: "2px solid blue" }}>
          {props.CommunityName}
        </Grid>
      </Grid>
    </div>
  );
}

export default CommunitiesListItem;
