import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import '../public/styles/global.css'

export function App() {
  return (
    <>
      <Header/>
      <main>
        <TaskList/>
      </main>
    </>
  )
}