import Cartwidget from "../CartWidget/CartWidget"

function NavBar(){
    return (
        <nav>
            <h1 className="title is-1 has-text-centered">Military Arts</h1>
            <div className="buttons is-centered">
                <button className="button is-dark is-link">Home</button>
                <button className="button is-dark is-link">Catalogo</button>
                <button className="button is-dark is-link">Nosotros</button>
                <button className="button is-dark is-link">Preguntas</button>
            </div>            
            <Cartwidget />       
        </nav>
    )
}

export default NavBar