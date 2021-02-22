import React from "react";
import { Stage, Layer, Circle } from "react-konva";

export default function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle
          x={100}
          y={100}
          width={100}
          height={100}
          
          shadowBlur={1}
        />
      </Layer>
    </Stage>
  );
}