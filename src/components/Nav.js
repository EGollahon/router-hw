import { Link } from 'react-router-dom';

function Nav() {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        width: '200px',
        justifyContent: 'space-between'
    }

    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <nav style={navStyle}>
            <div style={style}>
                <Link to={"/"}>Home</Link>
                <Link to={"/data"}>Data</Link>
                <Link to={"/cool"}>Cool</Link>
            </div>
        </nav>
    )
}

export default Nav;