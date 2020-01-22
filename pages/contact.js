import Layout from "../components/Layout";
import Soutien from '../components/Soutien';
import Support from '../components/Support';


const Contact = () => (
  <div>
    <Layout>
      <h5 className="contact-title">Contact</h5>
      <hr className="hr-contact" />
      <p className="p-contact">
La Sauce Numérique souhaite par ses actions
        sur le terrain
        promouvoir l’accompagnement, l’apprentissage, l’accès et
        l’appropriation du numérique à destination du grand public
        avec pas ou peu de connaissance de ce vaste univers.
        La Sauce Numérique est une association régie par la loi du 1er juillet 1901.
        Ses membres sont issus du numérique et d’autres horizons,
        formant un groupe riche et éclectique dont l’objectif est d’organiser
        des actions les plus accessibles et adaptées possibles aux problèmes
        liées au numérique.
        La Sauce Numérique souhaite par ses actions sur le terrain
        promouvoir l’accompagnement, l’apprentissage, l’accès et
        l’appropriation du numérique à destination du grand public
        avec pas ou peu de connaissance de ce vaste univers.
        La Sauce Numérique est une association régie par la loi du 1er juillet 1901.
        Ses membres sont issus du numérique et d’autres horizons,
        formant un groupe riche et éclectique dont l’objectif est d’organiser
         des actions les plus accessibles et adaptées possibles aux problèmes
         liées au numérique.
        La Sauce Numérique souhaite par ses actions sur le terrain
        promouvoir l’accompagnement, l’apprentissage, l’accès et
        l’appropriation du numérique à destination du grand public
        avec pas ou peu de connaissance de ce vaste univers.
        La Sauce Numérique est une association régie par la loi du 1er juillet 1901.
        Ses membres sont issus du numérique et d’autres horizons,
        formant un groupe riche et éclectique dont l’objectif est d’organiser
         des actions les plus accessibles et adaptées possibles aux problèmes
         liées au numérique.
    </Layout>


    <style jsx>
      {`
                .contact-title{
                    margin-top: 12%;
                    text-align: center;
                    font-size: 6em;
                    margin-bottom: 10px;
                    font-family: 'Dosis',sans-serif;
                    color: #1F2040;
                    text-shadow: 0 1px 2px rgba(black,.15);
                }
                .p-contact{
                    font-size: 2rem;
                    margin-left: 3.5rem;
                    margin-right: 5rem;
                    padding: 3rem;
                    width: 86vw;
                    text-align: center;
                    color: #1F2040;
                }
                .hr-contact{
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

export default Contact;
