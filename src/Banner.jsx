import Character from "./Character";

function Banner({texte}) {

    const splitChar = texte.split("")
    console.log(splitChar)

    //const lletra = splitChar.map
    const caracteres = []
    splitChar.forEach(element => caracteres.push(<Character lletra = {element}/>));
    return (
        <>
        {caracteres}
        </>
  )
}
export default Banner