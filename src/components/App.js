// Here we import functinality from react for lazy Load.
import React,{Suspense,lazy} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import { Loader, Navbar } from './';

const Navbar2 = lazy(() => import('./Navbar2'))

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />


        {/* // Now we use lazy load functinality on Nvabar2 react Module.  */}
        {/* Here we use Suspense Tag and fallback for apply lazy load. */}


      <h1>Right search bar component we want to lazy load.So we add in lazy load in right search - </h1>
        <Suspense fallback={<div> please wait...!</div>}>
        < Navbar2 />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
