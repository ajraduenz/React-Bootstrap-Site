import React from 'react'
import {Link} from 'react-router-dom'


const Cabecalho = props => {
    return (
        <div>
            <nav className='navbar' >
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link to='/' className='navbar-brand'>Logo Aqui</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>Início</Link></li>
                            <li><Link to='/servicos'>Serviços</Link></li>
                            <li><Link to='/portfolio'>Portfólio</Link></li>
                            <li><Link to='/precos'>Preços</Link></li>
                            <li><Link to='/contato'>Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='jumbotron text-center'>
                <h1>Compania</h1>
                <p>Lorem Ipsum</p>
                
            </div>
        </div>
    )
}

export default Cabecalho