import React from 'react';
import { Container, Form, Control, InputLabel, InputField } from './styles/search';

function Search({ children, ...restProps }) {
	return(

    <Container { ...restProps }>
      <Form>
        <Control>{ children }</Control>
      </Form>
    </Container>

	)
}

Search.InputLabel = function SearchLabel({ children, ...restProps }) {
  return <InputLabel {...restProps}>{ children }</InputLabel>;
};

Search.InputField = function SearchField({ children, ...restProps }) {
  return <InputField  {...restProps} />;
}

export default Search;