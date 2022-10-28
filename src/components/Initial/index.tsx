import Button from '../Button'
import { Container, Infos } from './styles'

export default function Initial() {
	return (
		<Container className="container">
			<Infos className="dots-background">
				<h1>
					Luciana Soares <span>Desenvolvedora Web.</span>
				</h1>
				<p>
					Apaixonada por proporcionar as melhores experiências para as pessoas
					com a tecnologia.
				</p>
				<div>
					<Button href="#" variant="secondary">
						Baixar CV
					</Button>
				</div>
			</Infos>
		</Container>
	)
}
