import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import AppRoutes from "./routes/Router";
import { store } from "./store";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />

        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          transition={Bounce}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
