import { useState } from 'react';
import { URL } from '../config/index'
import './ProfileChess.css';

export const ProfileChess = () => {

  const [input, setInput] = useState('');
  const [profile, setProfile] = useState(0);

  const handleProfile = async (e) => {
    if (e.key === 'Enter') {
      const consulta = await fetch(`${URL}${input}`);
      const data = await consulta.json();
      setProfile(data)
    }
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
          <input
            onChange={e => handleInputProfile(e)}
            placeholder='Usuario'
            onKeyPress={e => handleProfile(e)}
          />
           {/* <button onClick={handleProfile}>Buscar</button> */}
        </form>

        {
          profile !== 0 ?
            <div className='card-result'>
              <h1>{profile.username}</h1>
              <div className='card-img'>
                <img className='card-front'
                  src={profile.avatar}
                />
                <img alt={profile.username} className='card-back'
                  src={profile.avatar}
                />

              </div>
              <h2>{profile.name}</h2>

              <h6>Seguidores: {profile.followers}</h6>
            </div>
            : null
        }
      </div>
    </div>
  )
}