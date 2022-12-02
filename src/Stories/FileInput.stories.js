import React from 'react';

import FileInput from '../components/FileInput/FileInput';
export default {
  title: 'Form/FileInput',
  component: FileInput,
};

const Template = (args) => <FileInput {...args} />;
export const Default = Template.bind({});

Default.args = {
    props: {
        label:{
            text:"Upload File",
            class:"",
        },
        input:{
            class:"",         
        }
    }
}