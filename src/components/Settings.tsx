import React, {ChangeEvent, useState} from 'react';
import Button from "./Button";
import s from './Counter.module.css'

type PropsType = {
    changeMaxValue: (number: number) => void
    changeStartValue: (number: number) => void
    setError: (error: boolean) => void
    error: boolean
    maxValue: number
}

const Settings: React.FC<PropsType> = ({
                                           changeMaxValue,
                                           changeStartValue,
                                           setError,
                                           error,
                                           maxValue,
                                           ...rest
                                       }) => {
    const [newMaxValue, setNewMaxValue] = useState<number>(Number(localStorage.getItem("max")))
    const [newStartValue, setNewStartValue] = useState<number>(Number(localStorage.getItem("start")))

    const onChangeHandlerStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        event.currentTarget.valueAsNumber < 0 ? setError(true) : setError(false)
        setNewStartValue(event.currentTarget.valueAsNumber)
        localStorage.setItem("start", JSON.stringify(event.currentTarget.valueAsNumber))
    }
    const onChangeHandlerMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        event.currentTarget.valueAsNumber >= 0
        && event.currentTarget.valueAsNumber !== newStartValue
            ? setError(false) : setError(true)
        setNewMaxValue(event.currentTarget.valueAsNumber)
        localStorage.setItem("max", JSON.stringify(event.currentTarget.valueAsNumber))
    }

    function setSettings() {
        changeMaxValue(newMaxValue);
        changeStartValue(newStartValue)
        setError(false)
    }

    return (
        <div className={s.counterSettings}>
            <div>
                <div className={s.values}>
                    max vlaue: <input className={error ? s.error : ""} type="number" value={newMaxValue} onChange={onChangeHandlerMaxValue}/>
                </div>
                <div className={s.values}>
                    start value: <input className={error ? s.error : ""} type="number" value={newStartValue}
                                        onChange={onChangeHandlerStartValue}/>
                </div>
            </div>
            <div>
                <Button
                    disableExpression={newStartValue < 0 || newMaxValue <= newStartValue}
                    callBack={setSettings}
                    name={"set"}/>
            </div>
        </div>
    );
};

export default Settings;