import { Dialog } from "@radix-ui/react-dialog";
import { WeeklySummary } from "./components/weekly-summary";
import { CreateGoal } from "./components/create-goal";

export default function App() {
  return (
   <Dialog>
    {/* <EmptyGoals /> */}
    <WeeklySummary />

    <CreateGoal />
   </Dialog>
  )
}
