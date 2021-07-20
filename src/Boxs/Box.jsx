
const Box = ({id, color, height, width, removeBox}) => {
const _removeBox = () => { 
  removeBox(id);
};
    
    return (
        <div className="BoxHolder">
     <div className="box" style={{height:`${height}px`, width:`${width}px`, backgroundColor:color, display:`inline-block`  }} >
    </div>
    <button onClick={_removeBox}>x</button>
     </div>)}

export default Box;

