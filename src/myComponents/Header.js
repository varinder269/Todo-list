import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"  // replace hreg by to in using react and a (anchor tag) by Link

export default function header(props) {  // or {title}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>  {/* or  {title}*/}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">about</Link>
          </li>
      
        </ul>

        {props.searchbar? <form className="d-flex">
          <input className="form-control me-2 border border-dark" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success border border-dark" type="submit">Search</button>
        </form>: "no search baar"} 
        {/* if prop.searchbar is true then it will show otherwise else mei no search bar ayega */}

      </div>
    </div>
  </nav>
    )
}


// props are used to use this header in other files too just some paramters we need 

header.defaultProps = {
    title: "yout title here",
    searchbar: false
}

header.propTypes = {
    title: PropTypes.string,  // this will give error in our backend in js if we enter naytihng else then string
    searchbar: PropTypes.bool,  // this will give error in our backend in js if we enter naytihng else then bool
    //searchbar: PropTypes.isrequired  // this wil ensure there will a value for search baar from default or paas from app.js otherwise error
}