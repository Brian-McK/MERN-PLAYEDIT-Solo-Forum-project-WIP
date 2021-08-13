import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    media: {
      height: 150,
    },
    root: {
        justifyContent: 'center'
    }
  });

function TrendingPostCard(props) {
    const classes = useStyles();

  return (
    <Card>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={props.Image}
        title={props.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.HeadingText}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.BodyText}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions classes={{root: classes.root}}>
      <Button size="small" color="primary">
        View Post
      </Button>
    </CardActions>
  </Card>
  );
}

export default TrendingPostCard;