import TextField from "@material-ui/core/TextField";

function SearchBar(props) {
  return (
    <form className="SearchBar" noValidate autoComplete="off">
      <TextField
        fullWidth={props.fullWidth}
        variant={props.variant}
        label={props.label}
        id="standard-search"
        type="search"
      />
    </form>
  );
}

export default SearchBar;
