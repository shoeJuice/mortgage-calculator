import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Flex,
    Box
  } from '@chakra-ui/react'
const SliderComponent = (props) => {
    return (
        <Box 
            w={props.width? props.width : '250px'}
            mt={8}
            mr={props.mr? props.mr : 10}
        >
            <h2>{props.Placeholder}: <b>{props.stateValue}</b></h2>
            <Slider  defaultValue={0} min={props.minValue} max={props.maxValue? props.maxValue : 400000} onChange={props.onChangeFunction}>
                <SliderTrack bg="white" boxSize={1.5}>
                    <SliderFilledTrack bg='purple.300' />
                </SliderTrack>
                <SliderThumb boxSize={4} border='4px' borderColor='purple.400' />
            </Slider>
        </Box>
    )
}

export default SliderComponent
