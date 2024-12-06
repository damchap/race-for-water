import { useEffect } from 'react';
import { TextField } from '@mui/material';

const FirstNameField = ({
  value,
  onChange,
  onValidityChange,
}: {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
}) => {
  useEffect(() => {
    const isValid = value?.trim() !== '';
    onValidityChange(isValid);
  }, [value]);

  return (
    <TextField
      label="Prénom"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ marginBottom: '10px' }}
    />
  );
};

export default FirstNameField;
