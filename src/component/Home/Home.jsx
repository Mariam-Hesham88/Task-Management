import React, { useEffect, useState } from 'react'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';

export default function Home() {
  let [tasks, setTasks] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  function getAllCategories() {
    axios.get(`https://kbybdtacoqvgcijrkzkv.supabase.co/rest/v1/categories?order=name.asc`, {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE`,
      },
    })
      .then((request) => {
        setCategories(request.data);
        console.log(categories);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function getAllTasks() {
    setIsLoading(true);
    axios.get(`https://kbybdtacoqvgcijrkzkv.supabase.co/rest/v1/tasks?order=created_at.desc&limit=${limit}&offset=${(page - 1) * limit}`, {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieWJkdGFjb3F2Z2NpanJremt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzUwNjAsImV4cCI6MjA3MTYxMTA2MH0.SAF_9jupuaVLHq0l7Zbew7t6avUdg_UkdVGqLZmHTQE`,
      },
    })
      .then((request) => {
        setTasks(request.data);
        console.log(tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllTasks();
    getAllCategories();
  }, [page]);

  return <>
    <section className="w-[95%] mx-auto py-6">
      {isLoading ?
        <div className="flex justify-center items-center h-screen">
          <span className="text-2xl font-bold animate-pulse text-second">Loading...</span>
        </div>

        :

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
              {tasks.map((task) => (
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
                      src={task.image_url}
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
                      className={`px-3 py-1 text-white text-sm rounded-full`}
                      style={{ backgroundColor: categories.find(c => c.id === task.category_id)?.color }}
                    >
                     {categories.find(c => c.id === task.category_id)?.name}
                    </span>
                  </TableCell>

                  {/* Priority Indicator */}
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block w-3 h-3 rounded-full`}
                      ></span>
                      <span className="capitalize text-sm">{task.priority}</span>
                    </div>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      }

       {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <button className='text-main'
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span className="px-4 py-2 border rounded text-second">Page {page}</span>
            <button  className='text-main'
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>

    </section >
  </>
}


// className={`px-3 py-1 text-white text-sm rounded-full ${task.category.color}`}

