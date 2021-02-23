import React, { Component } from "react";

import { render } from "react-dom";
import { Stage, Layer, Text, Image,Circle } from "react-konva";
import useImage from "use-image";
const LionImage = () => {
  const [image] = useImage("https://i.ibb.co/2PfGvTs/getimage.jpg");
  return <Image image={image} />;
};

class App extends Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <LionImage
            
          />
          <Image
            x={this.props.x}
            y={this.props.y}
            image={this.state.image}
            ref={node => {
              this.imageNode = node;
            }}
          />
          <Text text="Try to drag a star" />
          
          {[...Array(50)].map(i => (
            
            <Circle
              
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              radius={10}
              fill="blue"
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById("root"));
