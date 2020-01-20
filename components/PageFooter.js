import React from 'react';
import Link from 'next/link';

const PageFooter = () => (
    <div>
        <h5 className="footer-title"><a href="../MentionsLegales">Mention légales</a> - Sauce Numérique Tous droits réservés</h5>       
            <style jsx>{`
                @media screen and ( max-width: 375px ){
                    a, .footer-title{
                        margin: 4.5vh 0 -3.5vh -4vh;
                        text-align: center;
                        font-size: 10px;
                    }

                }


                a, .footer-title{ 
                    color: #e5e3e8;
                    text-align: center;
                    background: #1F2040;
                //     font-size: 15px;
                //     margin-bottom: -3.5vh;
                //     margin-top: 2vh;
                // }
            `}</style>     
    </div>
        );



export default PageFooter;
