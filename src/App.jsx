import { Provider } from "react-redux";

// react components.
import MainLayout from "./layouts/MainLayout";

// redux store.
import store from "./redux/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
