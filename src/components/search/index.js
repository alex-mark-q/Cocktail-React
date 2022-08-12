import React, { useContext } from 'react';
import { Container, Form, Control, InputLabel, InputField } from './styles/search';


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

Search.InputField = function SearchField({ children, ...restProps }) {
  return <InputField  {...restProps} />;
}

export default Search;