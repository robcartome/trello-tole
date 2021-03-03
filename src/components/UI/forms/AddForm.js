import "./AddForm.css";

function AddForm({titleButton, onCancel, onSubmit, listData, idBoard}){
  console.log("form:",listData);

  let ar = [];
  let newIdList = 0;

  listData.forEach((list)=>ar.push(list.listId))
  newIdList = ((Math.max(...ar) || 0) + 1 );
  
  console.log(idBoard, newIdList);
  return (
  <div className="form-modal" onClick={(e)=>{
      if(e.target === e.currentTarget){
        onCancel()
      }    
    }}>
    <form className="add-form"
      onSubmit={(e)=>{
        e.preventDefault();
        const {name} = e.target;
        console.log(name.value);
        onSubmit(name.value, newIdList, idBoard );
      }}
    >
      <div className="add-form__container">
          <div className="add-form__field">
            <input type="text" name="name" placeholder="Type name of list.." />
          </div>
          <footer className="add-form__footer">
            <button type="submit" className="button">
            {titleButton}
            </button>
          </footer>
        </div>
    </form>
  </div>)
}

export default AddForm;