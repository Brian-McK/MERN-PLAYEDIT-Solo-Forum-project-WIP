import Grid from "@material-ui/core/Grid";

function TrendingPosts() {
  return (
    <div className="TrendingPosts">
      <h4>Trending Posts</h4>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={3}>
          1
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          2
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          3
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          4
        </Grid>
      </Grid>
    </div>
  );
}

export default TrendingPosts;
