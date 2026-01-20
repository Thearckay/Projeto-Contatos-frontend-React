
import './HeaderSideMenu.css'
import { Link } from 'react-router-dom'

const HeaderSideMenu = ({isMenu, handleMenu}) => {



  return (
    
    <div className={`${isMenu? 'headerSideMenuBackground' : 'headerSideMenuClosed'}`}>
        <div className='headerSideMenuDivOne'>
          <p className='headerSideMenuTitle'>Menu</p>
          <button onClick={handleMenu} className='headerSideMenuCloseButton'>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <ul className='headerSideMenuButtonsList'>
          <li>
            <i className="bi bi-person-fill headerSideMenuIcons"></i>
            <a className='headerSideMenuListItem' href='https://www.linkedin.com/in/kayck-arcanjo/' target='_blank'>Desenvolvedor</a>
          </li>
          <li>
            <i className="bi bi-code-slash headerSideMenuIcons"></i>
            <a className='headerSideMenuListItem' href='https://github.com/Thearckay/Projeto-Contatos-frontend-React' target='_blank'>Código Fonte</a>
          </li>
          <li>
            <i className="bi bi-chat-left-text-fill headerSideMenuIcons"></i>
            <a className='headerSideMenuListItem'>Fale Conosco</a>
          </li>
          <li>
            <i className="bi bi-tag-fill headerSideMenuIcons"></i>
            <a className='headerSideMenuListItem'>Planos e Preços</a>
          </li>
        </ul>
    </div>
  )
}

export default HeaderSideMenu