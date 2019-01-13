import React from 'react';
import { List, Filter,Datagrid, TextField,Create,SimpleForm,TextInput,Edit,DisabledInput } from 'react-admin';
import connect from './provReferenceInput';

const ProveedorTitle = ({ record }) => {
    return <span>Proveedor {record ? `"${record.title}"` : ''}</span>;
};

const ProveedorFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ProveedorList = props => (
    <List {...props} filters={<ProveedorFilter />} >
        <Datagrid rowClick="edit">
            <TextField source="id_prov" />   
            <TextField source="nombre" />
        </Datagrid>
    </List>
);


export const ProveedorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Razon Social" source="nombre" type="text" />
            <connect></connect>
        </SimpleForm>
    </Create>
);

export const ProveedorEdit = props => (
    <Edit title={<ProveedorTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id_prov" />
            <TextInput source="nombre" />
        </SimpleForm>
    </Edit>
);