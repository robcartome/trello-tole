import "./AddForm.css";

function AddForm({titleButton, onCancel, addList, idBoard}){
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name} = e.target;
    addList(name.value, idBoard );
  }

  return (
  <div className="form-modal" onClick={(e)=>{
      if(e.target === e.currentTarget){
        onCancel()
      }
    }}>
    <form className="add-form" onSubmit={handleSubmit}>
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