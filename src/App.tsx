import React from "react";
import "./App.css";

import MainWrapper from "./MainWrapper";

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div className="App">
                <MainWrapper />
            </div>
        );
    }
}

export default App;
