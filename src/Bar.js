import React from 'react'
import { Rect, Text, G, Marker, Path, Defs } from 'react-native-svg'

const Bar = props => {
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

  return (
    <G onPressIn={() => onPress(task)}>
      <Rect
        x={x}
        y={y}
        height={1}
        width={taskDuration * taskProgress}
        strokeWidth={2}
        fill={primaryColor}
      />

      <Rect
        x={x + taskDuration * taskProgress}
        y={y}
        height={10}
        width={taskDuration - taskDuration * taskProgress}
        strokeWidth={2}
        fill={secondaryColor}
      />

      <Text
        fill={textColor}
        stroke={textColor}
        fontSize={12}
        textAnchor="start"
        x={x + 10}
        y={y + (barHeight + 10) / 2}
      >
        {task.name}
      </Text>
    </G>
  )
}

const Arrow = props => {
  const {
    index,
    startVal,
    endVal,
    scale,
    barHeight,
    task,
    onPress,
    primaryColor,
    //secondaryColor,
    textColor
  } = props

  const padding = 4

  const x = scale(startVal)
  const y = barHeight * index + padding * (index + 1)
  const taskDuration = scale(endVal) - scale(startVal)
  const taskProgress = task.progress ? task.progress : 0

  return (

  
    <G onPressIn={() => onPress(task)}>
      <Defs>
      <Marker
        id="Triangle"
        viewBox="0 0 100 10"
        refX={x}
        refY={y}
        markerUnits="strokeWidth"
        markerWidth={taskDuration * taskProgress}
        markerHeight="10"
        orient="auto"
      >
        <Path d="M 0 0 L 10 5 L 0 10 z" />
      </Marker>
      </Defs>
      
    <Path
      d={`M ${taskDuration * taskProgress} ${y} L  ${x}  ${y} L ${taskDuration * taskProgress}  ${y}`}
      fill={primaryColor}   
      stroke="black"
      strokeWidth={1}

      markerEnd="url(#Triangle)"
    />

    <Text
        fill={textColor}
        stroke={textColor}
        fontSize={12}
        textAnchor="start"
        x={x + 10}
        y={y + (barHeight + 10) / 2}
      >
        {task.name}
      </Text>
      </G>
  )
}

export default Arrow
