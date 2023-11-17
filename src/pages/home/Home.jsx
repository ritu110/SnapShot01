import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';
const Home = ({handleOnChange, handleOnClick}) =>{
    return(
        <div className="home">
            <Header handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
            <Gallery />
        </div>
    )
}

export default Home;