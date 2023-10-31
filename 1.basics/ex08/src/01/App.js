import React from 'react';

/*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.

    오류:
    return (
        <h2>01</h2>
        <p>특징2: single root</p>
    )

    이유:
    1) transpile 오류
    return (
        React.createElement('h2', null, '01')
        React.createElement('p', null, '특징2: single root')
    );

    2)
    return (
        React.createElement('div', null, React.createElement('h2', null, '01'), React.createElement('p', null, '특징2: single root'))
    );
*/

function App() {
    return (
        <div>
            <h1>01</h1>
            <p>특징2: single root</p>
        </div>
    );
}

export {App};