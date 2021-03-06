import React from 'react';
import Information from '../../../../components/Information/Information';

const MeasuresInformation = ({ data }) =>
  data ? (
    <>
      <h1>MEDIDAS:</h1>
      <Information
        id="totalBustCircumference"
        label="Circunferência total do busto (cm):"
      >
        {data.totalBustCircumference}
      </Information>
      <Information
        id="totalWaistCircumference"
        label="Circunferência total da cintura alta(cm):"
      >
        {data.totalWaistCircumference}
      </Information>
      <Information
        id="totalHipCircumference"
        label="Circunferência total do quadril (cm):"
      >
        {data.totalHipCircumference}
      </Information>
      <Information id="height" label="Altura (cm):">
        {data.height}
      </Information>
      <Information id="shirtSize" label="Tamanho de camiseta:">
        {data.shirtSize}
      </Information>
      <Information id="pantsSize" label="Tamanho de calça:">
        {data.pantsSize}
      </Information>
      <Information id="shoeSize" label="Tamanho do calçado:">
        {data.shoeSize}
      </Information>
    </>
  ) : null;

export default MeasuresInformation;
