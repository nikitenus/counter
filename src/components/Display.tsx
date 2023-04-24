import React from 'react';
import s from './Display.module.css'


type PropsType = {
    counter: number
    error: boolean
}

export const Display: React.FC<PropsType> = ({
                                                 counter,
                                                 error,
                                                 ...rest
                                             }) => {
    return (
        <div className={s.display}>
            <div className={error ? s.errorMessage : ""}>
                {error ? "Incorrect value!" : counter}
            </div>
        </div>
    );
};