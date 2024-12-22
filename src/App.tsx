import { ReactElement } from "react";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { history } from "./services/history";
import { store } from "./store";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
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
    </CustomHistoryRouter>
  );
}

export default App;
