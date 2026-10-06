"use client";
import { useState } from "react";

type listitem = {
  id: number;
  name: string;
  count: number;
};

export default function Home() {
  const [list, setList] = useState<listitem[]>([
    { id: 0, name: "ahmed", count: 0 },
    { id: 1, name: "ali", count: 0 },
    { id: 2, name: "mohamed", count: 0 },
  ]);

  function handleIncrement(id: number) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }

  function deleteItem(id: number) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold mb-4">Counter List</h1>
        <ul className="space-y-2">
          {list.map((item) => (
            <li key={item.id}>
              {" "}
              - {item.name}: {item.count}
              <button
                onClick={(e) => {
                  e.preventDefault();

                  handleIncrement(item.id);
                }}
              >
                +
              </button>
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
