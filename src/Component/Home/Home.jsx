import './Banner.css'
import Banner from "./Banner/Banner";
import Cards from './Cards/Cards';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Home;