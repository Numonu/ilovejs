import { useState, type FC } from "react";
import ModuleCard from "@/components/reusable/molecules/ModuleCard";
import Selector from "../molecules/Selector";
import capitalize from "@/global/utils/capitalize";

interface ModuleTreeProps {
	data: {
		moduleName: string;
		articleName: string;
		description: string;
		iconName: string;
		href: string;
	}[];
}
const ModuleTree: FC<ModuleTreeProps> = ({ data }) => {
	
	const [moduleSelect, setModuleSelect] = useState(data[0].moduleName);
	const modulesAvalibles = [...new Set(data.map(e => e.moduleName))];

	const changeModule = (moduleName: string) => setModuleSelect(moduleName);

	return (
		<>
			<header className="mb-16 flex justify-between items-center flex-wrap">
				<h2 className="text-subtitle" style={{"marginBottom" : "0px"}}>
					Modulo :{" "}
					<span
						className="border-pinia-300 text-pinia-300 border-b-[3px] border-dotted"
						id="module_title"
					>
						{capitalize(moduleSelect)}
					</span>
				</h2>
				<Selector
					onChange={changeModule}
					defaultModule={moduleSelect}
					optionList={modulesAvalibles}
				/>
			</header>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{data.filter(e => e.moduleName === moduleSelect).map((e) => (
					<ModuleCard
						title={e.articleName}
						description={e.description}
						iconName={e.iconName}
						href={e.href}
					/>
				))}
			</div>
		</>
	);
};

export default ModuleTree;
