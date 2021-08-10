import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchBar() {
  return (
    <form className="SearchBar" noValidate autoComplete="off">
      <TextField id="standard-search" label="Search field" type="search" />
    </form>
  );
}

export default SearchBar;
