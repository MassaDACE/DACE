import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

function AttributeContainer() {
    const [attribute, setAttribute] = React.useState("");
    const [attributes, setAttributes] = React.useState(["Picture"]);

    const addAttribute = (e: React.KeyboardEvent) => {
        if (e.code === "Enter") {
            setAttribute("");
            setAttributes([...attributes, attribute]);
        }
    };

    const removeAttribute = (index: number) => {
        setAttributes(attributes.filter((_, i) => i !== index));
    };

    return (
        <div className="flex border-r-2 border-b-2 h-full overflow-auto">
            <div className="flex flex-wrap content-start">
                {attributes.map((attribute, index) => (
                    <div className="flex place-items-center p-2 m-2 border-2 rounded-full h-10 bg-red-200">
                        <span>{attribute}</span>
                        <div>
                            <XMarkIcon className="w-4 ml-2" onClick={() => removeAttribute(index)} />
                        </div>
                    </div>
                ))}
                <input placeholder="New attribute" className="text-lg p-2 border-0 outline-0 w-fit h-10" value={attribute} onChange={(e) => setAttribute(e.target.value)} onKeyDown={addAttribute} />
            </div>
        </div>
    )
}

export default AttributeContainer;