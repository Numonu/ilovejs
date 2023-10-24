import { useState, type FC } from "react";
import capitalize from "@/global/utils/capitalize.ts";

interface SelectorProps {
	defaultSelect: string;
	optionList: string[];
	onChange: (selectName: string) => void;
}
const Selector: FC<SelectorProps> = ({
	defaultSelect,
	optionList,
	onChange,
}) => {
	const [open, setOpen] = useState(false);

	const toggle = () => (open ? setOpen(false) : setOpen(true));

	return (
		<div className="relative">
			<button
				className="bg-zinc-800 border-zinc-600 relative p-1 pl-[1rem] flex gap-6 items-center border-2 rounded-md hover:border-neutral-300 transition-colors"
				onClick={toggle}
			>
				<span>{capitalize(defaultSelect)}</span>
				<img
					className="w-8"
					src="resource/svg/down_arrow.svg"
					alt="down arrow"
				/>
			</button>
			<ol
				className={`bg-zinc-800 text-neutral-400 border-zinc-700 absolute bottom-0 right-0 w-max rounded-md overflow-hidden border-2 translate-y-[103%] text-start ${
					open ? "block" : "hidden"
				}`}
			>
				{optionList.map((el, i) => {
					return (
						<li
							key={el}
							role="button"
							className="py-2 pl-2 pr-4 grid grid-cols-[1.5rem_1fr] gap-2 hover:bg-pinia-300 hover:text-black"
							onClick={() => onChange(el)}
						>
							<span className="flex items-center justify-end text-xs">
								{i > 9 ? i + 1 : `0${i + 1}`}.
							</span>
							<span>{capitalize(el)}</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Selector;
