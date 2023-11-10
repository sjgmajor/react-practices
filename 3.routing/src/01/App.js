import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {

    useEffect( () =>{
        window.addEventListener('hashchange', handlerHashChange);
        
        return () =>{
            window.removeEventListener('hashchange', handlerHashChange);
        }

    }, []);

    const handlerHashChange = () => {
        console.log(window.location.hash);
    }

    return (<div>Hash Route 직접 만들어 보기</div>);
}