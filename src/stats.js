import { List, Datagrid, TextField } from 'react-admin';

export const Stats1List = props => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="Proveedor" />
            <TextField source="Categoria" />
            <TextField source="Monto_minimo" />
            <TextField source="Monto_maximo" />
            <TextField source="Monto_promedio" />
        </Datagrid>
    </List>
);

export const Stats2List = props => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="Cliente" />
            <TextField source="Categoria" />
            <TextField source="Minimo" />
            <TextField source="Maximo" />
            <TextField source="Promedio" />
        </Datagrid>
    </List>
);

export const Stats3List = props => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="Item" />
            <TextField source="Monto" />
            <TextField source="Fecha" />
            <TextField source="Ranking" />
        </Datagrid>
    </List>
);

export const Stats4List = props => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="Cliente" />
            <TextField source="Cantidad" />
            <TextField source="Fecha" />
            <TextField source="Ranking" />
        </Datagrid>
    </List>
);

export const Stats5List = props => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="Proveedor" />
            <TextField source="Cantidad" />
            <TextField source="Fecha" />
            <TextField source="Ranking" />
        </Datagrid>
    </List>
);