

// App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import EditModelComponent from './EditModelComponent';
import styles from './App.css';

function App() {
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState(null);

  const addFormData = (data) => {
    setFormData([...formData, data]);
  };

  const editRow = (index) => {
    setEditData({ ...formData[index], index });
  };

  const cancelEdit = () => {
    setEditData(null);
  };

  const updateRow = (index, data) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = data;
    setFormData(updatedFormData);
    setEditData(null);
  };

  const deleteRow = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  return (
    <div className={styles.App}>
      <FormComponent onSubmit={addFormData} />
      <TableComponent
        data={formData}
        onEdit={editRow}
        onDelete={deleteRow}
      />
      {editData && (
        <EditModelComponent
          editData={editData}
          onEdit={updateRow}
          onCancelEdit={cancelEdit}
        />
      )}
    </div>
  );
}




export default App;
