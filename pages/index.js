import {
	Box,
	Container,
	Heading,
	Image,
	useColorModeValue,
} from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box
				borderRadius='lg'
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				p={4}
				mt={2}
				mb={6}
				align='center'>
				Hello , I&apos;m a Front-End Developer Based in Dubai, UAE
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Hossam Khalaf
					</Heading>
					<p>Software Developer (Front-End / ReactJs /NextJs) </p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align='center'>
					<Image
						borderColor='whiteAlpha.800'
						borderWidth={4}
						borderStyle='solid'
						objectFit='cover'
						maxWidth='100px'
						display='inline-block'
						borderRadius='full'
						src='/images/hosshhkh.jpg'
						alt='Profile Image'
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default Page
