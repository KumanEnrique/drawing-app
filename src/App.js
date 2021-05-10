import React,{useRef} from 'react'
import CanvasDraw from 'react-canvas-draw'

function App() {
  const firstCanvas = useRef(null)
  const secondCanvas = useRef(null)

  const handleClick = ()=>{
    const data = firstCanvas.current.getSaveData()
    secondCanvas.current.loadSaveData(data)
    console.log(data)
  }
  const clear = ()=>{
    firstCanvas.current.clear()
    secondCanvas.current.clear()
  }
  return (
    <div>
      <button onClick={handleClick}>
        Save Drawing
      </button>
      <button onClick={clear}>clear</button>
      <CanvasDraw
      brushRadius={1}
      brushColor="#130f40"
      catenaryColor="red"
      hideGrid={true}
      style={{border:"1px solid red",marginBottom:10}}
      ref={firstCanvas}
      ></CanvasDraw>

      <CanvasDraw
      hideGrid={true}
      disabled={true}
      ref={secondCanvas}
      ></CanvasDraw>
    </div>
  );
}

export default App;
