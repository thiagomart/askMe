import illustatrionImg from '../assets/images/illustration.svg';
import logoimage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoow() {
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
                    <h2> Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Nome da sala" 
                        />
                       <Button type="submit">
                           Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente ? <a href="#"> Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}