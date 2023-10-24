import NextLink from 'next/link'
import Image from 'next/image'
import {
	Box,
	Text,
	LinkBox,
	LinkOverlay,
	Button,
	Stack,
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w='100%' align='center'>
		<LinkBox cursor='pointer'>
			<Image
				src={thumbnail}
				alt={title}
				className='grid-item-thumbnail'
				placeholder='blur'
				loading='lazy'
			/>
			<LinkOverlay href={href} target='_blank'>
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const ProjectGridItem = ({
	children,
	id,
	title,
	thumbnail,
	github,
	live,
}) => (
	<Box w='100%' align='center'>
		{/* fix later// direct to live or github!! */}
		<NextLink
	// href={`/projects/${id}`}
>
			<LinkBox cursor='pointer'>
				<Image
					src={thumbnail}
					alt={title}
					className='grid-item-thumbnail'
					placeholder='blur'
				/>
				<LinkOverlay href={`/projects/${id}`} target='_blank'>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
		<Stack mt={4} direction={'row'} spacing={4} justify='center'>
			<NextLink href={github} target='_blank' passHref>
				<Button
					flex={1}
					fontSize={'sm'}
					rounded={'sm'}
					bg={'teal.400'}
				color={'white'}
				_hover={{
					bg: 'blue.500',
				}}
				_focus={{
					bg: 'blue.500',
				}}>
					Live
				</Button>
			</NextLink>

		</Stack>
	</Box>
)

export const GridItemStyle = () => (
	<Global
		styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
	/>
)
