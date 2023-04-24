import React from 'react';
import Button from "./Button";
import s from './Counter.module.css'
import {Display} from "./Display";

type PropsType = {
    counter: number
    incNumb: () => void
    reset: () => void
    maxValue: number
    error: boolean
}

const Counter: React.FC<PropsType> = ({
                                          counter,
                                          incNumb,
                                          reset,
                                          maxValue,
                                          error,
                                          ...rest
                                      }) => {

    function incHandler() {
        incNumb()
    }

    return (
        <div className={s.counter}>
            <div>
                <Display counter={counter} error={error}/>
            </div>
            <div className={s.buttons}>
                <Button disableExpression={counter > maxValue || counter === maxValue} callBack={incHandler}
                        name={"inc"}/>
                <Button disableExpression={maxValue == 0} callBack={reset} name={"reset"}/>
            </div>
        </div>
    );
};

export default Counter;