import React, { useState, useEffect } from 'react';
import './Pop-Up.css'
const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set a timer to show the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
          <div className='popimg'>
              <img src="img55.jpeg"  className='popimg1'/>
            <button onClick={handleClosePopup} className='closepopp'>Close</button>
          
        </div>
      )}
    </div>
  );
};

export default Popup;