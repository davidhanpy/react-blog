import React from 'react';
import InfoDetail from './InfoDetail';
import InfoForm from './InfoForm';

const Info = ({match}) => {
  const id = match.params.id;
  if ( id ) {
    return (
      <div>
        <h1>Blog Title</h1>
        <InfoDetail id={id}/>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Blog Title</h1>
        <InfoForm />
      </div>
    )
  }
  
}

export default Info;
