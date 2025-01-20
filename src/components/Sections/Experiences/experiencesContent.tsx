import { ToolTip } from '@/components/Tooltip';
import Image from 'next/image';
import ApacheCamelIcon from 'public/camel.svg';
import PowerAppsIcon from 'public/power-apps.svg';
import PowerAutomateIcon from 'public/power-automate.svg';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGithub, FaJava, FaJenkins } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiAngular,
  SiApachespark,
  SiAzuredevops,
  SiAzurefunctions,
  SiAzurepipelines,
  SiBootstrap,
  SiCss3,
  SiDatabricks,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiHeroku,
  SiHtml5,
  SiKubernetes,
  SiMicrosoftazure,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRobotframework,
  SiSpringboot,
  SiStyledcomponents,
} from 'react-icons/si';

interface Tab {
  id: string;
  title: string;
  job: string;
  period: string;
  content: string;
  techs: {
    name: string;
    icon: JSX.Element;
  }[];
}

export function getTabs({ iconSize }: { iconSize: number }): Tab[] {
  return [
    {
      id: 'exp1-tab',
      title: 'F1RST Santander',
      job: 'Analista Full Stack Pleno',
      period: 'Dez. 2023 - Atualmente',
      content:
        'Atuando na área de Arquitetura Técnica no estudo e adoção de novas ferramentas que promovem produtividade às áreas de tecnologia e negócios da F1RST e demais empresas do Grupo Santander. Desenvolvo projetos e contribuo na definição de arquitetura para low-code com Power Platform, integrando soluções desenvolvidas em esteiras de CI/CD com GitHub Actions e usuários de serviço na Azure, além de desenvolver APIs integradas à feramentas de IAs generativas (Azure AI Search e Azure OpenAI), aderindo especificações, padrões organizacionais e cronogramas estabelecidos contribuindo para entrega de resultados na área.',
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
          name: 'Apache Camel',
          icon: (
            <ToolTip tooltip='Apache Camel'>
              <Image
                src={ApacheCamelIcon}
                alt='Apache Camel'
                width={iconSize}
                height={iconSize}
                className='m-0 dark:invert'
              />
            </ToolTip>
          ),
        },
        {
          name: 'Azure',
          icon: (
            <ToolTip tooltip='Azure'>
              <SiMicrosoftazure size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Kubernetes',
          icon: (
            <ToolTip tooltip='Kubernetes'>
              <SiKubernetes size={27} />
            </ToolTip>
          ),
        },
        {
          name: 'GitLab',
          icon: (
            <ToolTip tooltip='GitLab'>
              <SiGitlab size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Jenkins',
          icon: (
            <ToolTip tooltip='Jenkins'>
              <FaJenkins size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'GitHub',
          icon: (
            <ToolTip tooltip='GitHub'>
              <FaGithub size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'GitHub Actions',
          icon: (
            <ToolTip tooltip='GitHub Actions'>
              <SiGithubactions size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Power Apps',
          icon: (
            <ToolTip tooltip='Power Apps'>
              <Image
                src={PowerAppsIcon}
                alt='Power Apps'
                width={iconSize}
                height={iconSize}
                className='m-0 dark:invert'
              />
            </ToolTip>
          ),
        },
        {
          name: 'Power Automate',
          icon: (
            <ToolTip tooltip='Power Automate'>
              <Image
                src={PowerAutomateIcon}
                alt='Power Automate'
                width={iconSize}
                height={iconSize}
                className='m-0 dark:invert'
              />
            </ToolTip>
          ),
        },
        {
          name: 'Python',
          icon: (
            <ToolTip tooltip='Python'>
              <SiPython size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Apache Spark',
          icon: (
            <ToolTip tooltip='Apache Spark'>
              <SiApachespark size={iconSize} />
            </ToolTip>
          ),
        },
        {
          name: 'Databricks',
          icon: (
            <ToolTip tooltip='Databricks'>
              <SiDatabricks size={iconSize} />
            </ToolTip>
          ),
        },
      ],
    },
    {
      id: 'exp2-tab',
      title: '6place',
      job: 'Desenvolvedora Full Stack Jr & QA',
      period: 'Mai. 2022 - Dez. 2023',
      content:
        'Desenvolvi diversas features e correções em APIs REST e WebPages de um marketplace focado em facilitar o' +
        ' abastecimento de franquias alimentícias e Food services. Também fui responsável por escrever documentações de' +
        ' funcionalidades e repositorios, pela implementação de um sistema de notificações multicanal para o marketplace, bem' +
        ' como a realização de testes manuais e testes automatizados e2e da interface da plataforma utilizando BDD.',
      techs: [
        {
          name: 'TypeScript',
          icon: (
            <ToolTip tooltip='TypeScript'>
              <BiLogoTypescript size={30} />
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
      id: 'exp3-tab',
      title: 'Generation Brasil',
      job: 'Desenvolvedora Web Java/Angular',
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
              <RiJavascriptFill size={30} />
            </ToolTip>
          ),
        },
        {
          name: 'TypeScript',
          icon: (
            <ToolTip tooltip='TypeScript'>
              <BiLogoTypescript size={30} />
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
