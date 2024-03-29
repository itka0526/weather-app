type DaySelectButtonProps = {
  onClick: (attr?: any) => any;
  isSelected: boolean;
  text: string;
  date: string;
}

const DaySelectButton = ({ text, date, onClick, isSelected }: DaySelectButtonProps) => {
  return (
    <li className={`daySelectButton h-full w-fit ${isSelected ? "bg-slate-600 rounded-t-xl text-white" : ""}`}>
      <button
        onClick={onClick}
        className={`daySelectButton__button h-fit w-fit py-1 px-6`}
      >
        <div className="daySelectButton__content flex flex-col">
          <span className="daySelectButton__dayText font-bold">
            {text},
          </span>
          <span className="daySelectButton__date whitespace-nowrap">
            {date}
          </span>
        </div>
      </button>
    </li>
  )
}

export default DaySelectButton