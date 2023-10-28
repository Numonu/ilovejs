import { useState, type FC, type ReactNode } from "react";

interface QuestionProps{
    question : string,
    children : ReactNode
}
const Question : FC<QuestionProps> = ({question , children}) => {
    const [open , setOpen] = useState(false);

    const toggle = () => open ? setOpen(false) : setOpen(true);

    return <button className="bg-zinc-800 border-pinia-300 px-3 py-5 border-l-4" onClick={toggle}>
        <header className="flex items-start justify-between text-start">
            <h3> {question} </h3>
            <img className={`w-5 transition-transform ${open ? "rotate-45" : "rotate-0"}`} src="resource/svg/plus.svg" alt="simbolo de suma"/>
        </header>
        <div className={`grid transition-[grid-template-rows] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
                <p className="pt-4 opacity-80 text-start text-sm ">
                    {children}
                </p>
            </div>
        </div>
    </button>
}

export default Question;