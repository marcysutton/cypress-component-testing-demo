import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css'
import AccordionGroup from "./components/Accordions"

const App = ({ children }) => {
  return (
    <>
      <header>
        <h1>Cypress Component Testing</h1>
      </header>
      <main>
        <AccordionGroup accordions={[{
            heading:"You won't believe these cuts",
            Contents:(
              <>
                <p>
                  We believe in better—better sounds for humans, better
                  conditions for artists, and, most of all, better music for
                  all. That’s why you can count on us to deliver high-quality cuts
                  that are humanely created, with no sleeze or added autotune
                  ever.a
                </p>
                <p>We’re proud to offer:</p>
                <ul>
                  <li>100% independent music</li>
                  <li>Free-thinking ideas</li>
                  <li>Ethical undercurrents</li>
                  <li>Beats, rhymes, and life</li>
                </ul>  
              </>
            )
          }]} 
        />
      </main>
      <footer></footer>
    </>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);