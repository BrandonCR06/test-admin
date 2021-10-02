import { List, Datagrid, TextField } from 'react-admin';
import {Show, SimpleShowLayout} from 'react-admin'


export const OrderList = props => (
    <List {...props} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="Contacto" />
            <TextField source="Metodo_Entrega" />
            <TextField source="Fecha" />
            <TextField source="Proveedor" />
        </Datagrid>
    </List>
);

export const OrderShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="StockItemName" />
            <TextField source="OrderedOuters" />
            <TextField source="ExpectedUnitPricePerOuter" />
            <TextField source="PackageTypeName" />
        </SimpleShowLayout>
    </Show>
);