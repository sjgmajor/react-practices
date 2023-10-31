import React, { Component } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

class Contents extends Component {
    render() {
        return (
            <>
                <p>특징3: JSX 표현식 표기법</p>
                <Clock01 />
                <Clock02 />
            </>
        );
    }
}

export default Contents;