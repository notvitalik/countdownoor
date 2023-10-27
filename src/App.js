// import React from 'react';
// import EventSection from './components/EventSection';
// import ResourcesList from './components/ResourcesList';
// import MemeWindow from './components/MemeWindow';
// import btcLogo from './images/orangee-btc.jpg';

// function App() {
//   // Mockup of the Bitcoin halving date. You will replace this with a date fetched from an API.
//   //const mockBitcoinHalvingDate = new Date('2024-12-15T12:00:00');
//   // cz saylor gary larry barmstrong keiser ivan

//   return (

//     <div className="marquee-container">
     
//       <div className="btc-marquee">
//        wowwowwow
//         <img src={btcLogo} alt="BTC Logo" className="btc-logo" />
//       </div>
//       <EventSection />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import EventSection from './components/EventSection';
import ResourcesList from './components/ResourcesList';
import MemeWindow from './components/MemeWindow';
import btcLogo from './images/orangee-btc.jpg';

function App() {
  return (
    <div className="app-container">
     

      <div className="marquee-container">
       <h1 class="countdown-header">The Final Countdown</h1>
        <div className="btc-marquee">
          wowwowwow
          <img src={btcLogo} alt="BTC Logo" className="btc-logo" />
        </div>
        <div className="flipped-image">
          wowwowwow
          <img src={btcLogo} alt="BTC Logo2" className="btc-logo" />
        </div>
      </div>

      <div class="parent-container">
        <div class="resources">
          <ResourcesList />
        </div>
        <div class="countdown-events">
        <EventSection />
        </div>
        <div class="video">
        <MemeWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
