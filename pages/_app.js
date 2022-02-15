import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/Main'
import Fonts from '../components/Fonts'
import theme from '../libs/theme'

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Main router={router}>
				<Component {...pageProps} key={router.route} />
			</Main>
		</ChakraProvider>
	)
}
export default MyApp
