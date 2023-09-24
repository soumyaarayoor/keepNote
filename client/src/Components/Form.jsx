import "./Form.css";
import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Textarea from "../Components/Textarea";

const Form = (props) => {
  const {setList}=props
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    const note={title,description}
        setList((previousValue)=>
          ([...previousValue,note])
        )
        setTitle("")
        setDescription("")
  }
  const handleReset=(e)=>{
    setTitle("")
    setDescription("")
  }

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="text_container">
        <Input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={handleTitle}
        />
        <Textarea
          placeholder="describe your note"
          value={description}
          onChange={handleDescription}
        />
      </div>
      <div className="button_container">
        <Button label="SAVE" type="submit" />
        <Button label="CANCEL" type="reset" />
      </div>
    </form>
  );
};

export default Form;
