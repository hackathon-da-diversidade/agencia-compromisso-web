import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';

import bustMeasure from '../../../../assets/bustMeasure.jpg';
import hipMeasure from '../../../../assets/hipMeasure.jpg';
import waistMeasure from '../../../../assets/waistMeasure.jpg';

import NumberField from '../../../../components/Field/NumberField';

import classes from './MeasuresForm.module.css';
import CheckboxField from '../../../../components/Field/CheckboxField';

export default ({ data = {}, onChange }) => {
  const sizes = data.sizes || {};
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const onChangeSizes = (measures) => {
    return onChange({ sizes: { ...sizes, ...measures } });
  };

  const handleOpen = (image) => {
    setOpen(true);
    setCurrentImage(image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderModal = () => (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.Modal}>
        <CloseIcon
          className={classes.CloseIcon}
          onClick={() => handleClose()}
        />
        <img
          className={classes.ModalImage}
          src={currentImage.url}
          alt={currentImage.alt}
        />
      </div>
    </Modal>
  );

  return (
    <Formik initialValues={{ ...sizes }} enableReinitialize="true">
      {() => (
        <Form>
          <div className={classes.SizeField}>
            <NumberField
              name="totalBustCircumference"
              label="Circunferência total do busto (cm)"
              infoAction={() =>
                handleOpen({
                  url: bustMeasure,
                  alt:
                    'Imagem de uma pessoa medindo circunferência de seu busto',
                })
              }
              onChange={onChangeSizes}
              value={sizes.totalBustCircumference}
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="totalWaistCircumference"
              label="Circunferência total da cintura alta (cm)"
              infoAction={() =>
                handleOpen({
                  url: waistMeasure,
                  alt:
                    'Imagem de uma pessoa medindo circunferência de sua cintura',
                })
              }
              onChange={onChangeSizes}
              value={sizes.totalWaistCircumference}
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="totalHipCircumference"
              label="Circunferência total do quadril (cm)"
              infoAction={() =>
                handleOpen({
                  url: hipMeasure,
                  alt:
                    'Imagem de uma pessoa medindo circunferência de seu quadril',
                })
              }
              onChange={onChangeSizes}
              value={sizes.totalHipCircumference}
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="height"
              label="Altura (cm)"
              onChange={onChangeSizes}
              value={sizes.height}
            />
          </div>
          <div>
            <CheckboxField
              type="radio"
              name="shirtSize"
              id="shirtSize"
              label="Tamanho da camiseta"
              onChange={onChangeSizes}
              value={sizes.shirtSize}
              options={[
                { value: 'P', label: 'P' },
                { value: 'M', label: 'M' },
                { value: 'G', label: 'G' },
                { value: 'GG', label: 'GG' },
              ]}
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              id="pantsSize"
              name="pantsSize"
              label="Tamanho da calça"
              onChange={onChangeSizes}
              value={sizes.pantsSize}
            />
            <NumberField
              id="shoeSize"
              name="shoeSize"
              label="Tamanho do calçado"
              onChange={onChangeSizes}
              value={sizes.shoeSize}
            />
          </div>
          {renderModal()}
        </Form>
      )}
    </Formik>
  );
};
