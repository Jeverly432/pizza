import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainShop from "./Component/Shop/MainShop";
import MainPage from "./Component/MainPage/MinePage";
import MainBasket from "./Component/Basket/MainBasket";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/basket" element={<MainBasket />} />
          <Route path="/shop" element={<MainShop />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
