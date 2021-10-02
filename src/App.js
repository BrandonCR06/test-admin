// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';

//Modulos y estadisticas
import { CustomerList, CustomerShow } from './customers';
import { SupplierList, SupplierShow } from './suppliers';
import { ProductList, ProductShow} from './products';
import { InvoiceList, InvoiceShow } from './invoices';
import { OrderList, OrderShow } from './orders';
import { Stats1List, Stats2List, Stats3List, Stats4List, Stats5List} from './stats';
import Dashboard  from './Dashboard';

//Iconos
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PollIcon from '@material-ui/icons/Poll';


//Consultas json
import dataProvider from './dataProvider';
//import jsonServerProvider from 'ra-data-json-server';
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

//simpleRestProvider('http://localhost:8090/', fetchUtils.fetchJson, 'X-Total-Count'

//Aplicacion WEB
const App = () => (
  <Admin dashboard = {Dashboard} dataProvider={dataProvider}>
       <Resource name="customers" list={CustomerList} show={CustomerShow} icon={UserIcon}/>
       <Resource name="suppliers" list={SupplierList} show={SupplierShow} icon={ContactsIcon}/>
       <Resource name="products" list={ProductList} show={ProductShow} icon={ShoppingCartIcon}/>
       <Resource name="invoices" list={InvoiceList} show={InvoiceShow} icon={ReceiptIcon}/>
       <Resource name="orders" list={OrderList} show={OrderShow} icon={PostIcon}/>
       <Resource name="stats1" list={Stats1List} icon={PollIcon}/>
       <Resource name="stats2" list={Stats2List} icon={PollIcon}/>
       <Resource name="stats3" list={Stats3List} icon={PollIcon}/>
       <Resource name="stats4" list={Stats4List} icon={PollIcon}/>
       <Resource name="stats5" list={Stats5List} icon={PollIcon}/>
  </Admin>
);


export default App;

