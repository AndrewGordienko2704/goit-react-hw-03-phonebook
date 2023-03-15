import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px 0 20px;
  color: #blue;
  text-align: center;
  background-color: #blue;
  box-shadow: rgb(0 0 0 / 20%) -3px 3px 3px 0px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px; ;
`;

export const Title = styled.h1`
  font-size: 38px;
`;

export const FormsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContactsTitle = styled.h2`
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const ContactListBox = styled.div`
  font-size: 22px;
`;

export const Notification = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  color: red;
`;