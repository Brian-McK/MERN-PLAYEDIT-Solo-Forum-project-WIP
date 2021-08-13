import Grid from "@material-ui/core/Grid";
import TrendingPostCard from "./TrendingPostCard";
import Image from "../../images/gaming.jpg";
import Image2 from "../../images/ps4.png";

function TrendingPosts() {
  return (
    <div className="TrendingPosts">
      <h3>Trending Posts</h3>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={3}>
          <TrendingPostCard
            Image={Image}
            Title={"Some image title"}
            HeadingText={"Heading"}
            BodyText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ></TrendingPostCard>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <TrendingPostCard
            Image={Image2}
            Title={"Some image title"}
            HeadingText={"Heading"}
            BodyText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ></TrendingPostCard>{" "}
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <TrendingPostCard
            Image={Image}
            Title={"Some image title"}
            HeadingText={"Heading"}
            BodyText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ></TrendingPostCard>{" "}
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <TrendingPostCard
            Image={Image2}
            Title={"Some image title"}
            HeadingText={"Heading"}
            BodyText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ></TrendingPostCard>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default TrendingPosts;
