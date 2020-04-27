import React from 'react'
import './forms.css';
export const Form = ({children,method,onSubmit,action,style}) => {
    return (
        <form method={method} onSubmit={onSubmit} action={action} style={style}>
            {children}
        </form>
    )
}
