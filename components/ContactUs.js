import React from 'react';
import PageFooter from './PageFooter';

const ContactUs = () => (
  <div className="contact-us">
    {/* <img className="contact-pixel-bar" src="https://i.imgur.com/wKCXc4G.png" /> */}

    <h2 className="title">Nous contacter</h2>
    <hr className="white-break" />
    <p className="contact-text">
    Le numérique est aujourd'hui omniprésent dans nos vies, il impact fortement nos mode de vies,
      {' '}
    nos société, nos politiques,
      {' '}
    nos relations sociales, professionnelles ou privée.
    Pour autant, il ne profite pas à tous, nombreux sont celles et ceux
      {' '}
    qui le comprennent mal ou bien pire, en sont exclus!
    </p>
    <br />
    <a className="lien-mail" href="/contact">CONTACTER PAR EMAIL</a>
    <br />
    <div className="logo-contact-us">
      <a href="https://www.facebook.com/" target="_blanck"><img className="logo-fcb" src="https://i.imgur.com/H05W1un.png" alt="logo-facebook" /></a>
      <a href="https://twitter.com/home" target="_blanck"><img className="logo-tweeter" src="https://i.imgur.com/UBWGdnK.png" alt="logo-tweeter" /></a>
    </div>

    <PageFooter />
    <style jsx>
      {`
            
            // General rules
            
            .contact-us{
                margin-top: 5rem;
                background: #1F2040;
                color: #e5e3e8;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 10px 10px 10px 10px;
            }
            
            .title{
                text-align: center;
                font-size: 6rem;
                font-weight: bold;
                color: #fff;
                text-shadow: 0 1px 2px rgba(black,.15);
                margin-bottom: 10px;
            }

            hr.white-break {
                width: 3rem;
                height: 4px;
                background-color: #FFFFFF;
                border-style: none;
                border-radius: 2px;
                margin: auto;
              }
            
            p.contact-text {
                font-size: 2rem;
                margin: auto;
                padding: 3rem;
                text-align: justify;
                width: 86vw;
            }
            
            .lien-mail{
                border: 2px solid #fff;
                border-radius: 5px;
                background-color: #fff;
                color: #1F2040;
                text-decoration: none;
                font-weight: 800;
                font-family: 'Dosis',sans-serif;
                width: 130px;
                margin: auto;
                text-align: center;
            }

            .logo-contact-us {
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                margin-top: 10px
            }

            .logo-fcb{
                margin-right: 10px;
                width: 40px;
            }
            

            .logo-tweeter {
                width: 40px;
            }

            @media screen and (min-width: 1000px) {
              p.contact-text{
                width: 100rem;
              }
            
            `}

    </style>
  </div>
);


export default ContactUs;
