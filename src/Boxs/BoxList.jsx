import {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid"; 

const BoxList = () => {
    const INITIAL_STATE = [
        {id:uuid(), color:"black", height:20, width:20},
        {id:uuid(), color:"black", height:30, width:30}]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => { 
        setBoxes(boxes => [...boxes, {...newBox, id:uuid()}]);
    }
    const removeBox = (boxId) => {
        setBoxes(boxes => boxes.filter(b => b.id !== boxId));
    }
    
    return (    
        <div>
            <h3>Check Out These Boxes</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id,color, height, width}) => (<Box id={id} color={color} width={width} height={height}  removeBox={removeBox}/>))}
            </div>
        </div>
)}

export default BoxList;
