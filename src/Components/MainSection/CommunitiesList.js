import CommunitiesListItem from "./CommunitiesListItem";
import Image from "../../images/gaming.jpg";

function CommunitiesList() {
  return (
    <div className="CommunitiesList">
      <CommunitiesListItem
        Rank={1}
        Image={Image}
        CommunityName={"Warzone"}
      ></CommunitiesListItem>
      <CommunitiesListItem
        Rank={2}
        Image={Image}
        CommunityName={"Assassins Creed Valhalla"}
      ></CommunitiesListItem>
      <CommunitiesListItem
        Rank={3}
        Image={Image}
        CommunityName={"Fifa 21"}
      ></CommunitiesListItem>
      <CommunitiesListItem
        Rank={4}
        Image={Image}
        CommunityName={"Halo"}
      ></CommunitiesListItem>
      <CommunitiesListItem
        Rank={5}
        Image={Image}
        CommunityName={"Escape from Tarkov"}
      ></CommunitiesListItem>
    </div>
  );
}

export default CommunitiesList;
