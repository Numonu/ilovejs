import capitalize from "@/global/utils/capitalize";
import type { FC } from "react";

interface ModuleCardProps {
	title: string;
	description: string;
	iconName: string;
	href: string;
}
const ModuleCard: FC<ModuleCardProps> = ({
	title,
	description,
	iconName,
	href,
}) => {
	return (
		<a
			className="border-neutral-900 outline-zinc-700 bg-gradient-to-t from-neutral-900 to-zinc-800 block mx-auto w-full max-w-[450px] p-4 border-4 outline outline-1 rounded-lg cursor-pointer hover:from-neutral-950 hover:to-zinc-800"
			href={href}
		>
			<div className="border-neutral-600 w-12 p-1 aspect-square mb-14 rounded-md border-[1px]">
				<img src={`articles/svg/${iconName}.svg`} alt={`${iconName} icon`} />
			</div>
			<h3 className="max-w-[50%] mb-2 text-xl">{capitalize(title)}</h3>
			<p className="opacity-80 text-sm font-extralight">{description}</p>
		</a>
	);
};

export default ModuleCard;
