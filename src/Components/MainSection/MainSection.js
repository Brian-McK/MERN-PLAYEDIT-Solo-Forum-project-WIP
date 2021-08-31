import Grid from "@material-ui/core/Grid";
import SortingIcons from "./SortingIcons";
import HomePosts from "./HomePosts";
import HomeTopCommunities from "./HomeTopCommunities";

function MainSection() {
  return (
    <div className="HomeMain">
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

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <HomeTopCommunities></HomeTopCommunities>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainSection;
