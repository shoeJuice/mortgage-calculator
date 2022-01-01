import React from 'react'
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Text, VStack} from '@chakra-ui/react'
import CurrencyInput from 'react-currency-input-field'

const TextInputComponent = (props) => {

    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
    

    return (
        <VStack
            width='440px'
            alignItems='flex-start'
            mt={4}
        >
            <Text fontWeight='semibold'>{props.placeholderText}</Text>
            <Input 
                as={CurrencyInput}
                prefix='$'
                value={props.inputValue}
                onValueChange={props.onChange}
                placeholder={props.placeholderText}
                variant='unstyled'
                width='300px'
                fontSize={24}
                fontWeight='bold'
            />
        </VStack>
    )
}

export default TextInputComponent
