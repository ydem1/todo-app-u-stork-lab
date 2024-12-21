import { ReactElement } from "react";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { history } from "./services/history";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <AppRoutes />
    </CustomHistoryRouter>
  );
}

export default App;
