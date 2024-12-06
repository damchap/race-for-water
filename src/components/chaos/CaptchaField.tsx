import { useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import AttestationVeracite from '../../assets/images/attestationVeracite.png';

const CaptchaField = ({
  value,
  onChange,
  onValidityChange,
  referenceValue,
}: {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
  referenceValue: string;
}) => {
  useEffect(() => {
    const isValid = value === referenceValue;
    onValidityChange(isValid);
  }, [value]);

  return (
    <Box>
      <Box sx={{ marginBottom: '10px' }}>
        <p>Recopiez</p>
        <img src={AttestationVeracite} alt="Attestation de véracité" />
      </Box>
      <TextField
        label="Captcha"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default CaptchaField;
