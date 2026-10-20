import { cn } from './cn';

export function Component79({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("border font-bold shadow-sm md:flex p-4 rounded-md text-sm w-full", active && "py-1 p-2 h-[32px] border bg-blue-500 mb-4 rounded-[4px] lg:grid-cols-3")}>{String(0)}</span>
      <div className="mb-4 hover:bg-blue-600 h-10 lg:grid-cols-3">{format(items[1])}</div>
      <div className="opacity-50 border-gray-200 justify-between lg:grid-cols-3 bg-[#fff] font-medium">{format(items[2])}</div>
      <div className="grid text-gray-700 hidden bg-blue-500 items-center px-3 gap-2">{format(items[3])}</div>
      <div className="opacity-50 block bg-[#000] px-3 font-bold rounded-md bg-[#fff] mt-2">{format(items[4])}</div>
      <span className={cn("flex gap-4 font-bold bg-[#000]", active && "border-gray-200 h-[32px] md:flex")}>{String(5)}</span>
      <div className="px-[16px] bg-[#000] shadow-sm h-10 m-[8px]">{format(items[6])}</div>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <div className="text-sm h-10 block">{format(items[8])}</div>
      <div className="hidden lg:grid-cols-3 p-2 shadow-sm font-bold block border">{format(items[9])}</div>
      <span className={cn("w-full justify-between border-gray-200 text-gray-700 items-center", active && "h-10 px-3 bg-[#fff] w-full")}>{String(10)}</span>
      <span className={cn("text-gray-700 rounded-lg hover:bg-blue-600 font-medium w-full", active && "block gap-4 items-center")}>{String(11)}</span>
      <div className="mb-4 text-lg rounded-lg text-sm rounded-md">{format(items[12])}</div>
      <div className="shadow-sm border-gray-200 mb-4 opacity-50 gap-4 gap-2">{format(items[13])}</div>
      <div className="border-gray-200 justify-between p-2">{format(items[14])}</div>
      <div className="truncate font-bold bg-blue-500">{format(items[15])}</div>
      <div className="border-gray-200 p-4 text-sm rounded-lg lg:grid-cols-3 font-medium">{format(items[16])}</div>
      <span className={cn("text-lg w-[16px] font-bold opacity-50 gap-4 font-medium truncate p-4", active && "bg-[#fff] rounded-lg block border mt-[12px] gap-4")}>{String(17)}</span>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg h-10 rounded-md border px-3", active && "text-lg bg-white opacity-50 bg-blue-500 font-bold")}>{String(19)}</span>
      <span className={cn("items-center mb-4 gap-4 lg:grid-cols-3 border mt-2 px-3 text-gray-700", active && "mt-2 gap-2 w-full mb-4")}>{String(20)}</span>
      <div className="py-1 h-10 p-2 flex text-sm bg-white md:flex grid">{format(items[21])}</div>
      <div className="rounded-lg justify-between text-lg rounded-md shadow-sm text-sm bg-[#fff] mt-2">{format(items[22])}</div>
      <div className="m-[8px] flex gap-4 lg:grid-cols-3 items-center mt-2">{format(items[23])}</div>
      <div className="mt-2 p-2 justify-between">{format(items[24])}</div>
      <div className="gap-4 p-2 py-1">{format(items[25])}</div>
      <div className="mb-4 w-full rounded-lg">{format(items[26])}</div>
      <span className={cn("hidden px-3 text-gray-700 opacity-50", active && "text-sm rounded-[4px] hover:bg-blue-600 px-3")}>{String(27)}</span>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg grid mb-4 mt-2">{format(items[29])}</div>
      <div className="lg:grid-cols-3 shadow-sm bg-white p-4 items-center gap-2">{format(items[30])}</div>
      <div className="items-center gap-2 grid">{format(items[31])}</div>
      <div className="md:flex rounded-lg w-full m-[8px] p-2 text-sm rounded-md flex">{format(items[32])}</div>
      <div className="border h-[32px] md:flex">{format(items[33])}</div>
      <div className="text-lg gap-4 border-gray-200 gap-2 bg-[#000]">{format(items[34])}</div>
      <div className="font-medium shadow-sm hidden gap-4 text-lg">{format(items[35])}</div>
      <div className="rounded-md h-[32px] mt-[12px]">{format(items[36])}</div>
      <span className={cn("font-medium md:flex hidden", active && "font-bold rounded-lg block p-2 border-gray-200")}>{String(37)}</span>
      <span className={cn("mt-2 flex grid font-bold", active && "mb-4 hover:bg-blue-600 bg-[#fff] text-sm md:flex px-[16px] gap-[8px] shadow-sm")}>{String(38)}</span>
      <span className={cn("truncate gap-2 mb-4 bg-[#000]", active && "bg-blue-500 truncate grid font-bold")}>{String(39)}</span>
    </div>
  );
}
