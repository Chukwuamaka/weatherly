import { extendTheme, theme as base } from "@chakra-ui/react";

// Customizations to Chakra UI's default styles
const theme = extendTheme({
    colors: {
        brand: {
            primary: '#3697d1',
        }
    },
    fonts: {
        body: 'Helvetica Neue, Arial, Helvetica, sans-serif'
    }
})

export default theme;