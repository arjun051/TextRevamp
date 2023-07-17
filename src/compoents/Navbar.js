import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <a class="navbar-brand" href="#">{props.heading}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">{props.c1} <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{props.c2}</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.dropdown}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Actions</a>
          <a class="dropdown-item" href="#">Instructions</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Live support</a>
        </div>
      </li>
      <div class="custom-control custom-switch my-2 ">
  <input type="checkbox" class="custom-control-input " id="customSwitch1" onClick={props.togglemode}/>
  <label class={`custom-control-label text-${props.mode == 'light' ? 'dark' : 'light'} `} for="customSwitch1">Dark Mode</label>
</div>
     


     
    </ul>
 
  </div>

</nav>
    </div>
  )
}
