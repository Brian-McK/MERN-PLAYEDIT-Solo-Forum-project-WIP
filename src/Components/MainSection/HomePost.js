import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PostVote from "./PostVote";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  customWidthContainer: {
    minHeight: "inherit",
  },
  customGridItemIcons: {
    border: "2px solid green",
    minHeight: "inherit",
  },
  postPreviewImage: {
    minHeight: "120px",
    maxHeight: "120px",
  },
  media: {
    height: "120px",
  },
}));

function HomePost(props) {
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
          container
          direction="row"
          alignItems="center"
          className={classes.customGridItemIcons}
          xs={7}
          sm={6}
          md={7}
          lg={7}
        >
          <Grid item xs={12}>
            Main section 1
          </Grid>
          <Grid item xs={12}>
            Main Section 2
          </Grid>
          <Grid item xs={12}>
            Main section 3
          </Grid>
          <Grid item xs={12}>
            Main section 4
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignContent={"center"}
          className={classes.customGridItemIcons}
          xs={3}
          sm={4}
          md={3}
          lg={4}
        >
          <Grid item xs={12} className={classes.postPreviewImage}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={props.Image}
                  title={props.Title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePost;
