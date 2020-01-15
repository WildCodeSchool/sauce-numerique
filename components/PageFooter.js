import React from 'react';
import Link from 'next/link';

const PageFooter = () => (
    <div>
        <h5 className="footer-title"><a href="../MentionsLegales">Mention légales</a> - Sauce Numérique Tous droits réservés</h5>       
            <style jsx>{`
                a, .footer-title{ 
                    color: #e5e3e8;
                    text-align: center;
                    background: #250a40;
                    font-size: 15px;
                    margin-top: 17rem;
                }
            `}</style>     
    </div>
        );



export default PageFooter;
