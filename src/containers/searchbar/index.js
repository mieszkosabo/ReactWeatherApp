import React from 'react';

export const Searchbar = () => {

  return (
    <form className="searchbar">
      <input
        placeholder="ayo lets go"
        className="input-class"
        />
      <span className="submit-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
  )
}