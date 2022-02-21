import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Article from '../components/layouts/Article'
import Section from '../components/Section'
import { GridItem } from '../components/GridItem'
import comingSoon from '../public/images/coming-soon.jpg'

const Posts = () => (
	<Article title='Posts'>
		<Container my={8}>
			<Heading as='h4' fontSize={20} mb={4}>
				Latest Posts
			</Heading>

			{/* Todo => Add your actual blog posts*/}
			<Section delay={0.2}>
				<SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title='Coming Soon'
						thumbnail={comingSoon}
						href='article.com'
					/>
					<GridItem
						title='Coming Soon 2'
						thumbnail={comingSoon}
						href='article.com'
					/>
					<GridItem
						title='Coming Soon 3'
						thumbnail={comingSoon}
						href='article.com'
					/>
				</SimpleGrid>
			</Section>
		</Container>
	</Article>
)

export default Posts
