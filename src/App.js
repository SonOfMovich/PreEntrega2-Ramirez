import Navbar from "./Navbar"
import Bienvenidos from "./paginas/home";
import Precios from "./paginas/precios";
import Contacto from "./paginas/contacto"
import ItemListContainer from "./ItemListContainer";

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Bienvenidos
      break
      case "/precios":
        Component = Precios
        break
        case "/contacto":
          Component = Contacto
          break
  }

  return (<><Navbar />
           <div className="container"><Component />
           </div>
           <ItemListContainer />
  </>
  )
}

export default App;
