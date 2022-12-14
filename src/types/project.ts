export type TProject = {
	id: number
	name: string
	url: string
	description: string | null
	createdAt: string
	topics: []
	homepage: string
}

export type TArrayProject = {
	data: TProject[]
}
