import React from 'react'

const Contato = props => {
    return(
        <div id='contact' className='container-fluid bg-grey'>
                <h2 className='text-center'>CONTATO</h2>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>Preencha o formulário de contato, ou entre pelos endereços a seguir:</p>
                        <p><span className='glyphicon glyphicon-map-marker'></span> Pomerode - SC</p>
                        <p><span className='glyphicon glyphicon-phone'></span> +55 47 9999-9999</p>
                        <p><span className='glyphicon glyphicon-envelope'></span> email@algo.com</p>
                    </div>
                    <div className='col-sm-7 '>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                            </div>
                        </div>
                        <textarea className='form-control' id='comments' name='comments' placeholder='Comentário' rows='5'></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contato