import React from 'react';
import Link from 'next/link';
import PageFooter from './PageFooter';

const ContactUs = () => (
    <div className="contact-us">
        <h2 className="nous-contacter-title">Nous contacter</h2>
        <br />
        <p>Le numérique est aujourd'hui omniprésent dans nos vies, il impact fortement nos mode de vies, nos société, nos politiques, nos relations sociales, professionnelles ou privée. 
            Pour autant, il ne profite pas à tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus!</p>
        <br />
        

        <button><a className="lien-mail" href="/contact">Contacter par mail</a></button>
        {/* INTEGRATION DES ICONS DE RESEAU SOCIAUX */}

        <PageFooter />
            <style jsx>{`
            .contact-us{
                background: #1F2040;
                color: #e5e3e8;
                margin-top: 17rem;
            }

            h2, p{ text-align: center; }

            p{
                margin: auto;
                width: 50vw;
            }

            button{
                margin: 0 0 0 45%;
                padding: 2px;
            }

            a{ text-decoration: none; }
            


            `}</style>     
    </div>
        );



export default ContactUs;
