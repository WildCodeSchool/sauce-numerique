import React from 'react';

const PageFooter = () => (
  <div>
    <h5 className="footer-title">
      <a href="/legalnotice">
        Mention légales
      </a>
      {' '}
      - Sauce Numérique Tous droits réservés
      {' '}
      - Crédits :
      {' '}
      <a href="https://www.wildcodeschool.com/fr-FR" target="_blank">
        Wild Code School
      </a>
      {' '}
      -
      {' '}
      <a href="https://www.linkedin.com/in/alex-le-coq-a7b695101/" target="_blank">
        Alex' LE COQ
      </a>
      {' '}
      -
      {' '}
      <a href="https://www.linkedin.com/in/stanislas-vega-807b89163/" target="_blank">
        Stan VEGA
      </a>
      {' '}
      -
      {' '}
      <a href="https://www.linkedin.com/in/bruno-hoarau-dev-full-stack-javascript-893066137/" target="_blank">
        Bruno HOARAU
      </a>
      {' '}
      -
      {' '}
      <a href="https://www.linkedin.com/in/jean-marmain-2967a5168/" target="_blank">
        Jean MARMAIN
      </a>
    </h5>
      <style jsx>
        {`
          a, .footer-title { 
                color: #e5e3e8;
                text-align: center;
                background: #1F2040;
                padding-top: 13%;
          }
        `}
      </style>
  </div>
);

export default PageFooter;
