import Password from "./Password";

export default {
    title: "taskmaster-components/components/Password",
    component: Password,
};

const Template = (args) => {
    const setPassword = (password) => {
      console.log("Password set to:", password);
    };
  
    return <Password {...args} setPassword={setPassword} />;
  };
  
  export const Default = Template.bind({});
  Default.args = {};
  