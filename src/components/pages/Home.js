import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => {navigate('red')}}
                 style={{backgroundColor: 'red', height: '200px', width: '200px', marginBottom: '30px'}}></div>
            <div onClick={() => {navigate('blue')}}
                 style={{backgroundColor: 'blue', height: '200px', width: '200px', marginBottom: '30px'}}></div>
            <div onClick={() => {navigate('green')}}
                 style={{backgroundColor: 'green', height: '200px', width: '200px'}}></div>
        </div>
    )
}

export default Home;