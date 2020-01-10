const ContactPartner = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">
                DEVENIR PARTENAIRE
            </h1>
            <p className="contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.
            </p>
            <div className="button-container">
                <button className="contact-button">
                    CONTACT
                </button>
            </div>
            <style jsx>{`
                .contact-container {
                    margin-top: 80px;
                }
                .contact-title {
                    margin: 0 auto;
                    text-align: center;
                    font-size: 3em;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    font-weight: bold;
                    color: black;
                    text-shadow: 0 1px 2px rgba(black,.15);
                }
                .contact-text {
                    text-align: justify;
                    font-size: 2em;
                    margin: 10px;
                    padding: 50px;
                }
                .contact-button {
                    display: flex;
                    margin: 0 auto;
                    position: relative;
                    background: transparent;
                    outline: 0;
                    border: 8px solid #e74c3c;
                    border-right: 0px;
                    padding: 10px 20px;
                    color: #e74c3c;
                    font-weight: bold;
                    min-width: 150px;
                    font-size: 20px;
                    font-weight: Roboto;
                    cursor: pointer;
                }
            
                .contact-button::after {
                    position: absolute;
                    content: "";
                    display: block;
                    right: 0;
                    top:0;
                    width:8px;
                    height: 100%;
                    background: #e74c3c;
                    transition: height 1s;
                }
            
                .contact-button::before {
                    position: absolute;
                    content: "";
                    display: block;
                    bottom:0;
                    right: 0;
                    width:8px;
                    height: 8px;
                    background: #e74c3c;
                    transition: right 0.2s;
                }
            
                .contact-button:hover::after {
                    height: calc(100% - 8px);
                    transition: height 0s;
                }
                
                .contact-button:hover::before {
                    right: -16px;
                    transition: right 0.2s;
                }
            `}
            </style>
        </div>
    )
}

export default ContactPartner;