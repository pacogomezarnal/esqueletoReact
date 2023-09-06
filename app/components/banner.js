const Banner = ({children}) =>{
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./logo.jpg" alt="Logo Esqueleto"/>
                    {children}
                </a>
            </div>
        </nav>
    )

  };
  export default Banner;