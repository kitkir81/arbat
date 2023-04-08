import { NavLink } from "react-router-dom"

export default function Header(props){

    const list = props.data

    return(
        <header>
            <div className="header__text">
                <h2>ЦЕНТР <span className="black">БЫТОВЫХ УСЛУГ</span></h2>
            </div>
            <nav className="navlist">
                <button className="navlist__element white">Магазин</button>
                {
                    list.map((e) => 
                        <NavLink key={e.name} to={e.name} className="navlist__element">
                            <span style={{'color':e.color}} className="navlist__element-text">{e.name}</span>
                        </NavLink>)
                }
            </nav>
        </header>
    )
}