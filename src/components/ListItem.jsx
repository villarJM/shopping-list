const ListItem = ({id, name, quantify, unit, checked, handleCheckboxChanhe}) => {
    return (
        <div className="row">
      <div className="col-1">
        <input 
          type="checkbox"
          name={id}
          onChange={(e)=>handleCheckboxChanhe(e)}
          checked={checked} 
        />
      </div>
      <div className="col text-start">
      {
        checked ? <s>{`${quantify} ${unit}`}</s> : `${quantify} ${unit}`
      }
      </div>
      <div 
      className="col-5 col-md-7 text-start" 
      style={{textDecoration: checked && "line-through"}}
      >
      {`${name}`}
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end" role="group">
        <button className="btn btn-outline-primary">
          <i className="bi bi-pencil-square"></i>
          </button>
        <button className="btn btn-outline-info">
          <i className="bi bi-files"></i>
          </button>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
          </button>
      </div>
    </div>
    )
}
export default ListItem;