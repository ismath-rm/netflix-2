import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { Originals,action,ComedyMovies,HorrorMovies,RomanceMovies } from './Urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
    </div>
  );
};

export default App;
