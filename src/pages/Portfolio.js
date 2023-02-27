import React from 'react';
import Navigation from '../components/Navigation';

const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <div style={{ backgroundImage: "url('./media/test.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '120vh' }}>
                {
                    
                <>
                <br></br>
                <h3 style={{ marginLeft: '30vh' }}>
                    <p class="mb-0">Développeur WEB - Vivien Brocvielle</p><br></br>
                </h3>
                <br></br>
                <h4 style={{ marginLeft: '5vh' }}>
                    <p class="mb-0">3- Portfolio</p>
                </h4>
                <br></br>
                <p style={{ marginLeft: '5vh' }}>
                    <p class="mb-5">En tant que développeur web expérimenté, j'ai une solide connaissance des outils <br></br> et technologies utilisés dans ce domaine.<br></br><br></br>J'ai également des compétences en web design, en référencement naturel et en<br></br> optimisation de la performance pour créer des sites et des applications efficaces<br></br> pour les utilisateurs.</p>
                </p>
                <a href="./media/CVBrocvielleVivien.pdf" download>
                    <button style={{ marginLeft: '5vh' }} type="button" class="btn btn-secondary">Télécharger mon CV</button>
                </a>
                
                </>
                
                
                
                }
            </div>
        </div>
        
    );
};

export default Portfolio;