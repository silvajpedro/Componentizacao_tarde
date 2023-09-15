
// Componentes sempre devem ser a primeira letra maiuscula
// Header
// Esse é o componente Header para ele aparecer na tela devemos importar, ou seja trazer o componente Header para o componente principal App
function Header(){
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header