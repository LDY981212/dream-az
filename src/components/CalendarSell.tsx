interface CalendarCellProps {
  day: number;
  hasEvent: boolean;
  onClick: () => void;
  isToday: boolean;
}

export default function CalendarCell({
  day,
  hasEvent,
  onClick,
  isToday,
}: CalendarCellProps) {
  return (
    <div
      onClick={onClick}
      className={`py-2 w-15 h-15 cursor-pointer hover:bg-gray-50
        ${isToday ? "bg-blue-100 font-bold" : ""}
      `}
    >
      <div>{day}</div>
      {hasEvent && (
        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1" />
      )}
    </div>
  );
}
