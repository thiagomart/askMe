import illustatrionImg from '../assets/images/illustration.svg'
import logoimage from '../assets/images/logo.svg'
import googleIconImage from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustatrionImg} alt='Ilustação simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p> Tire as dúvidas da sua audência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoimage} alt="AskMe" />
                </div>
                <img src={googleIconImage} alt="Logo do Google" />
                <button>
                    Crie sua sala com o Google
                </button>
                <div>
                    ou entre em uma sala
                </div>
                <form action="">
                    <input 
                        type="text"
                        placeholder="Digite o código da sala" 
                    />
                    <button type="submit">
                        Entrar na sala
                    </button>
                </form>
            </main>
        </div>
    )
}