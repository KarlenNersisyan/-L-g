import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function AddCircle(props) {
  return (
    <AddCircleIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </AddCircleIcon>
  );
}

export default AddCircle;
