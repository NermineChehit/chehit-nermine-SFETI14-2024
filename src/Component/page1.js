import React, { Component } from 'react';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titre: "Bonjour admin",
        }
    }

    render() { 
        return ( 
            <div id="wrapper">

                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* ... (le reste du code de la barre latérale) ... */}

                </ul>
                {/* End of Sidebar */}

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* ... (le reste du code de la barre de navigation supérieure) ... */}

                        </nav>
                        
                        <div className="container-fluid">
                            <h1 className="h3 mb-4 text-gray-800">{this.state.titre}</h1>
                        </div>
                    </div>
                   
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Page1;