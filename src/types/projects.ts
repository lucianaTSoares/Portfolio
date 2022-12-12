export type ProjectType = {
	id: number
	name: string
	url: string
	description: string | null
	createdAt: string
	topics: []
}

export type ArrayProjectType = {
	data: ProjectType[]
}
