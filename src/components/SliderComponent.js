import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Flex,
    Box, Heading, Text, Spacer
  } from '@chakra-ui/react'
const SliderComponent = (props) => {
    return (
        <Flex 
            w={props.width? props.width : '250px'}
            mt={8}
            mr={props.mr? props.mr : 10}
            flexDirection='column'
            alignItems='flex-start'
        >
            <Flex
                alignItems='center'
                textAlign='center'

            >
                <Text fontSize='18px' fontWeight='semibold' mr={3}>{props.Placeholder}:</Text>
                <Text fontSize='20px' fontWeight='bold'>{props.stateValue}</Text>
            </Flex>
    
            <Slider  defaultValue={0} min={props.minValue} max={props.maxValue? props.maxValue : 400000} onChange={props.onChangeFunction}>
                <SliderTrack bg="white" boxSize={1.5}>
                    <SliderFilledTrack bg='purple.300' />
                </SliderTrack>
                <SliderThumb boxSize={4} border='4px' borderColor='purple.400' />
            </Slider>
        </Flex>
    )
}

export default SliderComponent
