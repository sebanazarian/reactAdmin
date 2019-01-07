import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import { Edit, Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput,LongTextInput } from 'react-admin';
import { Filter, Responsive, SimpleList} from 'react-admin';

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="Pepe" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );


export const PostList = props => (
    <List {...props} filters={<PostFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
        medium={
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
        }
        />
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Cliente" source="title" type="text" />
            <LongTextInput source="body" />
       
        </SimpleForm>
    </Create>
);