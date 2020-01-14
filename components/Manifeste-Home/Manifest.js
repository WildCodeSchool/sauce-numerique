const Manifest = () => {
    return (
        <div className="manifeste-container">
            <h1 className="manifeste-title">
                Manifeste
            </h1>
            <hr className="barre"/>
            <p className="manifeste-text">
                Le numérique est aujourd’hui omniprésent dans nos vies, il impact fortement nos modes de vies, nos sociétés, nos politiques, nos relations sociales professionnelles ou privées. Pour autant, il ne profite pas à tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus !<br/><br/>
                La Sauce Numérique souhaite par ses actions sur le terrain <strong>promouvoir l’accompagnement, l’apprentissage, l’accès et l’appropriation du numérique à destination du grand public</strong> avec pas ou peu de connaissance de ce vaste univers. La Sauce Numérique est une association régie par la loi du 1er juillet 1901. Ses membres sont issus du numérique et d’autres horizons, formant un groupe riche et éclectique dont l’objectif est d’organiser des actions les plus accessibles et adaptées possibles aux problèmes liées au numérique.
            </p>            
            <div className="faq-container">
                <p>Des questions ? Consultez notre <a href="/faq">Foire Aux Questions</a></p>
            </div>
            <style jsx>{`
                .manifeste-link {
                    text-decoration: none;
                }
                .manifeste-container {
                    margin-bottom: 24em;
                }
                .manifeste-title {
                    margin: 0 auto;
                    text-align: center;
                    font-size: 6em;
                    margin-bottom: 10px;
                    font-family: 'Dosis',sans-serif;
                    font-weight: 900;
                    color: #1F2040;
                    text-shadow: 0 1px 2px rgba(black,.15);
                }

                hr.barre {
                    width: 3%;
                    height: 4px;
                    background-color: #250A40;
                    margin-left: 67rem;
                }
                .manifeste-text {
                    font-size: 3em;
                    margin: 10px;
                    padding: 50px;
                    color: #1F2040;
                    position: relative;
                    left: 3rem;
                }
                .faq-container{
                    font-size: 2rem;
                    font-weight: 700;
                    margin-left: 48rem;
                }
            `}
            </style>
        </div>
    )
}

export default Manifest;