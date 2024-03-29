import { useHistory } from 'react-router';
import illustatrionImg from '../assets/images/illustration.svg';
import logoimage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export function Home() {
    const history = useHistory();    
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    const handleCreateRoom = async () => {
        if (!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new')
    } 

    const handleJoinRoom = async (event: FormEvent) => {
        event.preventDefault();
        if (roomCode.trim() === ''){
            return;
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get();
        if (!roomRef.exists()){
            alert('Room does not exists.')
            return;
        }
        history.push(`/rooms/${roomCode}`)
    }

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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImage} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" 
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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