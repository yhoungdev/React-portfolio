//import React from 'react';
import React, { Component } from 'react';
class Top extends Component {
    //state = {  }
    render() { 
        return ( <header className="">
          <span>
              <h5>OBIABO</h5>
          </span>
          <nav>
            <ul>
              <a href="#"><li>Home</li></a>
              
              <a href="#hello"><li>portfolio</li></a>
              <a href="#"><li>contact</li></a>
            </ul>
          </nav>
        </header> );
    }
}
 
export default Top;