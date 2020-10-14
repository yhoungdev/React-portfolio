import React, { Component } from 'react';
class Project extends Component {
    state = { 
        padding:55
     }

   
    render() { 
        return ( 
            <section style={this.state}>
                <div className="container-fluid" id='hello'>
                    <center>
                        <h2 style={{fontWeight:'bold',color:'teal'}}>PROJECTS</h2>
                    </center>
                   <div className='container col-mob'>
                       <div className='m-5 '>
                           <a href=" https://yhoungdev.github.io/covid-19-tracker/">
                           <span>
                           <img src="https://media.flaticon.com/dist/min/img/landing/coronavirus/mask.svg" width='120px'/>
                           </span>
                           </a>
                           <p>covid-19 Tracker</p>
                       </div>

                       <div className='m-5'>
                           <a href="">
                           <span>
                           <img src="https://t3.ftcdn.net/jpg/01/39/23/88/240_F_139238876_zvD7E0pyJxXoQTNDGhW4nnbMj4haElf3.jpg" width='120px'/>
                           </span>
                           </a>
                           <p>EASY CAM</p>
                       </div>

                       <div className='m-5'>
                           <a href=" https://obis-bot.netlify.app/">
                           <span>
                           <img src="https://media.flaticon.com/dist/min/img/landing/coronavirus/mask.svg" width='120px'/>
                           </span>
                           </a>
                           <p>OBIS-BOT</p>
                          
                       </div>

                       <div className='m-5'>
                       <a href="www.maildevo.com">
                       <span>
                           <img src="https://t4.ftcdn.net/jpg/01/77/26/91/240_F_177269163_ablAAuRkC9ZKJvamjEeTcOH4NrIoz2HQ.jpg" width='120px'/>
                           </span>
                       </a>
                           <p>easy note</p>
                           
                       </div>

                </div>
                   </div>
                   <hr/>
                   
            </section>
         );
    }
}
 
export default Project;