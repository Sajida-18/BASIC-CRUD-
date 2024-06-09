import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Student from './Components/Student.jsx';
import Error from './Components/Error.jsx';
import CreateStudent from './Components/CreateStudent.jsx';
import Update from './Components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Student/>,
    errorElement: <Error/>
  },
  {
    path: "CreateStudent",
    exact: true,
    element: <CreateStudent/>,
    errorElement: <Error/>
  },
  {
    path: "Update/:id",
    exact: true,
    element: <Update/>,
    errorElement: <Error/>
  },
  
]);

function App() {
  return (
    <>
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  );
}
export default App;