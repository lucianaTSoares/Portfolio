export default async function getServerSideProps() {
	const user = 'lucianaTSoares'
	const data = await fetch(`https://api.github.com/users/${user}/repos`, {
		headers: {
			authorization: 'token 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'
		}
	})
		.then((res) => res.json())
		.then((res) => {
			return res
		})

	const formattedData = data.map((item: typeof data) => {
		return {
			id: item.id,
			name: item.name,
			url: item.html_url,
			description: item.description,
			createdAt: item.created_at,
			topics: item.topics,
			homepage: item.homepage
		}
	})

	return {
		props: {
			data: formattedData
		}
	}
}
