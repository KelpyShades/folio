import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  technologies: string;
  status: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  order: number;
  content: string;
}

export function getSortedProjectsData(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '',
        subtitle: matterResult.data.subtitle || '',
        metaTitle: matterResult.data.metaTitle || '',
        metaDescription: matterResult.data.metaDescription || '',
        category: matterResult.data.category || '',
        technologies: matterResult.data.technologies || '',
        status: matterResult.data.status || '',
        linkText: matterResult.data.linkText || '',
        linkHref: matterResult.data.linkHref || '',
        imageSrc: matterResult.data.imageSrc || '',
        imageAlt: matterResult.data.imageAlt || '',
        order: matterResult.data.order ?? 99,
        content: '',
      } as Project;
    });

  return allProjectsData.sort((a, b) => a.order - b.order);
}

export async function getProjectData(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title || '',
    subtitle: matterResult.data.subtitle || '',
    metaTitle: matterResult.data.metaTitle || '',
    metaDescription: matterResult.data.metaDescription || '',
    category: matterResult.data.category || '',
    technologies: matterResult.data.technologies || '',
    status: matterResult.data.status || '',
    linkText: matterResult.data.linkText || '',
    linkHref: matterResult.data.linkHref || '',
    imageSrc: matterResult.data.imageSrc || '',
    imageAlt: matterResult.data.imageAlt || '',
    order: matterResult.data.order ?? 99,
    content: contentHtml,
  } as Project;
}
