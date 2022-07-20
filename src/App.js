import './App.css';
import Encabezado from './componentes/encabezado/encabezado';
import Link from './componentes/links/links';
import insta from './media/insta.png'
import ubi from './media/ubicacion.png'
import pedido from './media/Tienda.png'
import wpp from './media/wpp.png'
import rese from './media/reseñas.png'
import logo from './media/log.png'

function App() {
  return (
    <div className="App">
      <div className='container'>

          <Encabezado
            foto={logo}
            usuario='GOGOBURGERS'
          />
        <div className='link-container'>
          <Link
            imagen={pedido}
            redSocial='Hace tu Pedido'
            link='https://menu.fu.do/gogoburgers'
          />

          <Link
            imagen={insta}
            redSocial='Instagram'
            link='https://www.instagram.com/'
          />
          
          <Link
            imagen={wpp}
            redSocial='WhatsApp'
            link='https://api.whatsapp.com/send?phone=543794143975&text=&source=&data=&app_absent='
          />
          
           <Link
            imagen={ubi}
            redSocial='Como llegar'
            link='https://www.google.com/maps/dir//gogo+burgers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94456d211818871d:0xc43a265b061c154b?sa=X&hl=es&ved=2ahUKEwjavfuv25L2AhW9ppUCHS-kC8EQ9Rd6BAhCEAM'
          />

          <Link
            imagen={rese}
            redSocial='Dejanos tu Reseña'
            link='https://www.google.com/search?hl=es-AR&gl=ar&q=gogo+burgers,+San+Juan+642,+W3400+Corrientes&ludocid=14139656152469476683&lsig=AB86z5XE4SHG7xpQywTNlZgWCXo0&pli=1#lrd=0x94456d211818871d:0xc43a265b061c154b,3&pli=1'
          />

        </div>


      </div>

    </div>
  );
}

export default App;
