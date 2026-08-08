import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

export type Project = {
	id: string;
	name: string;
	snapshot: string;
	problem: string;
	architecture: string;
	status: string;
	hero_image: string;
	url: string;
	github: string;
	technologies: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<article className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 group pb-20 md:pb-32 border-b border-[#eaeaea] last:border-0 last:pb-0">
			<div className="flex-1 flex flex-col justify-between">
				<div>
					<div className="flex items-center gap-3 mb-6">
						<span className="w-8 h-0.5 bg-[#111]"></span>
						<span className="font-mono text-xs font-bold text-black uppercase tracking-widest">
							{project.status}
						</span>
					</div>
					<h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-2 text-black" style={{ fontFamily: 'var(--font-poppins)' }}>
						{project.name}
					</h3>
					<p className="text-lg font-medium text-[#222] mb-8 italic">{project.snapshot}</p>

					<div className="flex flex-col gap-6 text-base text-[#444] leading-relaxed max-w-xl mb-8">
						<div>
							<strong className="text-black font-mono text-[10px] uppercase tracking-wider block mb-1">The Problem</strong>
							<p>{project.problem}</p>
						</div>
						<div>
							<strong className="text-black font-mono text-[10px] uppercase tracking-wider block mb-1">The Architecture</strong>
							<p>{project.architecture}</p>
						</div>
					</div>

					<div className="flex flex-wrap gap-x-6 gap-y-3 mb-12">
						{project.technologies.map((tech) => (
							<span key={tech} className="font-mono text-xs uppercase tracking-widest font-bold text-[#555]">
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
					{project.url && (
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#111] font-mono text-xs uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:text-[#555] hover:border-[#555] transition-colors flex items-center gap-2"
						>
							View Platform <FaLink className="w-3 h-3" />
						</a>
					)}
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#777] font-mono text-xs uppercase tracking-widest hover:text-[#111] transition-colors flex items-center gap-2"
						>
							Source Code <FaGithub className="w-3 h-3" />
						</a>
					)}
				</div>
			</div>

			{/* Image Section */}
			<div className="w-full lg:w-[50%] flex items-center justify-center">
				<div className="w-full border border-[#eaeaea] bg-white overflow-hidden">
					<Image
						src={project.hero_image}
						alt={`${project.name} preview`}
						width={1200}
						height={800}
						className="w-full h-auto object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
					/>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
