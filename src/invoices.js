import { List, Datagrid, TextField } from 'react-admin';
import {Show, SimpleShowLayout } from 'react-admin'


export const InvoiceList = props => (
    <List {...props} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="Nombre_Cliente" />
            <TextField source="Fecha" />
            <TextField source="Metodo_Entrega" />
            <TextField source="Monto" />
        </Datagrid>
    </List>
);

export const InvoiceShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Nombre_Cliente" />
            <TextField source="Metodo_Entrega" />
            <TextField source="Numero_Orden" />
            <TextField source="Contacto" />
            <TextField source="Nombre_Vendedor" />
            <TextField source="Fecha" />
            <TextField source="Instrucciones_Entrega" />
        </SimpleShowLayout>
    </Show>
);