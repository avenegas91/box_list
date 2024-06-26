import React from "react";

function Box({
    id,
    handleRemove,
    width = 6,
    height = 6,
    backgroundColor = "purple"
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div style ={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            }}
            />
            <button onClick={remove}>Remove Box</button>
        </div>
    );
}

export default Box;