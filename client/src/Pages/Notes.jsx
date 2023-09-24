import "./note.css";

import Form from "../Components/Form";
import List from "../Components/List";
import { useState } from "react";

const Note = () => {
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <div className="note">
      <div className="dataentry">
        <Form setList={setList} />
      </div>
      <div className="list_note">
        {list.map((note) => (
          <List title={note.title} description={note.description} />
        ))}
      </div>
    </div>
  );
};

export default Note;
