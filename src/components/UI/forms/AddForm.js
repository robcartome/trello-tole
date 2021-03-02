import "./AddForm.css";

function AddForm({titleButton, onCancel}){
  return (
  <div className="card-modal">
    <form className="add-form">
      <div className="add-form__container">
          <div className="add-form__field">
            <input name="description" placeholder="Type name of list.." />
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