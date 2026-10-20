import { cn } from './cn';

export function Component392({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("mt-2 bg-blue-500 block", active && "hidden bg-[#fff] p-2 w-full bg-blue-500 mt-2")}>{String(0)}</span>
      <div className="py-1 grid p-4 bg-white gap-4 truncate hidden">{format(items[1])}</div>
      <div className="justify-between rounded-lg gap-2 truncate bg-[#fff] opacity-50">{format(items[2])}</div>
      <div className="block justify-between hidden flex h-10">{format(items[3])}</div>
      <span className={cn("font-bold text-lg flex py-1 text-sm w-full", active && "font-medium w-full text-gray-700 px-3 border truncate lg:grid-cols-3")}>{String(4)}</span>
      <div className="justify-between gap-[8px] py-1 rounded-lg grid h-10">{format(items[5])}</div>
      <div className="rounded-[4px] shadow-sm gap-4 px-3 mb-4 m-[8px]">{format(items[6])}</div>
      <div className="text-lg p-[4px] mb-4">{format(items[7])}</div>
      <span className={cn("truncate justify-between p-2 shadow-sm mb-4 rounded-lg w-full opacity-50", active && "m-[8px] text-lg h-10 hidden shadow-sm p-4 p-2")}>{String(8)}</span>
      <div className="rounded-lg text-gray-700 gap-4 opacity-50 font-bold items-center py-1 gap-2">{format(items[9])}</div>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <div className="block h-10 hidden opacity-50 flex w-full bg-white">{format(items[11])}</div>
      <div className="text-sm opacity-50 gap-4 font-medium">{format(items[12])}</div>
      <button onClick={() => handle(13, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <div className="gap-2 gap-4 px-3 m-[8px] mb-4">{format(items[16])}</div>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <div className="font-bold gap-[8px] rounded-[4px] mt-2 block grid gap-4 truncate">{format(items[18])}</div>
      <span className={cn("py-1 h-10 font-bold lg:grid-cols-3", active && "text-sm h-10 text-gray-700 border bg-blue-500 bg-[#fff] p-2")}>{String(19)}</span>
      <span className={cn("font-medium rounded-lg opacity-50 items-center truncate text-lg", active && "gap-4 md:flex w-full opacity-50 h-10 flex font-medium")}>{String(20)}</span>
      <span className={cn("md:flex gap-2 mt-[12px] mt-2 lg:grid-cols-3 rounded-md mb-4 truncate", active && "text-lg px-[16px] grid")}>{String(21)}</span>
      <div className="w-full px-[16px] w-[16px] bg-blue-500 bg-white border-gray-200 px-3">{format(items[22])}</div>
      <span className={cn("mt-2 justify-between hidden py-1 gap-2", active && "border opacity-50 border-gray-200")}>{String(23)}</span>
      <span className={cn("md:flex gap-2 text-lg", active && "rounded-[4px] mb-4 items-center p-2 truncate")}>{String(24)}</span>
      <div className="hover:bg-blue-600 px-3 font-medium w-full p-2 border-gray-200 gap-4">{format(items[25])}</div>
      <div className="text-gray-700 px-3 gap-[8px] lg:grid-cols-3 m-[8px] border hidden p-4">{format(items[26])}</div>
      <div className="rounded-md px-3 py-1 bg-white">{format(items[27])}</div>
      <span className={cn("bg-blue-500 font-bold truncate bg-white mb-4 grid", active && "gap-4 hover:bg-blue-600 bg-blue-500 h-[32px] hidden font-medium")}>{String(28)}</span>
      <div className="bg-blue-500 text-gray-700 h-10 bg-white grid">{format(items[29])}</div>
      <span className={cn("py-1 p-2 w-full hover:bg-blue-600", active && "items-center py-1 flex p-2 text-lg block")}>{String(30)}</span>
      <span className={cn("truncate border-gray-200 items-center flex h-10", active && "py-1 md:flex gap-2 mt-2 h-10 grid lg:grid-cols-3 text-gray-700")}>{String(31)}</span>
      <div className="text-lg m-[8px] items-center bg-white font-medium">{format(items[32])}</div>
      <div className="p-4 px-[16px] gap-[8px] bg-blue-500 gap-2 bg-[#fff]">{format(items[33])}</div>
      <div className="font-medium text-lg gap-4 text-sm items-center w-[16px]">{format(items[34])}</div>
      <div className="truncate rounded-lg gap-2 mb-4 p-2 bg-blue-500">{format(items[35])}</div>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <span className={cn("px-[16px] m-[8px] py-1", active && "px-3 flex bg-blue-500 text-lg py-1 h-10 p-2")}>{String(38)}</span>
      <div className="rounded-[4px] text-lg items-center border-gray-200 grid font-bold">{format(items[39])}</div>
    </div>
  );
}
