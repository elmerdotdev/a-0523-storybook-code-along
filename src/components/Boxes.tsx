type Props = {
  width?: number,
  height?: number,
  backgroundColor?: string,
  color?: 'black' | 'white' | 'blue',
  fontSize?: number,
  hovered?: boolean
}

function Boxes({
  width = 200,
  height = 200,
  backgroundColor = '#000',
  color = 'white',
  fontSize = 20,
  hovered = false
}: Props) {
  return (
    <div style={{
      width: width,
      height: height,
      backgroundColor: hovered? 'cyan' : backgroundColor,
      color: color,
      fontSize: fontSize
    }}>Hello world!</div>
  )
}

export default Boxes