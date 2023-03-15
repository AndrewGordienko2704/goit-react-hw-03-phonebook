import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
  display: block;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 20px;
`;

export const AddContactButton = styled.button`
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #3acdcd;
  border-radius: 4px;
  transition: 300ms;
  cursor: pointer;
  background-color: #6cc853;
  &:hover {
    scale: 1.03;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;