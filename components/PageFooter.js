import React from 'react';
import Link from 'next/link';


class PageFooter extends React.Component {
    fClick = (e) => {
    e.preventDefault();
    location = 'https://www.facebook.com/';
    };
    evClick = (e) => {
        e.preventDefault();
        location = 'https://www.eventbrite.fr/';
        };
        haClick = (e) => {
            e.preventDefault();
            location = 'https://www.helloasso.com/';
            };
    render() {
        return(
    <div>
        <h2 className="footer-title">Retrouvez-nous</h2>        
            <div className="sharing-network">
                <img id="logo-facebook" className="footer-network-button" src="https://img.icons8.com/color/96/000000/facebook.png" onClick={this.fClick} />
                <img id="logo-eventbrite" className="footer-network-button" src="https://www.mailerlite.com/assets/integration/eventbrite-icon.png" 
                onClick={this.evClick}/>
                <img id="logo-helloasso" className="footer-network-button" src="http://www.apajh64-40.com/wp-content/uploads/2018/05/helloasso.png" 
                onClick={this.haClick}/>
            </div>
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
                    width: 50vh;
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

                .sharing-network{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: auto;
                    width: 70%;
                    height: 50%;
                    
                }

                .sharing-network > img{
                    border: 5px solid pink; 
                    align-item: center;
                    width: 25%;
                    height: 33%;
                    margin: auto;
                    margin-top: 10px;
                    
                }

                #logo-facebook{ width: 96px; }
                
                #logo-eventbrite{ 
                    width: 78px;
                    // margin-top: 5px;
                }
                

                #logo-helloasso{ 
                    object-fit: cover;
                    width: 96px;
                }

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
};
}




export default PageFooter;
