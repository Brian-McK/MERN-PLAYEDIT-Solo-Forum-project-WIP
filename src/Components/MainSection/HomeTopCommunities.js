import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Image2 from "../../images/ps4.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    width: "90%",
  },
  media: {
    height: "100px",
  },
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "fit-content",
    padding: "5px",
    color: "black",
    fontWeight: "bolder",
    backgroundColor: "white",
    borderRadius: "20px",
  },
}));

function HomeTopCommunities() {
  const classes = useStyles();
  return (
    <div className="HomeTopCommunities">
      <Grid container className={classes.customWidthContainer} direction="row">
        <Grid item xs={12} style={{ border: "2px solid red" }}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              className={classes.media}
              image={Image2}
            />
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              className={classes.font}
            >
              Top Communities
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} style={{ border: "2px solid red" }}>
          List
        </Grid>

        <Grid item xs={12} style={{ border: "2px solid red" }}>
          Button View All
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeTopCommunities;
