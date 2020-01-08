import React from 'react';
import Link from 'next/link';


const PageFooter = () => (
    <div>
        <h2 className="footer-title">Retrouvez-nous</h2>
        <button href="https://www.facebook.com/" className="footer-network-button">FACEBOOK</button>
        <button className="footer-network-button">EVENTBRIDE</button>
        <button className="footer-network-button">HELLO ASSO</button>
        <section>
            <aside className="sitemap">
                <h3 className="footer-semi-title">SITEMAP</h3>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.</p>
            </aside>
            <aside className="Mentions-légales">
                <h3 className="footer-semi-title">MENTION LEGALE</h3>
                <button id="footer-button-newsletter" className="footer-mentions-légales-button">NEWSLETTER</button>
                <button id="footer-button-mail" className="footer-mentions-légales-button">EMAIL</button>
                <button id="footer-button-valider" className="footer-mentions-légales-button">VALIDER</button>
            </aside>
        </section>

    {/* Style du component */}
            <style jsx>{`
                .footer-network{
                    flex-direction: rows;
                    flex-direction: space between;
                }
                .footer-network-button{
                    margin: 20px;
                }

                .footer-mentions-légales-button{
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                }

                .footer-title{
                    text-align: center;
                }

                .footer-semi-title{text-align: center;}

                aside{
                    width: 40%;
                    margin: 40px;
                }

                .Mention-legale{
                    display: flex;
                    flex-direction: column;
                }

                section{
                    display: flex;
                    margin: 10px;
                }
                
                button {
                    position: relative;
                    background: transparent;
                    outline: 0;
                    border: 8px solid #e74c3c;
                    border-right: 0px;
                    padding: 10px 20px;
                    margin: 10px 0px;
                    color: #e74c3c;
                    font-weight: bold;
                    min-width: 150px;
                    font-size: 20px;
                    font-weight: Roboto;
                    cursor: pointer;
                }
            
                button::after {
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
            
                button::before {
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
            
                button:hover::after {
                    height: calc(100% - 8px);
                    transition: height 0s;
                }
                
                button:hover::before {
                    right: -16px;
                    transition: right 0.2s;
                }

            `}</style>
    </div>
);



export default PageFooter;
