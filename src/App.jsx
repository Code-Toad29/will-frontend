import React from 'react'
import Hero  from  './components/Hero';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
 

function App() {
return( <div className='overflow-x-hidden'>
      <div>
      <Navbar/>
      <Hero/>
      </div>
      <Companies/>
      </div>);

        
  


  
    
};
export default App;



