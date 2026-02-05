
import '../../utils/utils.css'
import '../../utils/global.css'
import './login.css';


function Login() {
  return (
    <div className="login fx fx-col">
        <div id='login-main' className='fx fx-col'>
            <div id='top-modal'>
                <div id='top-modal-logo'>
                        logo
                </div>
                <div id='top-modal-h1 title-w'>
                    <h1 className='title-w'>titulo</h1>
                </div>
                <div id='top-modal-h3'>
                    <h3 className='subtitle-w'>subtitulo</h3>
                </div>
            </div>
            <div id='center-modal' className='bx-sh'>
                <div id='center-modal-header'>
                    <h2>Bem vindo</h2>
                    <h3>Please sign in to access your dashboard</h3>
                </div>
                <div id='center-modal-form'>
                    <div className='field'>
                                            <label>e-mail</label>
                    <input type='text'></input>
                    </div>

                    <div className='field'>
                                            <label>senha</label>
                    <input type='text'></input>
                    </div>
                    <button>entrar</button>
                    <div>
                        <h3 className='blue-1'>cadastrar</h3>
                    </div>
                </div>
            </div>
            <div id='bottom-modal'>
                <div id='bottom-modal-actions'>
                    suporte
                </div>
                <div id='bottom-modal-info'>
                    helpdesk
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
