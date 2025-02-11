import React from 'react'
import { useState } from 'react';
import useFetch from './components/useFetch';

function App() {

  const[data,setData] = useFetch(`https://randomuser.me/api/?inc=name`)



  return (
   <> 
   <h1>
      the name of bro is :{" "}
      {data ? `${data.name.title} ${data.name.first} ${data.name.last}` : "Loadings.."}
   </h1>
   
   
   </>
  )
}

export default App