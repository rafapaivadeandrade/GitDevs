import React ,{useState,useEffect}from 'react';

function DevForm({onSubmit}){
    
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');

  const [github_username,setGithubusername] = useState('');
  const [techs,setTechs] = useState('');
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const {latitude, longitude} = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 3000,
      }
    )
  

  },[]);
   async function handleAddDev(e){
        e.preventDefault();
       await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });
        setGithubusername('');
        setTechs('');
  }
return (
    <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="username_github">Github Username</label>
          <input name = "github_username" id = "github_username" 
          value = {github_username}
          onChange = {e => setGithubusername(e.target.value)}
           required/>
          </div>

          <div className="input-block">
          <label htmlFor="technologies">Tecnologias</label>
          <input name = "techs" id = "techs"
          value = {techs}
          onChange = {e => setTechs(e.target.value)}
            required/>
          </div>

          <div className="input-group">

          <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
          type= "number" 
          name = "latitude" 
          id = "latitude" 
          value = {latitude} onChange={e => setLatitude(e.target.value)} required/>
          </div>

          <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input  
          type="number" 
          name = "longitude" 
          id = "longitude" onChange={e => setLongitude(e.target.value)} 
          value={longitude}  required />
          </div>
          </div>
          <button type="submit">Save</button>
        </form>
)
}

export default DevForm;