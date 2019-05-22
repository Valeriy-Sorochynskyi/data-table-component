import React from "react";

const SearchInput = props => {
  const { value, handleInput } = props;
  return (
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input
        onChange={handleInput}
        value={value}
        type="text"
        className="form-control"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;