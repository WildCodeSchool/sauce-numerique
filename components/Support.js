import React from 'react';

const Support = () => (
  <div>
    <h5 className="soutien-title">
            Apportez votre soutien
    </h5>
    <hr className="hr-soutien" />
    <p className="p-soutien">
            La Sauce Numérique souhaite par ses actions sur le terrain
      {' '}
      <strong>promouvoir l’accompagnement, l’apprentissage, l’accès et l’appropriation du numérique à destination du grand public</strong>
      {' '}
        avec pas ou peu de connaissance de ce vaste univers. La Sauce Numérique est une association régie par la loi du 1er juillet 1901. Ses membres sont issus du numérique et d’autres horizons, formant un groupe riche et éclectique dont l’objectif est d’organiser des actions les plus accessibles et adaptées possibles aux problèmes liées au numérique.
    </p>
    <style jsx>
      {`
            .soutien-title {
                margin-top: 12%;
                text-align: center;
                font-size: 6em;
                margin-bottom: 10px;
                font-family: 'Dosis',sans-serif;
                color: #1F2040;
                text-shadow: 0 1px 2px rgba(black,.15);
            }
            .p-soutien {
                font-size: 2rem;
                margin-left: 3.5rem;
                margin-right: 5rem;
                padding: 3rem;
                width: 86vw;
                text-align: center;
                color: #1F2040;
            }
            .hr-soutien {
                width: 3vw;
                height: 1vh;
                background-color: #1F2040;
                margin: auto;
                margin-top: 2vh;
                margin-bottom: 1vh;
            }
        `}
    </style>
  </div>
);

export default Support;
