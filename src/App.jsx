import { useState } from "react"
import ListItem from "./components/ListItem";
import NewListItemButton from "./components/NewListItemButton";
import Swal from 'sweetalert2'

function App() {
  const [listItems, setListItems] = useState([
    {
      id: "1",
      name: "Tortillas",
      quantity: 2,
      unit: "Kg",
      checked: false,
    },
    {
      id: "2",
      name: "Aceite",
      quantity: 900,
      unit: "ml",
      checked: false,
    },
  ]);

  const handleNewListItemButton = async () => {
    const {value} = await Swal.fire({
      title: "New Item Information",
      html: `<input type='text' id='name' name='name' class='swal2-input' placeholder='Item' />
              <input type='number' id='quantify' name='quantify' class='swal2-input' placeholder='Qty'/>
              <input type='text' id='unit' name='unit' class='swal2-input' placeholder='unit'/>`,
      confirmButtonText: "Add item",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const quantify = Swal.getPopup().querySelector('#quantify').value;
        const unit = Swal.getPopup().querySelector('#unit').value;
        if (!name || !quantify || !unit) {
          Swal.showValidationMessage('Please enter an item full information');
        }
        return {name, quantify, unit};
      },
    })
    setListItems([
      ...listItems, {id: (listItems.length + 1).toString, ...value, checked: false}
    ])
  }
  const handleCheckboxChanhe = (e) => {
    const newList = listItems.map(item => {
      if (item.id === e.target.name) {
        item.checked = !item.checked;
      }

      return item;

    })
    setListItems(newList);
  }

  return (
    <div className="container text-center">
    <div className="row">
      <div className="col-2"></div>
      <div className="col">
        <h1>Shopping List</h1>
        <br />
      </div>
      <div className="col-2 text-end">
        <NewListItemButton handleNewListItemButton={handleNewListItemButton}/>
      </div>
    </div>
    <hr />
    {
      listItems.map((ListItems) => (
        <ListItem 
          id={ListItems.id}
          name={ListItems.name} 
          quantify={ListItems.quantity} 
          unit={ListItems.unit} 
          checked={ListItems.checked} 
          handleCheckboxChanhe={handleCheckboxChanhe}
        />
      ))
    }
    {/* <div className="row">
      <div className="col-1">
        <input 
        type="checkbox"
        name={listItems[1].id}
        onChange={(e)=>handleCheckboxChanhe(e)}
        checked={listItems[1].checked}  
        />
      </div>
      <div className="col text-start">
      {
        listItems[1].checked ?
        <s>{`${listItems[1].quantity} ${listItems[1].unit}`}</s> : 
        `${listItems[1].quantity} ${listItems[1].unit}`
      }
      </div>
      <div className="col-5 col-md-7 text-start"
        style={{textDecoration: listItems[1].checked && "line-through"}}
      >
        {`${listItems[1].name}`}
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
    </div> */}
    <hr />
    <div className="row">
      <div className="col text-end">
        <NewListItemButton handleNewListItemButton={handleNewListItemButton}/>
      </div>
    </div>
  </div>
  )
}

export default App