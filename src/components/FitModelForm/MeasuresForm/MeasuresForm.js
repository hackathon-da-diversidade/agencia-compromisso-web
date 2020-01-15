import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';

import NumberField from '../../UI/Field/NumberField';

import classes from './MeasuresForm.module.css';

export default ({ data = {}, onChange }) => {
  const [open, setOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState();

  const onChangeSizes = measures => {
    return onChange({ sizes: { ...data.sizes, ...measures } });
  };

  const handleOpen = url => {
    setOpen(true);
    setCurrentImageUrl(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderModal = () => (
    <Modal open={open} onClose={handleClose}>
      <>
        <img
          className={classes.ModalImage}
          src={currentImageUrl}
          alt="Imagem explicativa de como realizar a medida"
        />
        <CloseIcon
          className={classes.CloseIcon}
          onClick={() => handleClose()}
        />
      </>
    </Modal>
  );

  return (
    <Formik
      initialValues={{ ...data.sizes }}
      enableReinitialize="true"
      render={() => (
        <Form>
          <div className={classes.SizeField}>
            <NumberField
              name="totalBustCircumference"
              label={
                <>
                  Circunferência total do busto (cm)
                  <InfoIcon
                    className={classes.InfoIcon}
                    onClick={() =>
                      handleOpen(
                        'https://cdn.doyouyoga.com/wp/2017/01/dog-meme-11.png'
                      )
                    }
                  />
                </>
              }
              onChange={onChangeSizes}
              required
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="totalWaistCircumference"
              label={
                <>
                  Circunferência total da cintura alta (cm)
                  <InfoIcon
                    className={classes.InfoIcon}
                    onClick={() =>
                      handleOpen('https://i.imgur.com/RHpy3Ho.jpg')
                    }
                  />
                </>
              }
              onChange={onChangeSizes}
              required
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="totalHipCircumference"
              label={
                <>
                  Circunferência total do quadril (cm)
                  <InfoIcon
                    className={classes.InfoIcon}
                    onClick={() =>
                      handleOpen(
                        'https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500'
                      )
                    }
                  />
                </>
              }
              onChange={onChangeSizes}
              required
            />
          </div>
          <div className={classes.SizeField}>
            <NumberField
              name="height"
              label={
                <>
                  Altura (cm)
                  <InfoIcon
                    className={classes.InfoIcon}
                    onClick={() =>
                      handleOpen(
                        'https://images.theconversation.com/files/304124/original/file-20191127-112526-ig1snl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip'
                      )
                    }
                  />
                </>
              }
              onChange={onChangeSizes}
              required
            />
          </div>
          {renderModal()}
        </Form>
      )}
    />
  );
};
