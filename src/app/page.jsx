import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import EditDeleteDropDownComponent from "@/components/EditDeleteDropDownComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function Home() {
  return (
    <main>
      <div className="flex gap-7 justify-center">
        {/* <EditDeleteDropDownComponent /> */}
        {/* <AddNewTaskComponent /> */}
        {/* <ListBoardComponentHeader/> */}
        {/* <MonthlyStatisticsComponent/> */}
        <SidebarComponent/>

      </div>
    </main>
  );
}
