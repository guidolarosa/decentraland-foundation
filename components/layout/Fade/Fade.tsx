import { Box } from 'rebass';

export const FadeUp = (props : any) => {
    return (
        <Box as="div" width={"100%"} data-aos="fade-up">
            {props.children}
        </Box>
    )
};

export const FadeDown = (props : any) => {
    return (
        <Box as="div" width={"100%"} data-aos="fade-down">
            {props.children}
        </Box>
    )
};

export default FadeUp;