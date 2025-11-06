import { months } from "../constants/months";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import ArrowRightIcon from "../assets/arrow-right.svg";

interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function CalendarHeader({
  year,
  month,
  onPrev,
  onNext,
}: CalendarHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrev}
        className="px-2 py-1.5 text-lg bg-white border border-gray-400 rounded cursor-pointer"
      >
        <img src={ArrowLeftIcon} alt="이전 달" width={20} height={20} />
      </button>

      <span className="text-xl font-bold text-gray-700">
        {year}년 {months[month]}
      </span>

      <button
        onClick={onNext}
        className="px-2 py-1.5 text-lg bg-white border border-gray-400 rounded cursor-pointer"
      >
        <img src={ArrowRightIcon} alt="이전 달" width={20} height={20} />
      </button>
    </div>
  );
}
