import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const LionImage = () => {
  const [image] = useImage('http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg');
  return <Image image={image} />;
};


class App extends Component {
  render() {
    return (
      <Stage width={360} height={438}>
        <Layer>
          <LionImage />
        </Layer>
      </Stage>
    );
  }
}

export default App;
