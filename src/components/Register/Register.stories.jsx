import Register from "./Register";

export default {
  title: 'taskmaster/components/Register',
  component: Register,
  argTypes: {
    className: { control: 'text' },
  },
};

// Standardexemplet på hur komponenten ser ut
const Template = (args) => <Register {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',  // Du kan ändra className här om du vill styra stilar i Storybook
};

// Eventuellt kan du lägga till en action om du vill fånga formulärets submit och visa det i Storybook
Default.parameters = {
  actions: {
    handles: ['submit'],
  },
};
