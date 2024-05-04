import React from 'react';
import { Navigate } from 'react-router-dom';

function Decide() {


  return (
    <div>
      <button onClick={() => {
        Navigate('/admin/login');
        alert("hii");
      }}>
        Admin
      </button>
      <button>
        User
      </button>
    </div>
  );
}

export default Decide;
