import React, { useState, useEffect, createContext, useContext } from 'react';

const themes = {
    light: {
        background: "#eee"
    },
    dark: {
        background: "#000"
    }
};

const ThemeCTX = createContext(themes.light);
// hooks
const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <ThemeCTX.Provider value={themes.dark}>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
            </button>
                <Test></Test>
            </div>
        </ThemeCTX.Provider>
    )
}

export default App

const Test = () => {
    const theme = useContext(ThemeCTX);

    return (
        <div style={theme}>test</div>
    )
}