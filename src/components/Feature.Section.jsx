import React from 'react';
import HeroSection from './HeroSection';

const FeatureSection = () => {
    const onGetStartedClick = () => {
        const heroSection = document.getElementById('hero-section-wrapper');
        const featureSection = document.getElementById('feature-section');

        if (heroSection && featureSection) {
            heroSection.style.top = '0';
            heroSection.style.width = '100%';

            featureSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div>
            <div id="hero-section-wrapper">
                <HeroSection onGetStartedClick={onGetStartedClick} />
                <button onClick={onGetStartedClick}>Get Started</button>
            </div>
            <div id="feature-section" style={{ marginTop: '100vh' }}>
                <h2>Feature Section</h2>
                
            </div>
        </div>
    );
};


export default FeatureSection;
