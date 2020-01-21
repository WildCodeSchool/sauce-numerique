import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';


const MentionsLegales = () => (
    <div>
        <Layout>
        <h3 className="mentions-legales-title">Mentions Légales</h3>
        
        {/* Lien pour générer les Mentions-Légales: http://generateur-de-mentions-legales.com/ */}
        
        <p className="mentions-legales-text">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat 
            nulla pariatur. 
            Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa 
            qui officia deserunt mollit anim 
            id est laborum.</p>

        </Layout>

            <style jsx>{`
            .mentions-legales-title {
                text-align: center;
                margin: 40px 0 0 0;
                font-size: 20px;
            }

            .mentions-legales-text {
                width: 60%;
                margin: 0 auto;
                margin-bottom: 10px;
                text-align: center;
                font-size: 15px;
            }
            
            `}</style>  
    </div>
        );



export default MentionsLegales;
