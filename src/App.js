import logo from './logo.svg';
import './App.css';
import equi from './equi.jpg';
import eth from './eth.svg';
import clock from './clock.svg';
import avatar from './avatar.png';
import view from './view.svg';

function App() {
  return (
   <div>
      <div className = "card">
      <div className="equibox">
          <img className ="equilibrium" src={equi} alt="Logo" />
          <img className ="view" src={view} alt="view" />
       
      </div>
     
      <h1>Equilibrium #3429</h1>
      <p className="text">Our Equilibrium collection promotes balance and calm.</p>
      <div className ="section">
          <div className ="etherium">
              <img src = {eth} alt= "etherium" />
              <p className ="eth-text">0.041 ETH</p>
          </div> 
          <div className = "clockbox">
              <img src = {clock} alt= "clock" />
              <p className="clock-text">3 days left</p>
          </div>
          
      </div>
      <div className="line"></div>
      <footer className="footer">
        <img  className = "avatar"src ={avatar} alt = "avatar"/>
        <p className="footertext">Creation of</p>
        <p className="name">Jules Wyvern </p>
      </footer>
          
      </div>
   </div>
  );
}

export default App;
