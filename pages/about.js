import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Support from "../components/Support";
import Partners from "../components/partners/Partners";

const AboutUs = ({ partners }) => (
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
            &nbsp; <strong>
            promouvoir l'accompagnement, l'apprentissage, l'accès et
            l'appropriation du numérique à destination du grand public
            &nbsp; </strong>
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
          <img className="aboutus-pic" src="https://via.placeholder.com/150" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Luke Skywalker
            </h2>
            <h3 className="aboutus-member-role">
              Jedi Master
            </h3>
            <p className="aboutus-member-description">
              La Sauce Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
              </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
              Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
            </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
            </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://via.placeholder.com/150" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Luke Skywalker
            </h2>
            <h3 className="aboutus-member-role">
              Jedi Master
            </h3>
            <p className="aboutus-member-description">
                La Sauce Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
              </strong>{" "}
                avec pas ou peu de connaissance de ce vaste univers. La Sauce
                Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
            </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
          </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://via.placeholder.com/150" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Luke Skywalker
            </h2>
            <h3 className="aboutus-member-role">
              Jedi Master
            </h3>
            <p className="aboutus-member-description">
              La Sauce Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
              </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
              Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
            </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
          </p>
          </div>
        </div>
        <div className="aboutus-member">
          <img className="aboutus-pic" src="https://via.placeholder.com/150" />
          <div className="aboutus-member-text">
            <h2 className="aboutus-member-name">
              Luke Skywalker
            </h2>
            <h3 className="aboutus-member-role">
              Jedi Master
            </h3>
            <p className="aboutus-member-description">
              La Sauce Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
            </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
              Numérique souhaite par ses actions sur le terrain{" "}
              <strong>
                promouvoir l'accompagnement, l'apprentissage, l'accès et
                l'appropriation du numérique à destination du grand public
            </strong>{" "}
              avec pas ou peu de connaissance de ce vaste univers. La Sauce
          </p>
          </div>
        </div>
      </div>
      <Partners partners={partners} />
      <Support />
    </Layout>
    <style jsx>
      {`
        @media screen and (max-width: 767px) {    
          .title2 {
            margin: 8rem auto;
            text-align: center;
            font-size: 6em;
            margin-bottom: 10px;
            font-family: "Dosis", sans-serif;
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
            align-items: center;
          }
  
          .aboutus-member-text {
            text-align: justify;
            margin: 2rem 2rem 0 1rem;

          }
          
          .aboutus-pic {
            border-radius: 50%;
            float: left;
            margin: 0 0 0 2rem;
            width: 40%;
            
          }
  
          .aboutus-member-name {
            font-size: 170%;
          }
        };

        @media screen and (min-width: 768px) and (max-width: 1023px) {
  
          .title2 {
            margin: 8rem auto;
            text-align: center;
            font-size: 6em;
            margin-bottom: 10px;
            font-family: "Dosis", sans-serif;
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
            padding: 6rem;
            width: 100%;
          }
  
          .aboutus-member {
            width: 50%;
            display: block;
          }
  
          .aboutus-member-text {
            margin: 1rem 1rem 1rem 1rem;
          }
          
          .aboutus-pic {
            display: block;
            border-radius: 50%;
            width: 50%;
            margin: auto;
          }
  
          .aboutus-member-name {
            font-size: 200%;
          }

          .aboutus-member-role {
            font-size: 160%;
          }

          .aboutus-member-description {
            font-size: 140%;
            text-align: justify;
            margin: auto;

          }
        }
       
        @media screen and (min-width: 1024px) {
  
          .title2 {
            margin: 8rem auto;
            text-align: center;
            font-size: 6em;
            margin-bottom: 10px;
            font-family: "Dosis", sans-serif;
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
            padding: 5rem;
            width: 100%;
          }
  
          .aboutus-member {
            width: 50%;
            display: flex;
            align-items: center;
          }
  
          .aboutus-member-text {
            text-align: left;
          }
          
          .aboutus-pic {
            border-radius: 50%;
            width: 70%;
            float: left;
            margin: 2rem;
          }
  
          .aboutus-member-name {
            font-size: 200%;
          }

          .aboutus-member-role {
            font-size: 160%;
          }

          .aboutus-member-description {
            font-size: 140%;
            text-align: justify;
            margin-bottom: 3rem;
          }
      }
      `}
    </style>
  </div>
);

AboutUs.getInitialProps = async () => {
  const partnersRes = await fetch(
    "https://sauce-num-back.herokuapp.com/api/v1/partners"
  );
  const partnersData = await partnersRes.json();

  return {
    partners: partnersData
  };
};

export default AboutUs;
