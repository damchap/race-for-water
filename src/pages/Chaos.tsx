import { Box, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importation de toast et ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importation des styles de toast
import AgeField from '../components/chaos/AgeField';
import CaptchaField from '../components/chaos/CaptchaField';
import CommentField from '../components/chaos/CommentField';
import FirstNameField from '../components/chaos/FirstNameField';
import NameField from '../components/chaos/NameField';
import NoteField from '../components/chaos/NoteField';
import SatisfactionField from '../components/chaos/SatisfactionField';

import FormulaireSatisfaction from '../assets/images/formulaireSatisfaction.gif';
import ConfirmationModal from '../components/chaos/ConfirmationModal';

const Chaos = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    age: '',
    comment: '',
    satisfaction: null,
    note: 0,
    captcha: '',
  });
  const [validity, setValidity] = useState({
    name: false,
    firstName: false,
    age: false,
    comment: false,
    satisfaction: false,
    note: false,
    captcha: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);

  const captchaReference = "J'atteste de la véracité de mes informations personnelles et de la sincérité de mon feedback";

  const handleValidityChange = (field: keyof typeof validity, isValid: boolean) => {
    setValidity((prev) => ({ ...prev, [field]: isValid }));
  };

  const handleChange = (field: keyof typeof formData, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return validity.name;
      case 1:
        return validity.age;
      case 2:
        return validity.comment;
      case 3:
        return validity.satisfaction;
      case 4:
        return validity.note;
      case 5:
        return validity.firstName;
      case 6:
        return validity.captcha;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep((prev) => prev + 1);
      }, 2000);
    } else {
      alert('Veuillez remplir correctement le champ avant de continuer.');
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep((prev) => prev - 1);
      }, 2000);
    }
  };

  const openConfirmationModal = () => {
    setModalContent("Voulez-vous confirmer ?");
    setOpenModal(true);
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setIsFormValid(true);
      setModalContent("Avez-vous bien vérifié vos données ?");
    } else {
      setOpenModal(false); // Fermeture si "Non" à la confirmation initiale
    }
  };

  const handleFinalConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setModalContent("Appuyez sur valider pour compléter le formulaire");
    } else {
      setOpenModal(false); // Fermeture si "Non" à la vérification des données
    }
  };

  const submitForm = () => {
    if (isFormValid) {
      // Affichage du toast
      toast.success("Soumission réussie", {
        position: "bottom-left", // Position du toast
        autoClose: 5000, // Durée d'affichage (en ms)
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: 'red', color: 'white' },
      });
      setOpenModal(false); // Fermeture de la modale de confirmation après soumission
    }
  };

  return (
    <div className="green-body w-screen h-screen m-auto">
      <div className="flex gap-4 flex-col items-center m-auto">
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={FormulaireSatisfaction} alt="Formulaire de satisfaction" />
        </Box>
        <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#FAFAFA' }}>
          {loading ? (
            <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
              <CircularProgress />
              <p>Chargement...</p>
            </Box>
          ) : (
            <>
              {step === 0 && (
                <NameField
                  value={formData.name}
                  onChange={(value) => handleChange('name', value)}
                  onValidityChange={(isValid) => handleValidityChange('name', isValid)}
                />
              )}
              {step === 1 && (
                <AgeField
                  value={formData.age}
                  onChange={(value) => handleChange('age', value)}
                  onValidityChange={(isValid) => handleValidityChange('age', isValid)}
                />
              )}
              {step === 2 && (
                <CommentField
                  value={formData.comment}
                  onChange={(value) => handleChange('comment', value)}
                  onValidityChange={(isValid) => handleValidityChange('comment', isValid)}
                />
              )}
              {step === 3 && (
                <SatisfactionField
                  value={formData.satisfaction}
                  onChange={(value) => handleChange('satisfaction', value)}
                  onValidityChange={(isValid) => handleValidityChange('satisfaction', isValid)}
                />
              )}
              {step === 4 && (
                <NoteField
                  value={formData.note}
                  onChange={(value) => handleChange('note', value)}
                  onValidityChange={(isValid) => handleValidityChange('note', isValid)}
                />
              )}
              {step === 5 && (
                <FirstNameField
                  value={formData.firstName}
                  onChange={(value) => handleChange('firstName', value)}
                  onValidityChange={(isValid) => handleValidityChange('firstName', isValid)}
                />
              )}
              {step === 6 && (
                <CaptchaField
                  value={formData.captcha}
                  onChange={(value) => handleChange('captcha', value)}
                  onValidityChange={(isValid) => handleValidityChange('captcha', isValid)}
                  referenceValue={captchaReference}
                />
              )}
              <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                <Button onClick={previousStep} disabled={step === 0}>
                  Précédent
                </Button>
                {step < 7 ? (
                  <Button onClick={nextStep} sx={{ marginLeft: '10px' }}>
                    Suivant
                  </Button>
                ) : (
                  <Button onClick={openConfirmationModal} sx={{ marginLeft: '10px' }}>
                    Soumettre
                  </Button>
                )}
              </Box>
            </>
          )}
        </Box>
      </div>
      <div className="gif-border" />
      
      {/* Confirmation Modal */}
      <ConfirmationModal
        open={openModal}
        content={modalContent}
        onClose={() => setOpenModal(false)}
        onConfirm={
          modalContent === "Voulez-vous confirmer ?"
            ? handleConfirmation
            : modalContent === "Avez-vous bien vérifié vos données ?"
            ? handleFinalConfirmation
            : submitForm
        }
      />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Chaos;
