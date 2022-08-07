import React from "react";
import './App.css';

import Snackbar from "./component/Snackbar";
import Fixleft from "./component/Fixleft";

function App() {
  return (
    <div className="overall">
       <p>Sticky Element: Scroll Down to See the Effect</p>
       <div className="sticky">
          I will stick to the screen when you reach my scroll position
       </div>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ul
       </p>
       <Snackbar />
       <Fixleft />
    </div>
  );
}

export default App;
