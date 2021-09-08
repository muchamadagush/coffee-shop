import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const InputField = ({className, label, name, value, onChange, type}) => {
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
           />
        </Styles>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
}
export default InputField
const Styles = styled.div`






`