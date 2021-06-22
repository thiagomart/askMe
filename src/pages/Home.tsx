import illustatrionImg from '../assets/images/illustration.svg';
import logoimage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustatrionImg} alt='Ilustação simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p> Tire as dúvidas da sua audência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoimage} alt="AskMe" />                
                    <button className="create-room">
                        <img src={googleIconImage} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                       <Button type="submit">
                           Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}