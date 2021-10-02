import { List, Datagrid, TextField } from 'react-admin';
import {Show, SimpleShowLayout } from 'react-admin'
import { GMapField } from '@fusionworks/ra-google-maps-input';


export const SupplierList = props => (
    <List {...props} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="Proveedor" />
            <TextField source="Categoria" />
            <TextField source="Metodo_Entrega" />
        </Datagrid>
    </List>
);

export const SupplierShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Codigo_Proveedor" />
            <TextField source="Proveedor" />
            <TextField source="Categoria" />
            <TextField source="Contacto_Primario" />
            <TextField source="Contacto_Alternativo" />
            <TextField source="Metodo_Entrega" />
            <TextField source="Ciudad_Entrega" />
            <TextField source="Postal_Entrega" />
            <TextField source="Telefono" />
            <TextField source="Fax" />
            <TextField source="Sitio_Web" />
            <TextField source="Direccion" />
            <TextField source="Direccion2" />
            <TextField source="Postal_Direccion" />
            <TextField source="Postal_Direccion2" />
            <TextField source="DeliveryLocation" />
            <TextField source="Banco" />
            <TextField source="Numero_Cuenta" />
            <TextField source="Dias_Gracia" />
            <GMapField
                coordinates="10.006795 -83.038241 0"
                googleKey="AIzaSyANb5QAULnztYRCRw8NZDIWwyShO-67qxg"
            />
        </SimpleShowLayout>
    </Show>
);