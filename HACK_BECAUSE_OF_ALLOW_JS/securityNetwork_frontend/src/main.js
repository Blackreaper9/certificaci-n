import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CentrosDeAyuda from './CentrosDeAyuda.jsx';
import Profesionales from './Profesionales.jsx';
import Recetas from './Recetas.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/centros-ayuda",
        element: <CentrosDeAyuda></CentrosDeAyuda>
    },
    {
        path: "/profesionales",
        element: <Profesionales />
    },
    {
        path: "/recetas",
        element: <Recetas />
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>);
/*

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";
import Home from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = Client.create({
  restCanisters: {
    backend: {
      baseUrl: "http://bd3sg-teaaa-aaaaa-qaaba-cai.localhost:4943",
    },
  },
  providers: [
    new InternetIdentity({
      providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IcpConnectContextProvider client={client}>
      <Home/>
    </IcpConnectContextProvider>
  </React.StrictMode>,
);
 */ 
