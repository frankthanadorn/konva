// @flow
import React, { Component } from "react";
import { Stage, Layer, Image, Circle, Group } from "react-konva";

export default class Canvas extends Component {
  $canvas: any;

  state = {
   
    x: 50,
    y: 150,
    image: null,
    url: ""
  };

  componentDidMount() {
    this._initImage();
    // if (this.$canvas) {
    //   this._getUrl();
    // }
  }

  _setCanvasRef = node => {
    this.$canvas = node;
  };


  _getUrl = () => {
    const url = this.$canvas.toDataURL();
    this.setState({ url });
  };

  _initImage = () => {
    const image = new window.Image();
    image.crossOrigin = "Anonymous";
    image.src =
      "https://i.ibb.co/NV710tk/getimage.jpg";
    image.onload = () => {
      this.setState(
        {
          image
        },
        () => this._getUrl()
      );
    };
  };

  

  _drawImage = () => {
    const { image } = this.state;
    return (
      <Image x={150} y={100}  image={image} width={360} height={438} />
    );
  };

  _drawShape = () => {
    return (
      <Circle
        x={200}
        y={200}
        radius={50}
        fill="red"
        stroke="black"
        strokeWidth={4}
        
      />
    );
  };

  render() {
    const { url } = this.state;
    return (
      <div>
        <Stage
          ref={this._setCanvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          // container={containerClass}
        >
          <Layer>
            <Group>
              
              {this._drawImage()}
              {this._drawShape()}
            </Group>
          </Layer>
        </Stage>
        <img src={url} alt="a" />
      </div>
    );
  }
}
