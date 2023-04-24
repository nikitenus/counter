import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error, setError] = useState(false)

    function incNumb() {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    function reset() {
        setCounter(0)
    }

    function changeMaxValue(number: number) {
        setMaxValue(number)
    }

    function changeStartValue(number: number) {
        setCounter(number)
    }

    return (
        <div className="App">
            <Settings
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setError={setError}
                error={error}
                maxValue={maxValue}
            />
            <Counter
                counter={counter}
                incNumb={incNumb}
                reset={reset}
                maxValue={maxValue}
                error={error}
            />
        </div>
    );
}

export default App;
