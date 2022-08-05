import './App.css';
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";

import Title from './components/Title/Title'
import Search from './components/Search/Search';
import List from './components/List/List';
import { 
  fetchList
} from "./store/actions/characters";

function App(props) {

  const { onMount } = props

  useEffect(() => {
    onMount()
  }, [])

  return (
    <div className="App">
      <Container 
        className='p-4'
        fluid  
      >
        <div className='d-flex flex-column'>
          <Title />
          <Search  />
          <List characterList={props.list} />
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.characterList.list
  }
}

const mapDispatchToProps = (dispactch) => {
  return {
    onMount() {
      dispactch(fetchList())
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
