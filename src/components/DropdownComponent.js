const DropdownComponent = ({ changeFoodData }) => {
  return (
    <nav>
      <h2>Dynamic Dropdown</h2>
      <select className="menu" onChange={changeFoodData}>
        <option value="All Menu">All Menu</option>
        <option value="Stir Fry">Stir Fry</option>
        <option value="Curry/Soup">Curry/Soup</option>
        <option value="Steak/Grill">Steak/Grill</option>
        <option value="Soft Drink">Soft Drink</option>
      </select>
    </nav>
  );
};

export default DropdownComponent;
