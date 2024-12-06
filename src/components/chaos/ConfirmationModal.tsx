import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmationModalProps {
  open: boolean;
  content: string;
  onClose: () => void;
  onConfirm: (confirmed: boolean) => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ open, content, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          color: 'black',
          padding: 2,
          borderRadius: 2,
          boxShadow: 24,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {content}
        </Typography>
        <Box>
          {content === "Voulez-vous confirmer ?" && (
            <>
              <Button onClick={() => onConfirm(true)} sx={{ marginRight: 1 }}>
                Oui
              </Button>
              <Button onClick={() => onConfirm(false)}>Non</Button>
            </>
          )}
          {content === "Avez-vous bien vérifié vos données ?" && (
            <>
              <Button onClick={() => onConfirm(true)} sx={{ marginRight: 1 }}>
                Oui
              </Button>
              <Button onClick={() => onConfirm(false)}>Non</Button>
            </>
          )}
          {content === "Appuyez sur valider pour compléter le formulaire" && (
            <>
              <Button onClick={() => onConfirm(true)}>Valider</Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
