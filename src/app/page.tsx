import { Inter } from "next/font/google";
import { AddTask, TaskTable } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="bg-black min-h-screen flex flex-col items-center">
        <h1 className="text-center text-white text-5xl mt-6">To Do List</h1>
        <div className="mt-8">
          <AddTask />
        </div>
        <TaskTable />
      </div>
    </main>
  );
}
