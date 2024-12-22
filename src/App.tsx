import { ReactElement } from "react";
import { Provider } from "react-redux";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { history } from "./services/history";
import { store } from "./store";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </CustomHistoryRouter>
  );
}

export default App;
