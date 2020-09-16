import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useSelector } from 'react-redux';

export default function Department() {
  const [isEditDepartment, setIsEditDepartment] = useState(false);
  const [tempDepartment, setTempDepartment] = useState('');
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {isEditDepartment && (
        <Input
          autoFocus
          value={tempDepartment}
          onChange={(e) => setTempDepartment(e.target.value)}
          onPressEnter={() => {}}
          onBlur={() => setIsEditDepartment(false)}
          style={{ width: '100%' }}
        />
      )}
      {!isEditDepartment && (
        <Button
          type='text'
          block
          onClick={() => {}}
          style={{ textAlign: 'left', padding: 0 }}
        >
          {user.department}
        </Button>
      )}
    </>
  );
}
