import React, { Component } from 'react';
class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='top-part'>
                
                <div className='inner'>
                    <div className='info'>
                      <h3>Here I'm </h3>
                      <h4>A WebDeveloper</h4>
                      
                      <br/>
                      <p>
                          I build small scale web application for your business
                      </p>

                      <p></p>
                       <span className='press'>
                           <button className='btn btn-info m-4'> view portfolio</button>
                           <button className='btn btn-warning m-4'>Hire me</button>
                       </span>
                    </div>
                    <div className='img-part'>
                     <img src="https://www.flaticon.com/svg/static/icons/svg/1688/1688400.svg" alt=""/>
                    </div>
                </div>

            </section>

          );
    }
}
 
export default Info;