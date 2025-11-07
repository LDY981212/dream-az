// src/components/Calendar.tsx
import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarSell";
import ToDosList from "./ToDosList";
import toDosData from "../constants/toDos.json";
import { days } from "../constants/days";

export default function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <CalendarHeader
        year={year}
        month={month}
        onPrev={prevMonth}
        onNext={nextMonth}
      />

      <div className="grid grid-cols-7 text-center font-semibold mt-8 text-gray-500">
        {days.map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {daysArray.map((day) => {
          const dateStr = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;

          const events = toDosData.filter((e) => e.date === dateStr);

          const isToday =
            dateStr ===
            `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(today.getDate()).padStart(2, "0")}`;

          return (
            <div className="flex justify-center items-center">
              <CalendarCell
                key={day}
                day={day}
                hasEvent={events.length > 0}
                onClick={() => setSelectedDate(dateStr)}
                isToday={isToday}
              />
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <ToDosList
          date={selectedDate}
          ToDos={toDosData.filter((e) => e.date === selectedDate)}
        />
      )}
    </div>
  );
}
