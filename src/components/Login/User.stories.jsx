import User from "./User";

export default {
    title: "taskmaster-components/components/User",
    component: User,
};

const Template = (args) => {
    const setUsername = (username) => {
      console.log("Username set to:", username);
    };
  
    return <User {...args} setUsername={setUsername} />;
  };
  
  export const Default = Template.bind({});
  Default.args = {};