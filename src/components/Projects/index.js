import React from 'react';
import photo from '../../assets/images/h-landingpage.jpg';



function Projects() {
  

    return (
     <div className='flex-row space-between'>
       <div>
       <h2> <a href='https://github.com/brycelarkin13/horiseon'>Horiseon</a> </h2>
       <p>Application that showcases HTML and CSS skills</p>
       <img
       src={photo}
       height='400'
       width='500'
       alt='landing page'
        />
       </div>
       <div>
         <h2>Budget Tracker</h2>
       </div>
       <div>
         <h2>ReadMe Generator</h2>
       </div>
     </div>
    )
};

export default Projects;