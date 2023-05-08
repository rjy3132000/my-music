import React from 'react';
import "./ProgressCircle.css";

const Circle = (color, percentage, size, strokeWidth) => {
    const radius = (size / 2 - 10);
    const circ = ((2 * Math.PI * r) - 20);
    const strokePer = (100 - Math.round(percentage) * circ) / 100;

    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeLinecap="round"
            strokeDashOffset={percentage ? strokePer : 0}
            stoke={strokePer !== circ ? color : ""}
        ></circle >
    )
}

const ProgressCircle = ({ percentage, isPlaying, size, color }) => {
    return (
        <div className='progress-circle'>
            <svg width={size} height={size}>
                <g>
                    <Circle strokeWidth={"0.4rem"} color="#3B473"></Circle>
                </g>
            </svg>
        </div>
    )
}

export default ProgressCircle