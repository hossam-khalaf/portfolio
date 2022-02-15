import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius='lg' bg='lightblue' p={4} mb={6} align='center'>
				Hello , I&apos;m a Front-End Developer Based in Dubai, UAE
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Hossam Khalaf
					</Heading>
					<p>Software Developer (Front-End / ReactJs /NextJs) </p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page
