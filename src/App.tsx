import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catergory from "./pages/Category";
import MainLayout from "./layouts/MainLayout";
import dataType from "./utilities/dataType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: async (): Promise<dataType> => {
      return fetch("/data.json").then((data) => data.json());
    },
    id: "root",
    children: [
      {
        path: "category/:category",
        element: <Catergory />,
      },

      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
