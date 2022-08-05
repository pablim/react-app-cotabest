import React from "react";
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { connect } from "react-redux";

import './search.scss'
import { 
    updateList
  } from "../../store/actions/characters";

const Search = (props) => {

  const onSearchChange = (e) => {
      props.onChange(e.target.value)
  }

  return (
    <div className='d-flex justify-content-center p-5'>
        <Input
          role="search-input"
          className="search-input rounded-5 w-75"
          size="large"
          allowClear
          defaultValue=""
          placeholder="Procure um personagem"
          onChange={onSearchChange}
          prefix={<SearchOutlined />}/>
    </div>
  )
}

const mapDispatchToProps = (dispactch) => {
    return {
      onChange(term) {
        dispactch(updateList(term))
      }
    }
  }
  
export default connect(
    null, 
    mapDispatchToProps
)(Search);
  

