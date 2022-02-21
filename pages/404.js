import NextLink from 'next/link'
import {
	Box,
	Heading,
	Text,
	Container,
	Divider,
	Button,
} from '@chakra-ui/react'

const NotFoundPage = () => {
	return (
		<Container my={10}>
			<Heading as='h1'>Not Found !</Heading>
			<Text>Sorry, the page you are looking for is not found.</Text>
			<Divider my={6} />

			<Box my={6} align='center'>
				<NextLink href='/'>
					<Button colorScheme='teal'>Back to Home</Button>
				</NextLink>
			</Box>
		</Container>
	)
}

export default NotFoundPage
