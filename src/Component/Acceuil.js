import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './Foot';


class Acceuil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: "Qui sommes-nous ?",
      isHoveredInscription: false,
      isHoveredConnexion: false,
      text: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. Ce phénomène est appelé douleur musculaire d'apparition retardée ou DOMS. En raison de cette superposition de compression, le DOMS est le plus répandu chez les athlètes et les sportifs. Lorsque le corps subit une blessure, il active un mécanisme d'auto-préservation pour limiter les dommages supplémentaires. Cet état d'inconfort est initialement masqué par une activité accrue du système nerveux qui fait que la douleur passe inaperçue.",
      sousTitre: "je suis un fournisseur",
      sousTitre1: "je suis un client",
      textSousTitre: "cette plateforme va permettre aux parents de trouver le profil souhaité avec les valeurs qu ils cherchent chez la personne qui va garder leurs enfants ou leurs grands parents.",
      textSousTitre1: "cette plateforme va permettre aux parents de trouver le profil souhaité avec les valeurs qu ils cherchent chez la personne qui va garder leurs enfants ou leurs grands parents.",
      titre4: "Nos valeurs",
      text6: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée.  ",
      text7: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée.  ",
      text8: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. ",
      text9: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée.  ",
      titre2: "Concept",
      text2: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. Ce phénomène est appelé douleur musculaire d'apparition retardée ou DOMS. En raison de cette superposition de compression, le DOMS est le plus répandu chez les athlètes et les sportifs. Lorsque le corps subit une blessure, il active un mécanisme d'auto-préservation pour limiter les dommages supplémentaires. Cet état d'inconfort est initialement masqué par une activité accrue du système nerveux qui fait que la douleur passe inaperçue.",
      titre3: "Avis parents",
      text3: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. Ce phénomène est appelé douleur musculaire d'apparition retardée ou DOMS. En raison de cette superposition de compression, le DOMS est le plus répandu chez les athlètes et les sportifs. Lorsque le corps subit une blessure, il active un mécanisme d'auto-préservation pour limiter les dommages supplémentaires. Cet état d'inconfort est initialement ",
      text4: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. Ce phénomène est appelé douleur musculaire d'apparition retardée ou DOMS. En raison de cette superposition de compression, le DOMS est le plus répandu chez les athlètes et les sportifs. Lorsque le corps subit une blessure, il active un mécanisme d'auto-préservation pour limiter les dommages supplémentaires. Cet état d'inconfort est initialement ",
      text5: "De nombreuses personnes ressentent des douleurs musculaires après des activités physiques intenses ou de longue durée. Ce phénomène est appelé douleur musculaire d'apparition retardée ou DOMS. En raison de cette superposition de compression, le DOMS est le plus répandu chez les athlètes et les sportifs. Lorsque le corps subit une blessure, il active un mécanisme d'auto-préservation pour limiter les dommages supplémentaires. Cet état d'inconfort est initialement ",
      showMoreText1: false,
      showMoreText2: false,
      showMoreText3: false,
      showFooter: false,

    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Calculate the scroll position and window height
    const scrollPosition = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    // Set the showFooter state based on scroll position
    this.setState({
      showFooter: scrollPosition >= totalHeight,
    });
  };

  handleInscription = () => {
    console.log('Handle Inscription clicked');
  };

  handleConnexion = () => {
    console.log('Handle Connexion clicked');
  };

  handleMouseEnterInscription = () => {
    this.setState({ isHoveredInscription: true, isHoveredConnexion: false });
  };

  handleMouseLeaveInscription = () => {
    this.setState({ isHoveredInscription: false });
  };

  handleMouseEnterConnexion = () => {
    this.setState({ isHoveredConnexion: true, isHoveredInscription: false });
  };

  handleMouseLeaveConnexion = () => {
    this.setState({ isHoveredConnexion: false });
  };
  handleToggleText1 = () => {
    this.setState((prevState) => ({
      showMoreText1: !prevState.showMoreText1,
    }));
  };

  handleToggleText2 = () => {
    this.setState((prevState) => ({
      showMoreText2: !prevState.showMoreText2,
    }));
  };
  handleToggleText3 = () => {
    this.setState((prevState) => ({
      showMoreText3: !prevState.showMoreText3,
    }));
  };



  render() {
    const { showMoreText } = this.state;
    const { isHoveredInscription, isHoveredConnexion } = this.state;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#AED6F1',
      /*backgroundImage: 'url("imageFont.jpg")', */
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '10px',
      minHeight: '50vh',

    };

    const rowContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    };

    const columnContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: '20px',
    };

    const buttonStyleInscription = {
      borderRadius: '25px',
      width: '200px',
      height: '50px',
      margin: '1px',
      border: `2px solid ${isHoveredInscription ? "#275BA9" : "#275BA9"}`,
      color: isHoveredInscription ? '#275BA9' : 'white',
      backgroundColor: isHoveredInscription ? 'white' : '#275BA9',
      fontWeight: 'bold',
    };

    const buttonStyleConnexion = {
      borderRadius: '25px',
      width: '200px',
      height: '50px',
      margin: '1px',
      border: `2px solid ${isHoveredConnexion ? "#275BA9" : "#275BA9"}`,
      color: isHoveredConnexion ? '#275BA9' : 'white',
      backgroundColor: isHoveredConnexion ? 'white' : '#275BA9',
      fontWeight: 'bold',
    };

    const imageStyle = {
      width: '300px',
      height: '300px',
      margin: '1px',
    };

    const image2Style = {
      width: '600px',
      height: '400px',
      margin: '3px',
    };

    const phraseStyle = {
      textAlign: 'center',
      fontSize: '20px',
      color: 'orange',
      fontWeight: 'normal',
      fontFamily: 'italianno',
      margin: '50px',
      marginLeft: '10px',
    };

    const textStyle = {
      textAlign: 'center',
      fontSize: '15px',
      color: 'gray',
      margin: '10px',
    };

    return (
      <div style={containerStyle}>
        <div style={rowContainerStyle}>
          <button
            style={buttonStyleInscription}
            onClick={this.handleInscription}
            onMouseEnter={this.handleMouseEnterInscription}
            onMouseLeave={this.handleMouseLeaveInscription}
          >
            Inscription
          </button>
          <img src='logo.png' alt="logo" style={imageStyle} />
          <Link to="/Home">
            <button
              style={buttonStyleConnexion}
              onClick={this.handleConnexion}
              onMouseEnter={this.handleMouseEnterConnexion}
              onMouseLeave={this.handleMouseLeaveConnexion}
            >
              Connexion
            </button>
          </Link>
        </div>
        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <p style={{ ...phraseStyle, fontSize: '30px', marginBottom: '20px' }}>{this.state.titre}</p>
            <p style={{ ...phraseStyle, fontSize: '20px', color: 'white' }}>{this.state.text}</p>
          </div>
          <img src="/home.png" alt="Logo" style={image2Style} />
        </div>
        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <p style={{ ...phraseStyle, fontSize: '40px', margin: '50px 0' }}>{this.state.sousTitre}</p>
            {/* Displaying an image to the left of textSousTitre */}
            <img src="fournisseur.png" alt="Fournisseur" style={imageStyle} />
            <p style={{ ...phraseStyle, fontSize: '18px', color: 'white' }}>{this.state.textSousTitre}</p>
            <button
              style={buttonStyleInscription}
              onClick={this.handleInscription}
              onMouseEnter={this.handleMouseEnterInscription}
              onMouseLeave={this.handleMouseLeaveInscription}
            >
              Inscription
            </button>
          </div>
          <div style={{ ...columnContainerStyle, textAlign: 'center', marginLeft: '20px' }}>
            <p style={{ ...phraseStyle, fontSize: '40px', margin: '50px 0' }}>{this.state.sousTitre1}</p>
            {/* Displaying a different image to the left of textSousTitre1 */}
            <img src="client.png" alt="Client" style={imageStyle} />
            <p style={{ ...phraseStyle, fontSize: '18px', color: 'white' }}>{this.state.textSousTitre1}</p>
            <button
              style={buttonStyleInscription}
              onClick={this.handleInscription}
              onMouseEnter={this.handleMouseEnterInscription}
              onMouseLeave={this.handleMouseLeaveInscription}
            >
              Inscription
            </button>
          </div></div>
        {/* valeurs */}
        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <p style={{ ...phraseStyle, fontSize: '40px', marginBottom: '50px', marginTop: '100px' }}>{this.state.titre4}</p>
          </div>
        </div>

        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="montre.png" alt="Femme2" style={{ ...imageStyle, width: '50px', height: '50px' }} />
              <p style={{ ...phraseStyle, fontSize: '20px', color: 'white', margin: '0 10px' }}>{this.state.text6}</p>
            </div>
          </div>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="sécurité.png" style={{ ...imageStyle, width: '50px', height: '50px' }} />
              <p style={{ ...phraseStyle, fontSize: '20px', color: 'white', margin: '0 10px' }}>{this.state.text7}</p>
            </div>
          </div>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="étoile.png" style={{ ...imageStyle, width: '50px', height: '50px' }} />
              <p style={{ ...phraseStyle, fontSize: '20px', color: 'white', margin: '0 10px' }}>{this.state.text8}</p>
            </div>
          </div>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="message.png" style={{ ...imageStyle, width: '50px', height: '50px' }} />
              <p style={{ ...phraseStyle, fontSize: '20px', color: 'white', margin: '0 10px' }}>{this.state.text9}</p>
            </div>
          </div>
        </div>



        {/*concept */}
        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}></div></div>


        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <img src="/image2.png" alt="Logo" style={{ ...imageStyle, width: '500px', height: '500px' }} />
          </div>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <p style={{ ...phraseStyle, fontSize: '50px', marginBottom: '20px' }}>{this.state.titre2}</p>
            <p style={{ ...phraseStyle, fontSize: '20px', color: 'white' }}>{this.state.text2}</p>
          </div>
        </div>
        {/* AVIS */}
        <div style={rowContainerStyle}>
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#AED6F1' }}>
              <img src="homme.png" alt="Homme" className="card-img-top" style={{ ...imageStyle, width: '200px', height: '200px' }} />
              <div className="card-body">
                <p style={{ ...phraseStyle, fontSize: '20px', color: 'white' }}>
                  {this.state.showMoreText1 ? this.state.textSousTitre : this.state.textSousTitre.slice(0, 100)}
                  {!this.state.showMoreText1 && (
                    <span onClick={this.handleToggleText1} style={{ color: '#275BA9', cursor: 'pointer' }}>
                      Voir plus
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* ... */}
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#AED6F1' }}>
              <img src="femme.png" alt="Femme" className="card-img-top" style={{ ...imageStyle, width: '200px', height: '200px' }} />
              <div className="card-body">
                <p style={{ ...phraseStyle, fontSize: '20px', color: 'white' }}>
                  {this.state.showMoreText2 ? this.state.textSousTitre : this.state.textSousTitre.slice(0, 100)}
                  {!this.state.showMoreText2 && (
                    <span onClick={this.handleToggleText2} style={{ color: '#275BA9', cursor: 'pointer' }}>
                      Voir plus
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* ... */}
          <div style={{ ...columnContainerStyle, textAlign: 'center' }}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#AED6F1' }}>
              <img src="femme2.png" alt="Femme2" className="card-img-top" style={{ ...imageStyle, width: '200px', height: '200px' }} />
              <div className="card-body">
                <p style={{ ...phraseStyle, fontSize: '20px', color: 'white' }}>
                  {this.state.showMoreText3 ? this.state.textSousTitre : this.state.textSousTitre.slice(0, 100)}
                  {!this.state.showMoreText3 && (
                    <span onClick={this.handleToggleText3} style={{ color: '#275BA9', cursor: 'pointer' }}>
                      Voir plus
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={rowContainerStyle}>
          <div style={{ marginTop: '20px' }}>
            {/* Centering the "Voir plus" button */}
            <button
              style={{
                ...buttonStyleInscription,
                margin: ' auto',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '20px',
              }}
              onClick={this.handleInscription}
              onMouseEnter={this.handleMouseEnterInscription}
              onMouseLeave={this.handleMouseLeaveInscription}
            >
              Voir plus
              <span style={{ marginLeft: '8px' }}>&rarr;</span>
            </button>
          </div> </div >
        <div style={containerStyle}>

        </div>

        {this.state.showFooter && <Foot backgroundColor="#AED6F1" />}

      </div >


    );
  }
}

export default Acceuil;
