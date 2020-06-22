import React from 'react';
import './index.css';
function DevItem(props){
    const {dev} = props;    
    return(
        <li key={dev._id}  className = "dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`http://github.com/${dev.github_username}`}>Access Profile</a>
      </li>
    )
}

export default DevItem;