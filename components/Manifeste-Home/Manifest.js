const Manifest = () => (
  <div className="manifeste-container">
    <h1 className="manifeste-title">
        Manifeste
    </h1>
    <hr className="blue-break" />
    <p className="manifeste-text">
        Le numérique est aujourd’hui omniprésent dans nos vies, il impact fortement nos modes
      {' '}
        de vies, nos sociétés, nos politiques, nos relations sociales professionnelles ou privées.
      {' '}
        Pour autant, il ne profite pas à tous, nombreux sont celles et ceux qui le comprennent
      {' '}
        mal ou bien pire, en sont exclus !
      <br />
      <br />
        La Sauce Numérique souhaite par ses actions sur le terrain
      {' '}
      <strong>
        promouvoir l’accompagnement, l’apprentissage, l’accès et l’appropriation du
        {' '}
        numérique à destination du grand public

      </strong>
      {' '}
        avec pas ou peu de connaissance de ce vaste univers. La Sauce Numérique
      {' '}
        est une association régie par la loi du 1er juillet 1901.
      {' '}
        Ses membres sont issus du numérique et d’autres horizons,
      {' '}
        formant un groupe riche et éclectique dont l’objectif
      {' '}
       est d’organiser des actions les plus accessibles et adaptées possibles
      {' '}
       aux problèmes liées au numérique.
    </p>
    <div className="faq-container">
      <p className="faq-text">
        Des questions ? Consultez notre
        {' '}
        <a className="faq-link" href="/faq">
          Foire Aux Questions
        </a>
      </p>
    </div>
    <style jsx>
      {`
        .manifeste-container {
          margin-top: 4rem;
          margin-bottom: 3rem;
        }

        .manifeste-link {
          text-decoration: none;
        }

        .manifeste-title {
          margin: auto;
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

        .manifeste-text {
          font-size: 2em;
          margin: auto;
          padding: 3rem;
          color: #1F2040;
          text-align: justify;
        }

        .faq-text{
          font-size: 2rem;
          font-weight: 700;
          margin: auto;
          text-align: center;
          padding: 0 3rem 3rem 3rem;
        }

        .faq-link {
          color: #1F2040;
        }

        @media screen and (min-width: 768px) {
          .manifeste-text{
            padding: 5rem 15rem 5rem 15rem;
          }
        }
      `}
    </style>
  </div>
);

export default Manifest;
