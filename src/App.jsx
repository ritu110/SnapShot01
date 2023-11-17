import Home from './pages/home/Home';
import {createContext} from 'react';
const GalleryContext = createContext();
import {useState} from 'react';

const App = () => {
  const [searchKw, setSearchKw] = useState('');
  const handleOnClick = keyword =>{
    setSearchKw(keyword);
  }
  const handleOnChange = event =>{
    let inputValue = event.target.value;
    inputValue = inputValue && (inputValue[0].toUpperCase() + inputValue.slice(1).toLowerCase());
    setSearchKw(inputValue);
  }
  return (
    <div className="App">
      <GalleryContext.Provider value={searchKw}>
        <Home handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      </GalleryContext.Provider>
    </div>
  )
}

export default App
export {GalleryContext};
