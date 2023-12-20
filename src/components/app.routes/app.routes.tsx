import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { AdminPanel } from '../admin.panel/admin.panel';
import { List } from '../list/list';
import { Appointment } from '../appointment/appointment';
const CreateCare = lazy(() => import('../../pages/create.care/create.care'));

const Home = lazy(() => import('../../pages/home/home'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/admin-panel"
            element={<AdminPanel></AdminPanel>}
          ></Route>
          <Route path="/create" element={<CreateCare></CreateCare>}></Route>
          <Route
            path="/details/hair"
            element={<List careType={'hair'}></List>}
          ></Route>
          <Route
            path="/details/eyebrows"
            element={<List careType={'eyebrows'}></List>}
          ></Route>
          <Route
            path="/details/eyelashes"
            element={<List careType={'eyelashes'}></List>}
          ></Route>
          <Route
            path="/details/nails"
            element={<List careType={'nails'}></List>}
          ></Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
