import React, { Component } from 'react';
class About extends Component {
    state = { 
        pad:30
     }
    render() { 
        return ( 
            <section className='about'>
                <div className='container'>
                    <div className='img'>
                      <img src="https://theme.zdassets.com/theme_assets/685090/6d91b2ab1034206a8c0a743281fa2a31a3cce222.svg" alt="" width='400px'/>
                    </div>
                    <div className='my-info'>
                        <h2 style={{fontWeight:'bold',color:'teal'}}>ABOUT</h2>
                        <p>
                            I am <b>Obiabo Immanuel</b> <br/>
                             a Nigeria based front end developer from Benue State but currently lives in ogun state <br/>
                            create web application has always been my priority i create website for both individuals and companies
                            
                        </p>
                    </div>
                </div>
                <br/><br/><br/>
                <div className='skill' style={{paddingTop:90+'px'}}>
                    <center>
                        <h4 style={{fontWeight:'bold',color:'teal'}}>SKILL</h4> 
                       <div className='icons'>
                          <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/sass.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/react.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/vue.svg" alt="" width='130px' className='m-3'/>
                          <img src="https://cdn.svgporn.com/logos/git.svg" alt="" width='130px'/>
                       </div>
                    </center>
                </div>
            </section>
         );
    }
}
 
export default About;