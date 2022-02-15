import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'
const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	transition: all 0.3 ease-in-out;

	&:hover img {
		transform: scale(1.1);
	}
`

const Logo = () => {
	const logoImage = `/images/1.png`
	return (
		<Link href='/'>
			<a>
				<LogoBox>
					<Image src={logoImage} width={25} height={25} alt='Logo' />
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='sans-serif'
						fontWeight='bold'
						ml={3}>
						Hossam Khalaf
					</Text>
				</LogoBox>
			</a>
		</Link>
	)
}

export default Logo
