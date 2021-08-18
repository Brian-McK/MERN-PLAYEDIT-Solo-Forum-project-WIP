import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import SortingIcons from "./SortingIcons";
import HomePosts from "./HomePosts";

function MainSection() {
  return (
    <div className="HomeMain">
      My Main Section
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <SortingIcons></SortingIcons>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7}>
          <HomePosts></HomePosts>
        </Grid>

        <Hidden xsDown>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            top communities
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default MainSection;
