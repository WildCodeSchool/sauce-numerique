import React from 'react';
import Link from 'next/link';

const PageFooter = () => (
    <div>
        <h5 className="footer-title"><a href="../legalnotice">Mention légales</a> - Sauce Numérique Tous droits réservés</h5>       
            <style jsx>{`
                a, .footer-title{ 
                    color: #e5e3e8;
                    text-align: center;
                    background: #1F2040;
                    font-size: 15px;
                    margin-bottom: -3.5vh;
                    margin-top: 2vh;

                }
            `}</style>     
    </div>
        );



export default PageFooter;
