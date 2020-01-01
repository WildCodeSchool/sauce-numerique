const Manifest = () => {
    return (
        <div>
            <h1 className="manifeste-title">
                Manifeste
            </h1>
            <p className="manifeste-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.
            </p>
            <button className="manifeste-button">
                Voir plus
            </button>
            <style jsx>{`
                .manifeste-title {
                    text-align: center;
                    font-size: 3em;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    font-weight: bold;
                    color: black;
                    text-shadow: 0 1px 2px rgba(black,.15);
                }
                .manifeste-text {
                    text-align: justify;
                    font-size: 2em;
                    margin: 10px;
                    padding: 50px;
                }
                .manifeste-button {

                    background-color: #2d3436;
                    border: none;
                    color: #fdcb6e;
                    padding: 15px 32px;
                    text-align: center;
                    display: flex;
                    font-size: 16px;
                    margin: 0 auto;
                    cursor: pointer;
                    align-item: center;
                }
            `}
            </style>
        </div>
        )
}

export default Manifest;