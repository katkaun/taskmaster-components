import Login from './Login';

export default{
    title: "taskmaster/components/Login",
    component: Login,
};

const Template = (args) => {
    const handleLogin = (username, password) => {
      console.log('Login attempted with:', username, password);
    };
  
    return <Login {...args} onLogin={handleLogin} />;
  };
  
  export const Default = Template.bind({});
  Default.args = {};