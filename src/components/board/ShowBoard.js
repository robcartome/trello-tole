const { default: Board } = require("./Board");

function ShowBoard({setGo, boardId}){
  return ( 
    <section>
      <a onClick={()=>{setGo("main")}} >aa</a>
      <h3>TODO {boardId}</h3>
    </section>
  )
}

export default ShowBoard;