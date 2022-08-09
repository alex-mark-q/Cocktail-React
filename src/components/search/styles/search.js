import styled from 'styled-components/macro';

export const Container = styled.section`
  padding: 5rem 0;
  margin-top: 1rem;
  padding-bottom: 0;
`;
export const Form = styled.form`
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--mainWhite);
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: var(--mainBorderRadius);
  box-shadow: var(--lightShadow);
`;

export const Control = styled.div`

`;
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: var(--primaryColor);
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  border-color: transparent;
  background: var(--mainBackground);
  border-radius: var(--mainBorderRadius);
  padding: 0.5rem;
  font-size: 1.2rem;
`;