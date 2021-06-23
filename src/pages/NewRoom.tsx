import { Link, useHistory } from 'react-router-dom'
import illustatrionImg from '../assets/images/illustration.svg';
import logoimage from '../assets/images/logo.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory()
    const [newRoom, setNewRoom] = useState('')

    const handleCreateRoom = async (event: FormEvent) => { 
        event.preventDefault();
        if (newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })
        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h1>
                        {user?.name}
                    </h1>            
                    <h2> Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                       <Button type="submit">
                           Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente ? <Link to="/"> Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}