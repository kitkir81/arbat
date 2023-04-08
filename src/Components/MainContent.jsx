import { Route,Routes } from "react-router-dom";
import TextComponent from "./TextComponent";

export default function MainContent(props){

    const text = props.data

    return(
        <section  className="content">
            <Routes>
                {text.map((e) => <Route key={e} path={e.name} element = {<TextComponent name = {e.name}/>}/>)}
            </Routes>
            
        </section>
    )
}