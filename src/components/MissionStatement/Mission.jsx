import React from "react";
import './Mission.css';
import missionImage from './missionImage.png'; // Make sure to replace with your actual image path

const Mission = () => {
    return (
        <section className="mission-section" style={{ background: 'linear-gradient(to bottom, #373a6d, #e1e5f2)' }}>
            <div className="mission-container">
                <div className="mission-content">
                    <div className="mission-image">
                        <img src={missionImage} alt="Business" />
                    </div>
                    <div className="mission-text">
                        {/* <h2 className="mission-title">Put YOUR business on the internet</h2> */}
                        <div className="mission-paragraph">
                            <p>
                                A <span style={{color: '#ff6600'}}>custom website</span> boosts your business by <br/>
                                • <span style={{color: '#ff6600'}}>increasing visibility</span><br/>
                                • <span style={{color: '#ff6600'}}>building credibility</span><br/>
                                • and offering easy <span style={{color: '#ff6600'}}>customer engagement</span>
                            </p>
                            <p>
                                It helps you <span style={{color: '#ff6600'}}>stand out</span> from competitors,
                                grow sales through e-commerce, and provides valuable insights to make better business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;
