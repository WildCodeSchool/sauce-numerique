import Layout from '../components/Layout';
import Support from '../components/Support';


const Contact = () => (
  <div>
    <Layout>
      <h5 className="contact-title">
        Contact
      </h5>
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
      </p>
      <Support />
    </Layout>
    <style jsx>
      {`
                .contact-title{
                  margin: 8rem auto;
                  text-align: center;
                  font-size: 6em;
                  margin-bottom: 10px;
                  font-weight: bold;
                  color: #1F2040;
                  text-shadow: 0 1px 2px rgba(black,.15);
                }
                .p-contact{
                  font-size: 2rem;
                  margin: auto;
                  padding: 3rem;
                  width: 86vw;
                  text-align: justify;
                  color: #1F2040;
                }
                .hr-contact{
                  width: 3rem;
                  height: 4px;
                  background-color: #1f2040;
                  border-style: none;
                  border-radius: 2px;
                  margin: auto;
                }

                @media screen and (min-width: 1000px) {
                  .p-contact{
                    width: 100rem;
                  }
            `}
    </style>
  </div>
);

export default Contact;
