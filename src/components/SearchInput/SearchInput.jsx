import React from 'react'

const SearchInput = (props) => {
    const {value, handleInput, handleClick} = props;
      return (
        <div className="input-group">
          <input onChange={handleInput} value={value} type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button onClick={handleClick} className="btn btn-secondary" type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      );
  }

  export default SearchInput;