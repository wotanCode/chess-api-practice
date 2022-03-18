import { useState } from 'react';
import { URL } from '../config/index'
import './ProfileChess.css';



export const ProfileChess = () => {

  const [input, setInput] = useState('');
  const [profile, setProfile] = useState(0);

  const handleProfile = async () => {
    const consulta = await fetch(`${URL}${input}`);
    const data = await consulta.json();
    setProfile(data)
    console.log(profile)
  }

  const handleInputProfile = e => {
    e.preventDefault()
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
  }



  return (
    <div className='card'>
      <div className='card-content'>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => handleInputProfile(e)} />
        <button onClick={handleProfile}>Buscar</button>
      </form>

      {
        profile !== 0 ?
          <div>
            <h1>{profile.username}</h1>
            <img
              src={profile.avatar}
            />
            <h2>{profile.name}</h2>
            
            <h6>Seguidores: {profile.followers}</h6>
          </div>
          : null
      }
    </div>
    </div>
  )
}