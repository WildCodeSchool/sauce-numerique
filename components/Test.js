import { withRouter } from 'next/router';
import React from 'react';

function Page({ router }) {
  return (
    <div className="test">
  <p>
    {router.pathname}
  </p>
  <p>
    <isHome />
  </p>
  <style jsx>{`
    p {
      font-size: 500%;
    }
  `}
  </style>
  </div>  
)
}

export default withRouter(Page);