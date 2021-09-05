import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const InputField = ({className, label, name, value, onChange, type, defaultValue}) => {
    return (
        <Styles>
            <TextField
            className={`input ${className}`}
            id="standard-basic"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            defaultValue={defaultValue}/>
        </Styles>
    )
}

export default InputField
const Styles = styled.div`






`