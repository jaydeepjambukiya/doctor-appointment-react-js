import React from 'react'
import { useParams } from 'react-router-dom';

const Singlepagecomponent = () => {
    const x=useParams();
    console.log(x.id);
  return (
    <div>Singlepagecomponent {x.id}</div>
  )
}

export default Singlepagecomponent