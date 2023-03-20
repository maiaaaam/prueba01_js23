import Banner from "./Banner"


export default function Character(props) {
    const colors = ["black",  "gray", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "navy", "blue", "teal"]
    var coloRan = colors[Math.floor(Math.random()*colors.length)];
  return (
    <div style={{backgroundColor: coloRan}} className="lletra">{props.lletra} </div>
  )
}
