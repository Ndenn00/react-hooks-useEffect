import React, {useEffect} from 'react';

const EventListeners = () => {

  // useEffect is a good place for event listeners, use this pattern 
  useEffect(()=>{
    const onMouseMove = e => {
      // logic here
      console.log(e);
    };
    
    // add listener
    window.addEventListener('mousemove', onMouseMove);

    // clean up against any dependencies
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }

  },[]);

  return (
    <div>
      Listening    
    </div>
  );
};

export default EventListeners;