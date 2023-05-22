import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/Section'
import { ProjectGridItem } from '../components/GridItem'
import comingSoon from '../public/images/coming-soon.jpg'
import sanad from '../public/images/sanad.webp'
import newdirction from '../public/images/newdirction.webp'
import sarcoem from '../public/images/sarcoem.webp'
import view-sa from '../public/images/view-sa.webp'
import Article from '../components/layouts/Article'

const Projects = () => {
	return (
		<Article>
			<Container>
				<Heading as='h3' fontSize={20} mb={4}>
					Projects
				</Heading>
				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section>
						{/* edit with Your projects Lsater */}
						<ProjectGridItem
							id='1stproject'
							title='sanad'
							thumbnail={sanad}
							github='https://sanad-co.com/'>
							Project Description in ......
						</ProjectGridItem>
					</Section>
					<Section>
						{/* edit with Your projects Lsater */}
						<ProjectGridItem
							id='1stproject'
							title='newdirction'
							thumbnail={newdirction}
							github='https://newdirction.com/'>
							Project Description in ......
						</ProjectGridItem>
					</Section>
<Section>
						{/* edit with Your projects Lsater */}
						<ProjectGridItem
							id='1stproject'
							title='sarcoem'
							thumbnail={sarcoem}
							github='https://sarcoem.com/'>
							Project Description in ......
						</ProjectGridItem>
					</Section>
<Section>
						{/* edit with Your projects Lsater */}
						<ProjectGridItem
							id='1stproject'
							title='view-sa'
							thumbnail={view-sa}
							github='https://view-sa.hossamkhalaf.com/'>
							Project Description in ......
						</ProjectGridItem>
					</Section>
				</SimpleGrid>
				<Divider my={6} />
			</Container>
		</Article>
	)
}

export default Projects
