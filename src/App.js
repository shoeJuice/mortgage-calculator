import "./App.css";
import { ChakraProvider, Flex, Button, Heading } from "@chakra-ui/react";
import SliderComponent from "./components/SliderComponent";
import CurrencyDisplayComponent from "./components/CurrencyDisplayComponent";
import React from "react";

function App() {
  const [purchasePrice, setpurchasePrice] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(0);
  const [repaymentTime, setRepaymentTime] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0.0);
  const [loanAmount, setLoanAmount] = React.useState(0);
  const [mortgageQuote, setMortgageQuote] = React.useState(0);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  const calculateMortgageQuote = () => {
    const p = purchasePrice - downPayment;
    const r = interestRate / 12;
    const n = repaymentTime * 12;

    const mp = p * ((r * ((1 + r) ^ n)) / (((1 + r) ^ n) - 1));

    setLoanAmount(p);
    setMortgageQuote(mp);
  };

  return (
    <ChakraProvider>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height={window.innerHeight}
        bg="#f5f3fb"
      >
        <Flex
          bgColor="purple.50"
          borderRadius={6}
          borderWidth={10}
          borderColor="white"
          width="100%"
          flexDirection="column"
          padding={10}
          mt={10}
        >
          <Heading as="h2" size="lg">
            Mortgage Calculator
          </Heading>
          <Flex
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="row"
            maxWidth={["700px", "1400px"]}
            flexWrap="wrap"
            pb={8}
          >
            <SliderComponent
              width={"400px"}
              Placeholder={"Purchase Price"}
              maxValue={15000000}
              stateValue={formatter.format(purchasePrice)}
              onChangeFunction={(val) => {
                setpurchasePrice(val);
              }}
            />
            <SliderComponent
              width={"400px"}
              Placeholder={"Down Payment"}
              stateValue={formatter.format(downPayment)}
              onChangeFunction={(val) => {
                setDownPayment(val);
              }}
            />
            <SliderComponent
              width={"400px"}
              Placeholder={"Repayment Time"}
              stateValue={
                repaymentTime === 0
                  ? `${repaymentTime}`
                  : repaymentTime === 1
                  ? `${repaymentTime} year`
                  : `${repaymentTime} years`
              }
              maxValue={40}
              onChangeFunction={(val) => {
                setRepaymentTime(val);
              }}
            />
            <SliderComponent
              width={"400px"}
              Placeholder={"Interest Rate"}
              stateValue={`${interestRate * 100}%`}
              maxValue={100}
              onChangeFunction={(val) => {
                setInterestRate(parseFloat(val / 100));
              }}
            />

            <CurrencyDisplayComponent
              placeholderText={"Loan amount:"}
              textValue={formatter.format(loanAmount)}
            />
            <CurrencyDisplayComponent
              placeholderText={"Estimated pr month:"}
              textValue={formatter.format(mortgageQuote)}
            />
          </Flex>
          <Button
            alignSelf="flex-start"
            disabled={
              purchasePrice === 0 ||
              downPayment === 0 ||
              repaymentTime === 0 ||
              interestRate === 0
            }
            mt={10}
            padding={10}
            maxWidth="400px"
            colorScheme="purple"
            onClick={(e) => {
              calculateMortgageQuote();
            }}
          >
            Get a Mortgage Quote
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
