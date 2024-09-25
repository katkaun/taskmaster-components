import CalendarIcon from "../CalendarIcon/CalendarIcon";
import UserIcon from "../UserIcon/UserIcon";
import ReminderIcon from "../ReminderIcon/ReminderIcon";
import Navbar from "./Navbar";

export default {
  title: "taskmaster/components/Navbar",
  component: Navbar,
};

export const Default = () => (
  <Navbar icons={[ReminderIcon, CalendarIcon, UserIcon]} />
);

export const WithoutSubComponents = () => <Navbar />;
