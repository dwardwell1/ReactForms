import { useState } from "react";


const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))};
    const handleSubmit = (event) => {
        event.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Choose Color</label>
            <input type="color" 
            id="color"
            name="color" 
            value={formData.name}
            onChange={handleChange} />
            <label htmlFor="height">Height: {formData.height}</label>
            <input type="range"
            min="10"
            max="200"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange} />
            <label htmlFor="width">Width: {formData.width}</label>
            <input type="range"
            min="10"
            max="200"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}/>
            <input type="submit" value="Add" />
            
        </form>
        
    )}

export default NewBoxForm;

