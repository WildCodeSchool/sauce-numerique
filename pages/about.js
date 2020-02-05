import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../components/Layout';
import Support from '../components/Support';
import Partners from '../components/partners/Partners';
import API_URL from '../api.config';

const AboutUs = ({ partners, props }) => (
  <div>
    <Layout>
      <div className="aboutus-presentation">
        <h1 className="title2">À propos</h1>
        <hr className="blue-break" />
        <article>
          <p className="aboutus-text">
            Le numérique est aujourd'hui omniprésent dans nos vies, il impacte
            fortement nos modes de vies, nos sociétés, nos politiques, nos
            relations sociales professionnelles ou privées. Pour autant, il ne
            profite pas à tous, nombreux sont celles et ceux qui le comprennent
            mal ou bien pire, en sont exclus ! La Sauce Numérique souhaite par
            ses actions sur le terrain
            &nbsp;
            {' '}
            <strong>
            promouvoir l'accompagnement, l'apprentissage, l'accès et
            l'appropriation du numérique à destination du grand public
            &nbsp;
              {' '}
            </strong>
            avec pas ou peu de connaissance de ce vaste univers. La Sauce
            Numérique est une association régie par la loi du 1 juillet 1901.
            Ses membres sont issus du numérique et d’autres horizons, formant un
            groupe riche et éclectique dont l’objectif est d’organiser des
            actions les plus accessibles et adaptées possibles aux problèmes
            liées au numérique. Le numérique est aujourd’hui omniprésent dans
            nos vies, il impacte fortement nos modes de vies, nos sociétés, nos
            politiques, nos relations sociales professionnelles ou privées. Pour
            autant, il profite pas à tous, nombreux sont celles ou ceux qui le
            comprennent mal ou bien pire, en sont exclus !
          </p>
        </article>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://imgur.com/IKjRF10.jpg" alt="aboutus-pis" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Marine Brondin-Bernard
            </h2>
            <h3 className="aboutus-member-role">
              Présidente et Co-fondatrice
            </h3>
            <p className="aboutus-member-description">
              Ancienne
              { ' ' }
              <strong>
                déléguée médicale
              </strong>
              { ' ' }
              dans l’optique et
              { ' ' }
              <strong>
                spécialiste de la lumière bleue
              </strong>
              , Marina s’est spécialisée dans
              { ' ' }
              <strong>
                l’effet des écrans sur notre santé
              </strong>
              { ' ' }
              avant de se passionner pour
              { ' ' }
              <strong>
                la pédagogie et la transmission de connaissances.
              </strong>
            </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://imgur.com/fYNVuHt.jpg" alt="aboutus-pics" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Manyssin Thin
            </h2>
            <h3 className="aboutus-member-role">
              Co-fondateur
            </h3>
            <p className="aboutus-member-description">
              <strong>
                Serial entrepreneur
              </strong>
              { ' ' }
              et
              { ' ' }
              <strong>
                spécialiste en expérience utilisateur
              </strong>
              ,
              Manyssin est passionné par
              { ' ' }
              <strong>
                l’être humain et son rapport aux autres,
                dans le monde réel et numérique
              </strong>
            </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://imgur.com/PY2NT9I.jpg" alt="aboutus-pic" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Nicolas Brondin-Bernard
            </h2>
            <h3 className="aboutus-member-role">
              Co-fondateur et trésorier
            </h3>
            <p className="aboutus-member-description">
              <strong>
                Ingénieur web indépendant
              </strong>
              { ' ' }
              et auteur du livre
              { ' ' }
              <strong>
                “Fortnite-a-t’il transformé nos enfants en zombies”,
              </strong>
              { ' ' }
              Nicolas est passionné par
              { ' ' }
              <strong>
                la compréhension des biais psychologiques exploités
                par les outils numérique
              </strong>
              { ' ' }
              dans notre quotidien.
            </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://imgur.com/WAWAWRi.jpg" alt="aboutus-pic" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Victor Delaleu
            </h2>
            <h3 className="aboutus-member-role">
              Co-fondateur
            </h3>
            <p className="aboutus-member-description">
              <strong>
              Vidéaste indépendant
              </strong>
              { ' ' }
            et
              { ' ' }
              <strong>
              passionné
              par la vulgarisation de
              l’espace et des sciences
              </strong>
              { ' ' }
            en général.
            </p>
          </div>
        </div>
      </div>
      <Partners partners={partners} />
      <Support />
    </Layout>
    <style jsx>
      {`   
          .title2 {
            margin: 8rem auto;
            text-align: center;
            font-size: 6em;
            margin-bottom: 10px;
            font-weight: bold;
            color: #1f2040;
            text-shadow: 0 1px 2px rgba(black, 0.15);
          }
  
          hr.blue-break {
            width: 3rem;
            height: 4px;
            background-color: #1f2040;
            border-style: none;
            border-radius: 2px;
            margin: auto;
          }
  
          p.aboutus-text {
            font-size: 2rem;
            margin: auto;
            padding: 3rem;
            width: 86vw;
            text-align: justify;
            color: #1f2040;
          }
  
          .aboutus-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;        
            width: 100%;
            margin-bottom: 5rem;
          }
  
          .aboutus-member {
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 1rem;
          }
  
          .aboutus-member-text {
            text-align: justify;
            margin: 2rem;
            font-size: 1.7rem;
            max-width: 30rem;
            margin: 0 2rem 0 2rem;
          }

          .aboutus-pic {
            border-radius: 50%;
            float: left;
            margin: 0 0 0 2rem;
            max-width: 40%;
            
          }
  
          .aboutus-member-name {
            font-size: 2.5rem;
          }

          .aboutus-member-role {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

        @media screen and (min-width: 1023px) {
          .aboutus-member {
            padding: 3rem;
            width: 50%;
            display:flex;
          }

          .aboutus-pic {
            max-width: 60%;
            margin: auto;
          } 
        }
        `}
    </style>
  </div>
);

AboutUs.getInitialProps = async () => {
  const partnersRes = await fetch(
    `${API_URL}/api/v1/partners`,
  );
  const partnersData = await partnersRes.json();

  return {
    partners: partnersData,
  };
};

export default AboutUs;
