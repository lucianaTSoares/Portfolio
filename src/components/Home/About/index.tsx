import { AboutContainer, ImageStyle } from './styles'
import Image from 'next/image'

export default function About() {
	const src = `https://avatars.githubusercontent.com/u/88734065?v=4`

	return (
		<AboutContainer className="container" id="about">
			<div data-aos="fade-up">
				<h2>Sobre mim</h2>
				<div>
					<p>
						Sou uma desenvolvedora com menos de 1 ano de experiência em
						Desenvolvimento Web. Nesse período, tenho trabalhado com APIs REST e
						Aplicações Single Page profissionalmente em plataforma web
						marketplace, e em projetos pessoas sendo um deles o desenvolvimento
						de uma rede social chamada Home+ destinada à comunidade LGBTQIA+.
						<br />
						Possuo experiência principalmente com React, NextJS, NodeJS e nas
						linguagens TypeScript e JavaScript, bem como conhecimentos em
						linguagens Orientadas a Objetos, operações CRUD, banco de dados SQL,
						componentização, design responsivo, boas práticas de escrita de
						código como Clean Code e Testes Unitários.
						<br />
						Estou em constante evolução não só a partir de experiências, mas na
						realização de cursos com foco em Front-end com React e ajudando
						outras pessoas desenvolvedoras com os conhecimentos que possuo,
						gostando de trabalhar com pessoas e para pessoas.
					</p>
					<ImageStyle>
						<Image
							loader={({ width, quality }) =>
								`${src}?w=${width}&q=${quality || 75}`
							}
							src={src}
							alt="Foto de perfil de Luciana"
							width={340}
							height={340}
							priority
							style={{ borderRadius: '50%' }}
						/>
					</ImageStyle>
				</div>
			</div>
		</AboutContainer>
	)
}
