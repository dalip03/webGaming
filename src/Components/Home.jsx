import * as React from 'react';
import Header from './Header';
import Hero from './Hero';
import Category from './Category';

function Home() {   
    return (    
   <div >
    {/* Header section */}
    <Header/>
    {/* Hero section */}
    <div>
    <Hero/>  
    </div>
    {/* category  */}
    <Category/>
   </div>
      );
}

export default Home
