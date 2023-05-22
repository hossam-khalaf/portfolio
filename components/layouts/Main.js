import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Hossam Khalaf | Software Developer (Front-End / WordPress)</title>
			</Head>
			<Head>

				<meta name="description" content="Discover the exceptional work of Hossam Khalaf, a proficient Software Developer specializing in Front-End and WordPress. Dive into his skillful artistry as a WordPress designer and developer. Explore now!" />
			</Head>
			<Head>
				<meta name="keywords" content="Hossam Khalaf, Software Developer, Front-End, WordPress developer, WordPress designer" />
			</Head>

			<Head>
				<meta property="og:title" content="Hossam Khalaf | Software Developer (Front-End / WordPress)" />
			</Head>
			<Head>
				<meta property="og:description" content="Discover the exceptional work of Hossam Khalaf, a proficient Software Developer specializing in Front-End and WordPress. Dive into his skillful artistry as a WordPress designer and developer. Explore now!" />
			</Head>
			<Head>
				<meta property="og:image" content="path_to_your_image" />
			</Head>
			<Head>
				<meta property="og:url" content="https://hossamkhalaf.com/" />

			</Head>
			<Navbar path={router.asPath} />
			<Container maxW='container.md' pt={14}>
				{children}
			</Container>
		</Box>
	)
}

export default Main
