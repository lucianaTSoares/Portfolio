import ItemList from "@components/ItemList";
import socialList from "@data/socialList";
import List from "@styles/icon-list-style"
import { InitialContainer, Infos } from "./styles";

export default function Initial() {
	return (
		<InitialContainer className="container" data-aos="fade-up">
			<Infos>
				<h1>
					Luciana Soares <span>Desenvolvedora Web.</span>
				</h1>
				<p>
					Apaixonada por proporcionar as <span>melhores experiências</span> para
					as pessoas com a tecnologia.
				</p>
				<List>
					{socialList.map((item, key) => (
						<ItemList
							key={key}
							path={item.path}
							iconColor={item.color}
							title={item.name}
						>
							{item.icon}
						</ItemList>
					))}
				</List>
			</Infos>
		</InitialContainer>
	)
}
