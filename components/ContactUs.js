import React from 'react';
import Link from 'next/link';
import PageFooter from './PageFooter';

const ContactUs = () => (
  <div className="block-contact-us">
    <div className="contact-us">
      <img className="contact-pixel-bar" src="https://i.imgur.com/wKCXc4G.png" />

      <h2 className="title">Nous contacter</h2>
      <hr className="barre" />
      <p className="p-contact-component">
        Le numérique est aujourd'hui omniprésent dans nos vies, il impact fortement nos mode de vies, nos société, nos politiques,
        {' '}
        nos relations sociales, professionnelles ou privée.
        Pour autant, il ne profite pas à tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus!

      </p>
      <br />
      <button><a className="lien-mail" href="/contact">CONTACTER PAR EMAIL</a></button>
      <br />
      <a href="https://www.facebook.com/" target="_blanck"><img className="logo-fcb" src="https://i.imgur.com/H05W1un.png" /></a>
      <a href="https://twitter.com/home" target="_blanck"><img className="logo-tweeter" src="https://i.imgur.com/UBWGdnK.png" /></a>

      <PageFooter />
      <style jsx>
        {`
            
            
            .contact-pixel-bar{
                width: 100%;
                position: relative;
                bottom: 8.8rem;  
            }

            .contact-us{
                background: #1F2040;
                color: #e5e3e8;
                margin-top: 17rem;
                padding: 6vh 0;
            }

            .title{
                margin: 0 auto;
                text-align: center;
                font-size: 6em;
                margin-bottom: 10px;
                font-family: 'Dosis',sans-serif;
                color: #fff;
                text-shadow: 0 1px 2px rgba(black,.15);
            }

            .p-contact-component{
                color: #fff;
                font-size: 2rem;
                margin-left: 3.5rem;
                margin-right: 5rem;
                padding: 3rem;
                width: 86vw;
                text-align: center;
            }

            .barre{
                width: 3vw;
                height: 0.3vh;
                background-color: #e5e3e8;
                margin: auto;
                margin-top: 2vh;
                margin-bottom: 1vh;
            }

            button{
                margin: 0 0 3% 37.5%;
                padding: 0.8vh 3vw;
                border-radius: 1rem;
                font-size: 2rem;
                color: #1F2040;
            }


            a{
                text-decoration: none;
                font-size: 2rem;
                color: #1F2040;
                font-weight: 800;
                font-family: 'Dosis'
            }

            .logo-fcb{
                margin-left: 43%;
            }
            .logo-tweeter{
                margin-left: 2vw;
            }
            


            `}</style>     
    </div>
    </div>
);


export default ContactUs;
