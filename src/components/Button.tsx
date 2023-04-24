import React from 'react';
import s from './Button.module.css'

type PropsType = {
    callBack: () => void
    name: string
    disableExpression: boolean
}

const Button: React.FC<PropsType> = (
    {
        name,
        callBack,
        disableExpression,
        ...rest
    }
) => {

    function onClickHandler() {
        callBack()
    }

    return (
        <div className={s.button}>
            <button disabled={disableExpression} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;