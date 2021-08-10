import NavBar from "../NavBar/NavBar";
import TrendingPosts from "../TrendingPosts/TrendingPosts";

function Header() {
  return (
    <div className="Header">
      <NavBar></NavBar>
      <TrendingPosts></TrendingPosts>
    </div>
  );
}

export default Header;
