import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';

export default function SearchInput() {
  function setKeyword(value) {}
  function goToUser(value) {}
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={goToUser}
      style={{ width: '100%' }}
      options={[]}
      autoFocus
    >
      <Input.Search
        size='large'
        placeholder='input here'
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
}
