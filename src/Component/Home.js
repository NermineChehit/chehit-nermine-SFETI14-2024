import React, { Component } from 'react';
import Design from './Design';

function Home() {
    return (
    
    <Design>
        <div className="App">
            <div className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <img src="femmeMenage.png" alt="Image 4" style={{ width: '20%', height: '50%', marginRight: '10px' }} />
                <img src="petsitting.png" alt="Image 2" style={{ width: '20%', height: '50%', marginRight: '10px' }} />
                <img src="jardinier2.png" alt="Image 3" style={{ width: '20%', height: '60%', marginRight: '2px' }} />
                <img src="babysitting.png" alt="Image 5" style={{ width: '20%', height: '50%', marginRight: '10px' }} />
                <img src="aidepersonne.png" alt="Image 1" style={{ width: '20%' }} />
            </div>
        </div>
    </Design>
    );
}

export default Home;