
import React, { useState } from 'react';
import Design from './Design';

function Annonce() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <Design>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Titre d'annonce</label>
                    <input type="text" className="form-control custom-width" id="exampleFormControlInput1" placeholder="Indiquer le titre d'annonce" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control custom-width" id="exampleFormControlTextarea1" rows={3} placeholder="Indiquer une description à votre annonce"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlFile1" className="form-label">Image </label>
                    <input type="file" className="form-control" id="exampleFormControlFile1" onChange={handleImageUpload} />
                </div>
                {image && (
                    <div className="mb-3">
                        <img src={image} alt="Image Preview" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-outline-warning btn-lg"
                        style={{ backgroundColor: 'orange', color: 'white', marginTop: '30px', width: '90%' }}
                    >
                        Publier votre annonce
                    </button>
                </div>

            </div>
        </Design>
    );
}

export default Annonce;