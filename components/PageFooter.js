import React from 'react';
import Link from 'next/link';


const PageFooter = () => (
    <div /*style={styledPageFooter}*/>
        <h1>Retrouvez-nous</h1>
        <button className="Footer-network">FACEBOOK</button>
        <button className="Footer-network">EVENTBRIDE</button>
        <button className="Footer-network">HELLO ASSO</button>
        <section>
            <aside className="sitemap">
                <h2>SITEMAP</h2>
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
            <aside className="Mention-legale">
                <h3>MENTION LEGALE</h3>
                <button className="button"></button>
                <button className="valider">VALIDER</button>
            </aside>
        </section>

    {/* Style du component */}
            <style jsx>{`
                .Footer-network{
                    margin: 20px;
                    // display: flex;
                    flex-direction: rows;
                    flex-direction: space between;
                }

                aside{
                    width: 40%;
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
