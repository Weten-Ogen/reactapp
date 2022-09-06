import React from "react";

class Header extends React.Component{
  render(){
    return(
      <div className="header" variant="container-fluid">
        <div variant="fa fa-more" className="fa fa-more"></div>

        <span className="title">{this.props.title}</span>

        <input 
        type="text"
        variant="search" />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header;