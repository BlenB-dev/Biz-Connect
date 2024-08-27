import React from 'react';
import styled from 'styled-components';
import DetailsBar from '../DetailsBar';
import InputSide from '../InputSide';
import businessmenImg from '../../assets/investors.jpg';
import Footer from '../Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  align-items: center;
  // background-color: whitesmoke;
  // background-image: url(${ businessmenImg });
  //  background-repeat: no-repeat;
  //  background-size: cover;
  // background-position: center;
  padding-bottom: 50px;
  margin-top: 30px;
  width: '100vw',
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 90%;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 83vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
  
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne className="dark:text-white">Contact US</TextOne>
        <TextTwo  className="dark:text-white">Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar/>
        <InputSide/>
       
      </FormContainer>
  
      
    
    </PageWrapper>
    
    
  );
};

export default FormPage;