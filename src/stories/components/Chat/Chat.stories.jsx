import React from 'react';
import Chat from './Chat';

export default {
  title: 'Chat',
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const Default = Template.bind({});
Default.args = {};
