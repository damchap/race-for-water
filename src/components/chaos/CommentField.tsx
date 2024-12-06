import { useEffect } from 'react';
import { TextField } from '@mui/material';

const CommentField = ({
  value,
  onChange,
  onValidityChange,
}: {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
}) => {
  useEffect(() => {
    const isValid = value.trim().length >= 200;
    onValidityChange(isValid);
  }, [value]);

  return (
    <TextField
      label="Commentaire (200 caractères minimum)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      multiline
      rows={4}
      fullWidth
      sx={{ marginBottom: '10px' }}
    />
  );
};

export default CommentField;
