import React , {useEffect,useState} from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './DevItem';
import DevForm from './DevForm';

function App() {
  const [devs, setD] = useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const resp = await api.get('/dev');
      setD(resp.data);
    }

    loadDevs();
  },[]);
  async function handleAddDev(data) {

    const response = await api.post('/devs',data);


      setD([...devs,response.data]);
  };
  return (
    <div id= "app"> 
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
        
        {devs.map(dev => (
          <DevItem dev = {dev}  key = {dev._id}/>
         ))}
             
        </ul>
      </main>
    </div>
  );
}

export default App;
