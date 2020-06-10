import React from 'react';
import CheckboxField from '../../../../../components/Field/CheckboxField';
import NumberField from '../../../../../components/Field/NumberField';

const ChildrenInformationField = ({
  socialInformation,
  onChangeSocialInformation,
}) => {
  const handleHasChildren = ({ hasChildren }) => {
    onChangeSocialInformation({
      numberOfChildren:
        hasChildren === 'yes' ? socialInformation.numberOfChildren : null,
      hasChildren,
    });
  };
  return (
    <>
      <CheckboxField
        type="radio"
        name="hasChildren"
        label="Tem filhos?"
        onChange={handleHasChildren}
        value={
          socialInformation.hasChildren ? socialInformation.hasChildren : 'no'
        }
        options={[
          { value: 'yes', label: 'Sim' },
          { value: 'no', label: 'Não' },
        ]}
      />
      {socialInformation.hasChildren === 'yes' && (
        <NumberField
          name="numberOfChildren"
          label="Quantos?"
          onChange={onChangeSocialInformation}
          value={socialInformation.numberOfChildren}
        />
      )}
    </>
  );
};

export default ChildrenInformationField;
