import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catergory from "./pages/Category";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: async () => {
      return fetch("/data.json").then((data) => data.json());
    },
    id: "root",
    children: [
      {
        path: "category",
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
