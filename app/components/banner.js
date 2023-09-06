const Banner = (textoCabecera) =>{
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./logo.jpg" alt="Logo Esqueleto"/>
                    {textoCabecera}
                </a>
            </div>
        </nav>
    )

  };
  export default Banner;