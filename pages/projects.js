import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/Section'
import { ProjectGridItem } from '../components/GridItem'
import comingSoon from '../public/images/coming-soon.jpg'

const Projects = () => {
	return (
		<Container>
			<Heading as='h3' fontSize={20} mb={4}>
				Projects
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					{/* edit with Your projects Lsater */}
					<ProjectGridItem
						id='1stproject'
						title='comingSoon'
						thumbnail={comingSoon}
						github='https://github.com'>
						Project Description in ......
					</ProjectGridItem>
				</Section>
				<Section>
					{/* edit with Your projects Lsater */}
					<ProjectGridItem
						id='1stproject'
						title='comingSoon'
						thumbnail={comingSoon}
						github='https://github.com'>
						Project Description in ......
					</ProjectGridItem>
				</Section>
			</SimpleGrid>
			<Divider my={6} />
		</Container>
	)
}

export default Projects
