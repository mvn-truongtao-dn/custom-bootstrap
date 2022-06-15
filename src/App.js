import logo from "./logo.svg";
import "./assets/scss/styles.scss";
import Accordion from "./page/Accordions/Accordion";
import Accordion2 from "./page/Accordions/Accordion2";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Alerts from "./page/Alerts";
import Badge from "./page/Badge";
import Buttons from "./page/Buttons";
import ButtonGroup from "./page/ButtonGroup";
import Card from "./page/Card";
import CloseButton from "./page/CloseButton";
import Collapse from "./page/Collapse";
import Dropdown from "./page/Dropdown";
import Header from "./components/Layouts/Header";
import ListGroup from "./page/ListGroup";
import Modal from "./page/Modal";
import NavTag from "./page/NavsTags";
import Navbar from "./page/Navbar";
import Offcanvas from "./page/Offcanvas";
import Pagination from "./page/Pagination";
import Placeholder from "./page/Placeholders";
import Popovers from "./page/Popovers";
import Progress from "./page/Progress";
import Spinners from "./page/Spinners";
import Toasts from "./page/Toasts";
import Tooltips from "./page/Tooltips";
import Scrollspy from "./page/Scrollspy";
import Breadcrumb from "./page/Breadcrumb";

function App() {
  return (
    <div className="">
      {/* <Accordion></Accordion> */}
      <Header></Header>
      <div className="page-main">
        <Routes>
          <Route path="/accordion" element={<Accordion2 />}></Route>
          <Route path="/alerts" element={<Alerts />}></Route>
          <Route path="/badge" element={<Badge />}></Route>
          <Route path="/buttons" element={<Buttons />}></Route>
          <Route path="/button_group" element={<ButtonGroup />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/close_button" element={<CloseButton />}></Route>
          <Route path="/collapse" element={<Collapse />}></Route>
          <Route path="/dropdown" element={<Dropdown />}></Route>
          <Route path="/listgroup" element={<ListGroup />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
          <Route path="/navs-tags" element={<NavTag />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/offcanvas" element={<Offcanvas />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/placeholders" element={<Placeholder />}></Route>
          <Route path="/popovers" element={<Popovers />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
          <Route path="/spinners" element={<Spinners />}></Route>
          <Route path="/toasts" element={<Toasts />}></Route>
          <Route path="/tooltips" element={<Tooltips />}></Route>
          <Route path="/scrollspy" element={<Scrollspy />}></Route>
          <Route path="/breadcrumb" element={<Breadcrumb />}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
