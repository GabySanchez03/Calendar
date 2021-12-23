import React from 'react';
import useScript from 'Scripts/useScript';

const Tablething = () => {
    return (
        <div>
            <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Project 1</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Project Info</a>
    <a href="#about">Employees in project</a>
  </div>
</div>

<div class="dropdown2">
  <button onclick="myFunction2()" class="dropbtn2">Project 2</button>
  <div id="myDropdown2" class="dropdown2-content">
    <a href="#home">Project Info</a>
    <a href="#about">Employees in project</a>
  </div>
</div>

  <div class="dropdown3">
    <button onclick="myFunction3()" class="dropbtn3">Project 3</button>
    <div id="myDropdown3" class="dropdown3-content">
      <a href="#home">Project Info</a>
      <a href="#about">Employees in project</a>
    </div>
  </div>

    <div class="dropdown4">
      <button onclick="myFunction4()" class="dropbtn4">Project 4</button>
      <div id="myDropdown4" class="dropdown4-content">
        <a href="#home">Project Info</a>
        <a href="#about">Employees in project</a>
      </div>
    </div>
            
        </div>
    )
}

export default Tablething
//rafce shortcut