import React from "react";
import axios from "axios";

import './App.css'


class App extends React.Component {
    state = { advice: '' }
    componentDidMount() {
        this.apiFetch();
    }
    apiFetch = () => {
        axios.get('	https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip
                //if have diff name setstate use as this.setstate({advice:advice}) both are correct
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <>
                <div className="app">
                    <div className="card">
                        <p className="heading">
                            {advice}
                        </p>
                        <button className="button" onClick={this.apiFetch}>
                            <span>Give me advice</span>
                        </button>
                    </div>
                </div>

            </>
        )
    }
}

export default App