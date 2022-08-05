import React,{useState, useEffect} from "react";
import "./Top.css";

const Top = () => {
     const [showButton, setShowButton] = useState(false);
     useEffect(() => {
         window.addEventListener("scroll", () => {
         if (window.pageYOffset > 200) {
             setShowButton(true);
         } else {
             setShowButton(false);
         }
       });
     }, []);

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
       return ( 
           <>
            {showButton &&
                <button className="top__button" onClick={scrollToTop}>Top</button>
            }
           </>

          
        );
}
 
export default Top;