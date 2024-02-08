// EditModelComponent.js
import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';
import styles from './EditModelComponent.module.css';

const EditModelComponent = ({ editData, onEdit, onCancelEdit }) => {
  const [formData, setFormData] = useState(editData);

  useEffect(() => {
    setFormData(editData);
  }, [editData]);

  return (
    <div className={styles.editModelContainer}>
      <h2>Edit Form</h2>
      <FormComponent
        onSubmit={() => onEdit(editData.index, formData)}
        onCancelEdit={onCancelEdit}
        editData={formData}
      />
    </div>
  );
};

export default EditModelComponent;
