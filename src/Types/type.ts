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
