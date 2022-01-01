import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChakraProvider, Flex, HStack, Spacer, Button} from '@chakra-ui/react'
import SliderComponent from './components/SliderComponent';
import React from 'react';

function App() {

  const [numVal, setNumVal] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(0);
  const [repaymentTime, setRepaymentTime] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [loanAmount, setLoanAmount] = React.useState(0);
  const [prMonth, setPrMonth] = React.useState(0);

  return (
    <ChakraProvider> 
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        
      >
        <Flex
          bgColor="purple.50"
          borderRadius={6}
          flexDirection="column"
          padding={10}
          mt={10}
        >
                <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                maxWidth='1400px'
                flexWrap="wrap"
                pb={8}
                
              >
                <SliderComponent width={'400px'} Placeholder={"Purchase Price"} stateValue={numVal} onChangeFunction={(val) => {setNumVal(val)}} />
                <SliderComponent width={'400px'} Placeholder={"Down Payment"} stateValue={downPayment} onChangeFunction={(val) => {setDownPayment(val)}} />
                <SliderComponent width={'400px'} Placeholder={"Repayment Time"} stateValue={repaymentTime} maxValue={25} onChangeFunction={(val) => {setRepaymentTime(val)}} />
                <SliderComponent width={'400px'} Placeholder={"Interest Rate"} stateValue={interestRate} maxValue={25} onChangeFunction={(val) => {setInterestRate(val)}} />
                <SliderComponent width={'400px'} Placeholder={"Loan Amount"} stateValue={loanAmount} maxValue={1000000} onChangeFunction={(val) => {setLoanAmount(val)}} />
                <SliderComponent width={'400px'} Placeholder={"Estimated pr. month"} stateValue={prMonth} maxValue={10000} onChangeFunction={(val) => {setPrMonth(val)}} />
              </Flex>
              <Button mt={10} padding={10} maxWidth='400px'colorScheme="purple">Get a Mortgage Quote</Button>
        </Flex>
        
        
      </Flex>
    </ChakraProvider>
  );
}

export default App;
