import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';

export const BotonCancelar = ({ isDisabled, onClick }) => {

    // console.log(`isDisabled ${isDisabled}`)

    const [disabled, setDisabled] = useState(isDisabled);

    // console.log(`disabled ${disabled}`)

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);

    return (
        <>
            <Button
                startIcon={<CancelIcon />}
                disabled={disabled}
                onClick={onClick}>
                Cancelar primer trabajo en cola
            </Button>
        </>
    )
}

BotonCancelar.propTypes = {
    printer: PropTypes.string,
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
}