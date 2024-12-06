import { useEffect } from 'react';
import { Button, Box } from '@mui/material';

const SatisfactionField = ({
  value,
  onChange,
  onValidityChange,
}: {
  value: boolean | null;
  onChange: (value: boolean) => void;
  onValidityChange: (isValid: boolean) => void;
}) => {
  useEffect(() => {
    onValidityChange(value !== null);
  }, [value, onValidityChange]);

  return (
    <Box>
      <p className=' text-lime-300'>Êtes-vous insatisfait ?</p>
      <Button
        variant={value === true ? 'contained' : 'outlined'}
        color="error"
        onClick={() => onChange(true)}
        sx={{ marginRight: '10px' }}
      >
        Oui
      </Button>
      <Button
        variant={value === false ? 'contained' : 'outlined'}
        color="success"
        onClick={() => onChange(false)}
      >
        Non
      </Button>
    </Box>
  );
};

export default SatisfactionField;
