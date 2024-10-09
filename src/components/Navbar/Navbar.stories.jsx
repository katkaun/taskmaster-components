import CalendarIcon from "../CalendarIcon/CalendarIcon";
import UserIcon from "../UserIcon/UserIcon";
import ReminderIcon from "../ReminderIcon/ReminderIcon";
import Navbar from "./Navbar";
import Logo from "../Logo/Logo";

export default {
  title: "taskmaster/components/Navbar",
  component: Navbar,
};

export const Default = () => (
  <Navbar icons={[ReminderIcon, CalendarIcon, UserIcon]} logo={<Logo />} />
);

export const WithoutLogo = () => (
  <Navbar icons={[ReminderIcon, CalendarIcon, UserIcon]} logo={null} />
);

export const WithoutSubComponents = () => <Navbar />;

export const WithStyling = {
  
};
