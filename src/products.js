import { List, Datagrid, TextField } from 'react-admin';
import {Show, SimpleShowLayout} from 'react-admin'

export const ProductList = props => (
    <List {...props} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="Producto" />
            <TextField source="Cantidad_Inventario" />
        </Datagrid>
    </List>
);

export const ProductShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Producto" />
            <TextField source="Cantidad" />
            <TextField source="Color" />
            <TextField source="Unidad_empaquetamiento" />
            <TextField source="Empaquetamiento" />
            <TextField source="QuantityPerOuter" />
            <TextField source="Marca" />
            <TextField source="Medida" />
            <TextField source="Impuesto" />
            <TextField source="Precio_Unitario" />
            <TextField source="Precio_Venta" />
            <TextField source="Peso" />
            <TextField source="Palabras_clave" />
            <TextField source="Ubicacion" />
        </SimpleShowLayout>
    </Show>
);