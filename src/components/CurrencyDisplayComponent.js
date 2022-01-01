import React from 'react'
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Text, VStack} from '@chakra-ui/react'

const CurrencyDisplayComponent = (props) => {
    return (
        <VStack
            width='440px'
            alignItems='flex-start'
            mt={4}
        >
            <Text fontWeight='semibold'>{props.placeholderText}</Text>
            <Text 
                width='300px'
                fontSize={24}
                fontWeight='bold'
            >{props.textValue}</Text>
        </VStack>
    )
}

export default CurrencyDisplayComponent
