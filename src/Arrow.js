import React, { Component } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const App = props =>  {

    const {
        index,
        startVal,
        endVal,
        scale,
        barHeight,
        task,
        onPress,
        primaryColor,
        secondaryColor,
        textColor
      } = props
    
      const padding = 4
    
      const x = scale(startVal)
      const y = barHeight * index + padding * (index + 1)
      const taskDuration = scale(endVal) - scale(startVal)
      const taskProgress = task.progress ? task.progress : 0

const drawHead = (x0, y0, x1, y1, h, w) => {
    var L = Math.sqrt(Math.pow((x0 - x1),2)+Math.pow((y0 - y1),2));

    //first base point coordinates
    var base_x0 = x1 + (w/2) * (y1 - y0) / L;
    var base_y0 = y1 + (w/2) * (x0 - x1) / L;

    //second base point coordinates
    var base_x1 = x1 - (w/2) * (y1 - y0) / L;
    var base_y1 = y1 - (w/2) * (x0 - x1) / L;

    var dx=0
    var dy=0;
    var head_x=0;
    var head_y=0;
    
    if (x1 == x0){
        dx = 0;
        dy = h;
      if (y1 < y0){
          dy = -h
      }else{
          dy = h
      }
    }else{
      if (x1 < x0) {
          h = -h
      }
      var slope = (y1 - y0) / (x1 - x0)
      dx = h / Math.sqrt(1 + (slope^2))
      dy = dx * slope
    }

    //head_points
    head_x = x1 + dx;
    head_y = y1 + dy;

    return `${base_x0},${base_y0} ${base_x1},${base_y1} ${head_x},${head_y}`
}

  {
      var x1=100
      var y1=100
      var x2=200
      var y2=100

      var arrowPoints = this.drawHead(x1,y1,x2,y2,8,10)

      return (
        <Svg width={300} height={300}>
          <Line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={'green'}
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <Polygon
            points={arrowPoints}
            fill="green"
          />
        </Svg>
      );
  }
}
