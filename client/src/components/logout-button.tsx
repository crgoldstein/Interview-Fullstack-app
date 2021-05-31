import React from 'react';
import { Button } from '@material-ui/core';

type Props ={
     onClick: () => void
}

const LogoutButton = (props: Props) => {

  return (
    <Button
      variant="outlined" 
      color="primary"
      data-testid="logout-button"
      onClick={() => {
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        props.onClick()
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;


