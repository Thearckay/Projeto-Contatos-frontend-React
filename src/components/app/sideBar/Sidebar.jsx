import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../logo/Logo';

const Sidebar = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [user, setUser] = useState({ name: 'Usuário', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail")
    if (loggedUser) {
      setUser({name: loggedUser, email: userEmail});
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <nav 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="sidebar-header">
        <div className="logo-icon">
          A
        </div>
        <span className="logo-text">gendaPro</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/app/dashboard">
            <i className="bi bi-grid-1x2-fill"></i>
            <span className="link-text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/app/contacts">
            <i className="bi bi-person-lines-fill"></i>
            <span className="link-text">Contatos</span>
          </Link>
        </li>
        <li>
          <Link to="/app/contacts/favorites">
            <i className="bi bi-star-fill"></i>
            <span className="link-text">Favoritos</span>
          </Link>
        </li>
        <li>
          <Link to="/app/groups">
            <i className="bi bi-collection-fill"></i>
            <span className="link-text">Grupos</span>
          </Link>
        </li>
        <li>
          <Link to="/app/settings">
            <i className="bi bi-gear-fill"></i>
            <span className="link-text">Configurações</span>
          </Link>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div className="user-info">
            <div className="user-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
            </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
            <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;