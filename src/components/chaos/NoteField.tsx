import { useEffect, useState } from 'react';
import { Slider, Box } from '@mui/material';

const NoteField = ({
  value,
  onChange,
  onValidityChange,
}: {
  value: number;
  onChange: (value: number) => void;
  onValidityChange: (isValid: boolean) => void;
}) => {
  const [sliderValue, setSliderValue] = useState<number>(value);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const isValid = sliderValue >= 0 && sliderValue <= 10;
    onValidityChange(isValid);
  }, [sliderValue]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      const preciseValue = parseFloat(newValue.toFixed(2));
      setSliderValue(preciseValue);
      onChange(preciseValue);
    }
  };

  return (
    <Box>
      <p style={{ color: getRandomColor() }}>Note : {sliderValue.toFixed(2)}</p>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        min={0}
        max={10}
        step={0.01}
        sx={{ width: '100%' }}
      />
    </Box>
  );
};

export default NoteField;
