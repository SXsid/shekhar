export interface IProjectCard {
  name: string;
  desc: string;
  Techstack: {
    name: string;
    icon: React.ReactNode;
  }[];
  gitHubLink: string;
  liveLink: string;
  previewLink?: string;
}

export interface IBlogCard {
  title: string;
  topic: string;
  color: string;
  logo: React.ReactNode;
  link: string;
  dateOfpublish: string;
}
