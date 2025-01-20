import AWSIcon from 'public/AWS.svg';
import AzureIcon from 'public/Azure.svg';
import GHActions from 'public/GitHub Actions.svg';
import JavaIcon from 'public/java.svg';
import PowerAppsIcon from 'public/microsoft-power-apps.svg';
import PowerAutomateIcon from 'public/microsoft-power-automate.svg';
import PowerPlatformIcon from 'public/Microsoft_Power_Platform_logo.svg';
import PostgreSQLIcon from 'public/PostgresSQL.svg';
import PythonIcon from 'public/Python.svg';
import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs, SiRobotframework, SiSpringboot } from "react-icons/si";

interface TechItem {
  name: string;
  icon?: IconType
  svgPath?: string;
  color?: string;
}

export const techList: TechItem[] = [
  {
    name: 'Java',
    svgPath: JavaIcon
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    color: '#4CAF50',
  },
  {
    name: 'TypeScript',
    icon: BiLogoTypescript,
    color: '#007ACC',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
  },
  {
    name: 'React',
    icon: FaReact,
    color: '#57dcf4'
  },
  {
    name: 'Python',
    svgPath: PythonIcon,
  },
  {
    name: 'Power Platform',
    svgPath: PowerPlatformIcon
  },
  {
    name: 'Power Apps',
    svgPath: PowerAppsIcon
  },
  {
    name: 'Power Automate',
    svgPath: PowerAutomateIcon
  },
  {
    name: 'Robot Framework',
    icon: SiRobotframework,
    color: '#00c0b6',
  },
  {
    name: 'PostgreSQL',
    svgPath: PostgreSQLIcon
  },
  {
    name: 'Amazon Web Services',
    svgPath: AWSIcon
  },
  {
    name: 'Azure',
    svgPath: AzureIcon
  },
  {
    name: 'GitHub Actions',
    svgPath: GHActions
  },
]