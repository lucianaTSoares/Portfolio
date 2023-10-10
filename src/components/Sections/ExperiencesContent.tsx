import { ToolTip } from '@/components/Tooltip';
import {
  SiAngular,
  SiAzuredevops,
  SiAzurefunctions,
  SiAzurepipelines,
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRobotframework,
  SiSpringboot,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

const iconSize = 30;

export function getTabs({ iconSize }: { iconSize: number }) {
  return [
    {
      id: 'exp1-tab',
      title: '6place',
      job: 'Full Stack Developer',
      period: 'Mai. 2022 - Atualmente',
      content:
        'Desenvolvi diversas features e correções em APIs REST e WebPages de um marketplace focado em facilitar o' +
        ' abastecimento de franquias alimentícias e Food services. Também fui responsável por escrever documentações de' +
        ' funcionalidades e repositorios, pela implementação de um sistema de notificações multicanal para o marketplace, bem' +
        ' como a realização e implantação de testes automatizados end-2-end da interface da plataforma.',
      techs: [
        {
          name: 'TypeScript',
          icon: (
            <ToolTip tooltip='TypeScript'>
              <SiTypescript size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Node',
          icon: (
            <ToolTip tooltip='Node.js'>
              <SiNodedotjs size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Nest',
          icon: (
            <ToolTip tooltip='Nest.js'>
              <SiNestjs size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'React',
          icon: (
            <ToolTip tooltip='React'>
              <SiReact size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Next',
          icon: (
            <ToolTip tooltip='Next.js'>
              <SiNextdotjs size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Styled Components',
          icon: (
            <ToolTip tooltip='Styled Components'>
              <SiStyledcomponents size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'PostgreSQL',
          icon: (
            <ToolTip tooltip='PostgreSQL'>
              <SiPostgresql size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Robot Framework',
          icon: (
            <ToolTip tooltip='Robot Framework'>
              <SiRobotframework size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Git',
          icon: (
            <ToolTip tooltip='Git'>
              <SiGit size={27} />
            </ToolTip>
          ),
        },
        {
          name: 'Azure DevOps',
          icon: (
            <ToolTip tooltip='Azure DevOps'>
              <SiAzuredevops size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Azure Pipelines',
          icon: (
            <ToolTip tooltip='Azure Pipelines'>
              <SiAzurepipelines size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Azure Functions',
          icon: (
            <ToolTip tooltip='Azure Functions'>
              <SiAzurefunctions size={iconSize} className='-ml-1 mt-1' />
            </ToolTip>
          ),
        },
      ],
    },
    {
      id: 'exp2-tab',
      title: 'Generation Brasil',
      job: 'Web Java/Angular Developer',
      period: 'Jan. 2022 - Mar. 2022',
      content:
        'Trabalhei em squads com diferentes desenvolvedores na construção de Apps em console aplicando' +
        ' conceitos de Programação Orientada a Objetos, APIs REST, sites estáticos e SPAs, além de gerenciar Pull' +
        ' Requests em reositórios de projetos. Junto com outros desenvolvedores, também construí uma rede social voltada para o público LGBTQIA+ e aprimorei diversas' +
        ' soft-skills requeridas pelo mercado.',
      techs: [
        {
          name: 'Java',
          icon: (
            <ToolTip tooltip='Java'>
              <FaJava size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Spring Boot',
          icon: (
            <ToolTip tooltip='Spring Boot'>
              <SiSpringboot size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'MySQL',
          icon: (
            <ToolTip tooltip='MySQL'>
              <GrMysql size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'HTML5',
          icon: (
            <ToolTip tooltip='HTML5'>
              <SiHtml5 size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'CSS3',
          icon: (
            <ToolTip tooltip='CSS3'>
              <SiCss3 size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'JavaScript',
          icon: (
            <ToolTip tooltip='JavaScript'>
              <SiJavascript size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'TypeScript',
          icon: (
            <ToolTip tooltip='TypeScript'>
              <SiTypescript size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Angular',
          icon: (
            <ToolTip tooltip='Angular'>
              <SiAngular size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Bootstrap',
          icon: (
            <ToolTip tooltip='Bootstrap'>
              <SiBootstrap size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Heroku',
          icon: (
            <ToolTip tooltip='Heroku'>
              <SiHeroku size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Git',
          icon: (
            <ToolTip tooltip='Git'>
              <SiGit size={iconSize} />
            </ToolTip>
          ),
        },
      ],
    },
  ];
}
