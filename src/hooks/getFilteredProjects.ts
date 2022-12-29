import { TProject } from 'types/project'

const getFilteredProjects = (
	dataList: TProject[],
	arrayWithProjectsNames: string[]
) => {
	return dataList.filter((project: TProject) =>
		arrayWithProjectsNames.includes(project.name)
	)
}

export default getFilteredProjects
