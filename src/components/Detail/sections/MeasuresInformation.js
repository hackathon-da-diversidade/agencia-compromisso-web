import React from 'react';
import Information from '../../UI/Information/Information';

const MeasuresInformation = ({ data }) => (
  <>
    <h1>MEDIDAS:</h1>
    <Information label="Circunferência total do busto (cm):">
      {data.totalBustCircumference}
    </Information>
    <Information label="Circunferência total da cintura alta(cm):">
      {data.totalWaistCircumference}
    </Information>
    <Information label="Circunferência total do quadril (cm):">
      {data.totalBustCircumference}
    </Information>
    <Information label="Altura (cm):">
      {data.totalBustCircumference}
    </Information>
  </>
);

export default MeasuresInformation;
