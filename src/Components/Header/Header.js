import NavBar from "../NavBar/NavBar";

function Header(props) {
  return (
    <div className="Header">
      <h1>{props.MainText}</h1>
      <NavBar></NavBar>
    </div>
  );
}

export default Header;
