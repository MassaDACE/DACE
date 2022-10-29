import React from "react";

function AttributeContainer() {
    const [attributes, setAttributes] = React.useState([]);
    return (
        <div className="border-r-2 border-b-2 h-1/2">
            {attributes.map((attribute) => (
                <div>{attribute}</div>
            ))}
        </div>
    )
}

export default AttributeContainer;