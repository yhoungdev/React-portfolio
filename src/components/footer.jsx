import React, { Component } from 'react';
class Foot extends Component {
    state = {  }
    render() { 
        return (
            <section className='container-fluid' >
              <div className='container'>
                <span style={{marginLeft:22+'em'}}>
                    <a href="https://twitter.com/obiabo_immanuel">
                    <img src="https://cdn.svgporn.com/logos/twitter.svg" alt="" width='50px' className='m-4'/> 
                    </a>
                    <a href="https://github.com/yhoungdev">
                        <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="" width='50px'   className='m-4'/>
                    </a>
                    <a href="https://web.facebook.com/yhoung.dev/">
                     <img src="https://cdn.svgporn.com/logos/facebook.svg" alt="" width='50px'   className='m-4'/>
                    </a>
                    <a href="tel:08134044405">
                    <img src="https://cdn.svgporn.com/logos/whatsapp.svg" alt="" width='50px'  className='m-4'/>
                    </a>

                
                </span>
              </div>
            </section>
          );
    }
}
 
export default Foot;