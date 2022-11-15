import { Provider } from "react-redux";
import "./App.css";
import MyRoutes from "./MyRoutes";
import myStore, { myPersistor } from "./components/reducers/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
