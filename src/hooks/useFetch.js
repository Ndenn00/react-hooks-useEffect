import {useEffect, useState} from 'react';

export const useFetch = (url) => {
  // using both useState and useEffect within our custom hook
  // useState stores an object with some data and a flag, 
  // useEffect is called on mont, and each time url is changed

  const [state, setState] = useState({date: null, loading: true});

  useEffect(()=>{
    setState(state => ({data: state.data, loading: true})); 

    fetch(url)
    .then(x => x.text())
    .then(y => {
      setState({data: y, loading: false})
    })

  }, [url, setState]); 
  // using dependencies of setState as well as the url here
  // setState will remount this hook if the setState function is called
  // works on consts as well as functions

  return state;    
};  