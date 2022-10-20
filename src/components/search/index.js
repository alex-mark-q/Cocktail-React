import React, { useContext, useState } from 'react';
import { Container, Form, Control, InputLabel, InputField } from './styles/search';
import { FeatureContext } from '../../context/feature';

function Search({ children, ...restProps }) {
	return(

    <Container { ...restProps }>
      { children }
    </Container>

	)
}

Search.Form = function SeerchForm({ children, ...restProps }) {
  return <Form { ...restProps }> { children } </Form>
};

Search.Control = function SeerchControl({ children, ...restProps }) {
  return <Control { ...restProps }> { children } </Control>
};

Search.InputLabel = function SearchLabel({ children, ...restProps }) {
  return <InputLabel {...restProps}>{ children }</InputLabel>;
};

Search.InputField = function SearchField({ searchTerm, handleChange, ...restProps }) {

  return (
    <InputField
      type="text" 
      placeholder="Search" 
      value = {searchTerm} 
      onChange = {handleChange}
    />

  )
}

export default Search;