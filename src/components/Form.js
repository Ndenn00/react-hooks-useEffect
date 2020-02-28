import React, {useEffect} from 'react';
import {useForm} from '../hooks/useForm';

const Form = () => {

  const [values, handleChange] = useForm({
    email: '', 
    password: '',
    firstName: '',
  }); 

  // without cleanup, pass in a dependency array with the state that the effect depends on
  // always calls on the initial render

  useEffect(()=>{
    console.log('console logs when email is rerendered'); 
  }, [values.email]); 

  // with cleanup, you can add some unmounting
  useEffect(()=>{
    console.log('console logs only on mount'); 
    return () => {
      // rather than just unmounting, you can clean up, or do anything on a specific change of state
      console.log('unmounting at this clean up function'); 
    };
  }, [values.password]); 
  


  return (
    <div style={{display: 'grid', padding: '20px'}}>
      Basic Form
      <br/>
      <br/>

      <input 
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      
    </div>
  );
};

export default Form;