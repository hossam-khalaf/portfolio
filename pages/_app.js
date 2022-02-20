import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/Main'
import Fonts from '../components/Fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Main router={router}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Main>
		</ChakraProvider>
	)
}
export default MyApp
