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
      <strong>promouvoir l’accompagnement, l’apprentissage, l’accès et l’appropriation du numérique à destination du grand public</strong>
      {' '}
        avec pas ou peu de connaissance de ce vaste univers. La Sauce Numérique est une association régie par la loi du 1er juillet 1901. Ses membres sont issus du numérique et d’autres horizons, formant un groupe riche et éclectique dont l’objectif est d’organiser des actions les plus accessibles et adaptées possibles aux problèmes liées au numérique.
    </p>
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

            .support-text {
              font-size: 2rem;
              margin: auto;
              padding: 3rem;
              width: 86vw;
              text-align: justify;
              color: #1F2040;
            }

            hr.blue-break {
              width: 3rem;
              height: 4px;
              background-color: #1f2040;
              border-style: none;
              border-radius: 2px;
              margin: auto;
            }
        `}
    </style>
  </div>
);

export default Support;
