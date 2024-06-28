import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import ProductTable from "../../components/producttable/ProductTable"


const List = () => {
  const path =window.location.pathname;

  const renderComponent = () => {
    if (path === '/users') {
        return <Datatable/>;
    } else {
        return <ProductTable/>;
    }
};
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      {renderComponent()}
     {/* <Datatable/> */}
     {/* <ProductTable/> */}
    </div>
  </div>
  )
}

export default List