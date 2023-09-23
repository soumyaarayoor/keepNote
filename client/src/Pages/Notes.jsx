import "./note.css"

const Note=()=>{
return(
    <div className="note">
        <div className="dataentry">
                 <form className="form">
                       <div className="text_container">
                        <input type="text" placeholder="enter title"/>
                        <textarea placeholder="describe your note">

                        </textarea>
                        

                       </div>
                       <div className="button_container">
                            <button type="submit">SAVE</button>
                            <button type="reset">CANCEL</button>
                       </div>
                 </form>
        </div>
        <div className="list_note">
                <div className="list">

                </div>
        </div>
    </div>
)



}


export default Note