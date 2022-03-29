import Carrousel from '../components/Carrousel'
import Video from '../img/video2.mp4'
import '../styles/home.css'
import { Link as LinkRouter } from "react-router-dom"




function Home() {
    return (
        <main className='home' >
            <video playsInline autoPlay muted loop className='myVideo'>
                <source src={Video} type="video/mp4" />
            </video>
            <div className='home2' >
                <h1 className='title' >MyTinerary</h1>
                <h2 className='title2' >"Find your perfect trip,
                    designed by insiders who know and love their cities,!"</h2>
                <div className='button1' >
                    <button className='ButtonMain' >
                        <LinkRouter to="Cities"><span>¡Start Now!</span></LinkRouter>
                        <div class="liquid"></div>
                    </button>
                </div>

            </div>

            <Carrousel />
        </main>
    )
}

export default Home;
