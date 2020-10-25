import React, { useState } from "react";

const Tile = ({img}) => {
    const [open, setOpen] = useState(false)

    const clickHan = () => {
        if (open) {
            setOpen(false)
        } else { setOpen(true) }
    }

    let tileStyle = {};
    if (open) {
        tileStyle = {
            width: '62vw',
            height: '62vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            margin: '0',
            marginTop: '-31vw',
            marginLeft: '-31vw',
            boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
            transform: 'none'
        };
    } else {
        tileStyle = {
            width: '18vw',
            height: '18vw'
        };
    }

    return (
        <>
        <div  className="tile">
            <img
                onClick={clickHan}
                src={img}
                // alt={props.data.name}
                style={tileStyle}
            />
        </div>
        </>
    );
}

export default Tile