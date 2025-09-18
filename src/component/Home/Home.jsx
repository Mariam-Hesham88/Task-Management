import React, { useState } from 'react'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const tasks = [
    {
      id: 1,
      title: "Finish React Project",
      category: { name: "Work", color: "bg-blue-500" },
      priority: "high",
      image: "https://via.placeholder.com/40",
      completed: false,
    },
    {
      id: 2,
      title: "Buy Groceries",
      category: { name: "Personal", color: "bg-green-500" },
      priority: "medium",
      image: "https://via.placeholder.com/40",
      completed: true,
    },
    {
      id: 3,
      title: "Pay Bills",
      category: { name: "Finance", color: "bg-yellow-500" },
      priority: "low",
      image: "https://via.placeholder.com/40",
      completed: false,
    },
  ];

  const priorities = {
    high: "bg-red-500",
    medium: "bg-orange-400",
    low: "bg-green-400",
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.category.name === filter);

  return <>
    <section className="w-[95%] mx-auto py-6 h-lvh">

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <Table hoverable>
          <TableHead className="bg-gray dark:bg-gray-700">
            <TableRow>
              <TableHeadCell className="text-left text-main">Completed</TableHeadCell>
              <TableHeadCell className="text-left text-main">Image</TableHeadCell>
              <TableHeadCell className="text-left text-main">Title</TableHeadCell>
              <TableHeadCell className="text-left text-main">Category</TableHeadCell>
              <TableHeadCell className="text-left text-main">Priority</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTasks.map((task) => (
              <TableRow
                key={task.id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {/* Completed */}
                <TableCell className="p-4">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => console.log("PATCH request here")}
                  />
                </TableCell>

                {/* Image */}
                <TableCell className="py-3">
                  <img
                    src={task.image}
                    alt={task.title}
                    className="w-10 h-10 rounded-md object-cover border border-gray-300"
                  />
                </TableCell>

                {/* Title */}
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {task.title}
                </TableCell>

                {/* Category with Color */}
                <TableCell>
                  <span
                    className={`px-3 py-1 text-white text-sm rounded-full ${task.category.color}`}
                  >
                    {task.category.name}
                  </span>
                </TableCell>

                {/* Priority Indicator */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${priorities[task.priority]}`}
                    ></span>
                    <span className="capitalize text-sm">{task.priority}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </section>
  </>
}


