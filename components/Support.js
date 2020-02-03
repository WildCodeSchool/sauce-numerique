import React from 'react';

const Support = () => (
  <div>
    <h5 className="support-title">
            Apportez votre soutien
    </h5>
    <hr className="blue-break" />
    <p className="support-text">
            La Sauce Numérique souhaite par ses actions sur le terrain
      {' '}
      <strong>
      promouvoir l’accompagnement, l’apprentissage, l’accès et l’appropriation du numérique à
        {' '}
      destination du grand public

      </strong>
      {' '}
      avec pas ou peu de connaissance de ce vaste univers. La Sauce Numérique est
      {' '}
      une association régie par la loi du 1er juillet 1901. Ses membres sont issus du numérique
      {' '}
      et d’autres horizons, formant un groupe riche et éclectique dont l’objectif est d’organiser
      {' '}
      les plus accessibles et adaptées possibles aux problèmes liées au numérique.
    </p>
    <a href="https://www.helloasso.com/associations/la-sauce-numerique" target="_blank" className="don">Faire un don</a>


    <style jsx>
      {`
            .support-title {
              margin: 8rem auto;
              text-align: center;
              font-size: 6em;
              margin-bottom: 10px;
              font-weight: bold;
              color: #1F2040;
              text-shadow: 0 1px 2px rgba(black,.15);
            }

            hr.blue-break {
              width: 3rem;
              height: 4px;
              background-color: #1f2040;
              border-style: none;
              border-radius: 2px;
              margin: auto;
            }

            .support-text {
              font-size: 2rem;
              margin: auto;
              padding: 3rem;
              width: 86vw;
              text-align: justify;
              color: #1F2040;
            }

            .don {
              display: flex;
              margin: auto;
              justify-content: center;
              background-color: #1F2040;
              color: #e5e3e8;
              border-color: #1F2040;
              border-radius: 5px;
              width: 130px;
              padding: 3px;
              font-weight: 800;
              text-decoration: none;
            }

            
        `}
    </style>
  </div>
);

export default Support;
