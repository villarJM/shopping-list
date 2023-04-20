const NewListItemButton = ({handleNewListItemButton}) => {
  return (
    <button onClick={handleNewListItemButton} type="button" className="btn btn-outline-success btn-sm mt-1">
        <i class="bi bi-plus-circle-fill"></i>
    </button>
  )
}

export default NewListItemButton