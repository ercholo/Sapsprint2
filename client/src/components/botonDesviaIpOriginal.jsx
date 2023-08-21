import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import MergeIcon from '@mui/icons-material/Merge';

export const BotonDesviaIpOriginal = ({ printer, isDisabled }) => {

    const handleClick = async(printer) => {

        console.log(`Impresora devuelta a su sitio original ${printer}`);    

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/desviaIpOriginal`, {
                method: 'GET'
            });
            const { desviadaOriginal } = await res.json();
            // desviadaOriginal?isDisabled
            
            console.log(desviadaOriginal);
        } catch (error) {
            console.log(error);
        }
    }

    //Lo ejecuta una vez para todas las impresoras
    // useEffect(() => {
    //     handleClick();
    // }, [handleClick]);

    return (
        <>
            <Button               
                startIcon={<MergeIcon />}
                disabled = {isDisabled}
                onClick={() =>
                    handleClick(printer)}>
                Desviar a su sitio original
            </Button>
        </>
    )
}

BotonDesviaIpOriginal.propTypes = {
    printer: PropTypes.string,
    isDisabled: PropTypes.bool
}