import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Bucket from "./pages/Bucket";
import Table from "./pages/Table";
import Invoice from "./pages/Invoice";
import Footer from "./components/Footer";
import SelectTable from "./components/SelectTable";
import { useState } from "react";
// import AuthDisplayer from "./components/Authentication/AuthDisplayer";
import Account from "./pages/Account";
import Login from "./components/Authentication/Login";

function App() {
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [isTableSelect, setIsTableSelect] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [table, setTable] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header cartItemTotal={cartItemTotal} table={table} />
        {isTableSelect && (
          <SelectTable
            setIsTableSelect={setIsTableSelect}
            isTableSelect={isTableSelect}
            setTable={setTable}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItemTotal={cartItemTotal}
                setCartItemTotal={setCartItemTotal}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/bucket"
            element={
              <Bucket
                cartItemTotal={cartItemTotal}
                isAuth={isAuth}
                setCartItemTotal={setCartItemTotal}
              />
            }
          />
          <Route path="/table" element={<Table table={table} />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
export const ProtectedRoute = ({ isAuth, children }) => {
  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
