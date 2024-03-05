import React, { Component } from 'react';
import Design from './Design';



function Contacte() {
    return (
        <Design>
            <div className="App">
                <div className="image-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'Left', height: '80vh' }}>

                <div className="image-item">
                        <a href="https://www.google.tn/maps/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="adresse.png" alt="Image 4" style={{ width: '80px', height: '80px', marginLeft: '60px', marginTop: '10px' }} />
                            <p style={{ marginBottom: '5px', marginLeft: '40px' }}>Tunisie</p>
                        </a>
                    </div>

                    <div className="image-item">
                        <a href="https://mail.google.com/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="mail.png" alt="Image 2" style={{ width: '60px', height: '65px', marginLeft: '70px', marginTop: '20px' }} />
                            <p style={{ marginBottom: '5px', marginLeft: '40px' }}>HomeCare@gmail.com</p>
                        </a>
                    </div>



                    <div className="image-item">
                        <a href="https://www.instagram.com/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="insta.png" alt="Image 5" style={{ width: '90px', height: '100px', marginLeft: '55px', marginTop: '10px', marginBottom: '0px' }} />
                            <p style={{ marginBottom: '5px', marginLeft: '40px' }}>Instagramme</p>
                        </a>
                    </div>

                    <div className="image-item">
                        <a href="https://www.facebook.com/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="meta.png" alt="Image 3" style={{ width: '95px', height: '75px', marginLeft: '55px', marginTop: '10px', marginBottom: '0px' }} />
                            <p style={{ marginBottom: '5px', marginLeft: '40px' }}>Facebook</p>
                        </a>
                    </div>



                    <div className="image-item">
                        <a href="https://wa.me/your-phonenumber" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="whatsapp.png" alt="Image 1" style={{ width: '65px', height: '65px', marginLeft: '70px', marginTop: '25px' }} />
                            <p style={{ marginBottom: '5px', marginLeft: '40px' }}>whatsapp</p>
                        </a>
                    </div>


                    <div className="image-item">
                        <a href="https://www.linkedin.com/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="linkedin.png" alt="Image 1" style={{ width: '65px', height: '65px', marginLeft: '70px', marginTop: '25px' }} />
                            <p style={{ marginBottom: '2px', marginLeft: '50px' }}>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
        </Design>
    );
}

export default Contacte;