import { List, Datagrid, TextField } from 'react-admin';
import {Show, SimpleShowLayout} from 'react-admin'
import MyUrlField from './MyUrlField';
import { TextInput} from 'react-admin';
import { GMapField } from '@fusionworks/ra-google-maps-input';


const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];



export const CustomerList = props => (
    <List filters={customerFilters}{...props} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="Nombre_Cliente" />
            <TextField source="Categoria_Cliente" />
            <TextField source="Metodo_Entrega" />
        </Datagrid>
    </List>
);

export const CustomerShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="Nombre_Cliente" />
            <TextField source="Categoria_Cliente" />
            <TextField source="Grupo_de_compra" />
            <TextField source="Contacto_Primario" />
            <TextField source="Contacto_Secundario" />
            <TextField source="BillToCustomerID" />
            <TextField source="Metodo_Entrega" />
            <TextField source="Ciudad_Entrega" />
            <TextField source="Codigo_Postal" />
            <TextField source="Telefono" />
            <TextField source="Fax" />
            <TextField source="Dias_gracia" />
            <MyUrlField source="Sitio_Web" />
            <TextField source="Direccion" />
            <TextField source="Direccion2" />
            <TextField source="Direccion_Postal" />
            <TextField source="DeliveryLocation" />
            <TextField source="DeliveryLocation.points" />
            <TextField source="DeliveryLocation.points.'x'" />
            <GMapField
                coordinates="10.006795 -83.038241 0"
                googleKey="AIzaSyANb5QAULnztYRCRw8NZDIWwyShO-67qxg"
            />
        </SimpleShowLayout>
    </Show>
);