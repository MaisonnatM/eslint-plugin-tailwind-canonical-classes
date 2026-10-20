import { cn } from './cn';

export function Component232({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="justify-between gap-2 gap-4 border-gray-200 m-[8px] rounded-[4px] hidden">{format(items[0])}</div>
      <span className={cn("block items-center font-bold", active && "py-1 opacity-50 p-2 bg-[#fff] rounded-md w-full hidden")}>{String(1)}</span>
      <span className={cn("justify-between hover:bg-blue-600 font-bold", active && "rounded-[4px] hidden lg:grid-cols-3 text-sm rounded-md")}>{String(2)}</span>
      <div className="py-1 lg:grid-cols-3 w-full items-center h-[32px] mb-4 truncate">{format(items[3])}</div>
      <span className={cn("mt-2 border w-full items-center", active && "px-[16px] w-[16px] font-bold p-2 mt-2")}>{String(4)}</span>
      <div className="rounded-md flex gap-2 font-bold px-3 p-2 font-medium">{format(items[5])}</div>
      <span className={cn("rounded-lg rounded-md px-3 p-4 grid", active && "bg-[#000] font-bold border bg-white text-sm border-gray-200 hover:bg-blue-600")}>{String(6)}</span>
      <div className="bg-[#fff] h-10 opacity-50 font-bold p-2">{format(items[7])}</div>
      <div className="rounded-md block flex lg:grid-cols-3 gap-[8px]">{format(items[8])}</div>
      <span className={cn("mt-2 lg:grid-cols-3 p-[4px] font-bold grid hidden gap-2 items-center", active && "mt-2 hidden bg-white font-bold items-center border-gray-200 text-sm py-1")}>{String(9)}</span>
      <button onClick={() => handle(10, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="font-medium px-[16px] hidden md:flex font-bold mt-2 text-lg opacity-50">{format(items[12])}</div>
      <div className="border-gray-200 mb-4 grid rounded-md border items-center">{format(items[13])}</div>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(15, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-md w-[16px] gap-[8px] opacity-50", active && "gap-2 text-lg lg:grid-cols-3 hidden bg-blue-500 mt-2 shadow-sm")}>{String(16)}</span>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <span className={cn("font-medium px-3 shadow-sm h-10 justify-between flex", active && "p-[4px] mb-4 flex py-1 shadow-sm")}>{String(18)}</span>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg px-[16px] font-bold", active && "bg-white hidden border-gray-200")}>{String(20)}</span>
      <div className="bg-[#fff] opacity-50 flex block grid px-3 gap-2 border">{format(items[21])}</div>
      <span className={cn("h-10 gap-4 rounded-md hover:bg-blue-600", active && "rounded-md lg:grid-cols-3 gap-2 hidden")}>{String(22)}</span>
      <span className={cn("border-gray-200 bg-white shadow-sm h-10 items-center bg-[#000]", active && "justify-between border-gray-200 opacity-50")}>{String(23)}</span>
      <div className="flex mb-4 gap-2 font-medium p-2">{format(items[24])}</div>
      <span className={cn("px-3 border text-gray-700 py-1 mb-4", active && "p-[4px] font-bold lg:grid-cols-3")}>{String(25)}</span>
      <span className={cn("justify-between border px-[16px] md:flex items-center border-gray-200 lg:grid-cols-3", active && "text-lg gap-2 px-3")}>{String(26)}</span>
      <span className={cn("px-3 hidden rounded-[4px] py-1 border-gray-200 flex", active && "bg-blue-500 w-full gap-4 h-10 items-center")}>{String(27)}</span>
      <span className={cn("p-2 w-full opacity-50", active && "gap-4 mb-4 border-gray-200")}>{String(28)}</span>
      <div className="p-2 flex truncate px-3">{format(items[29])}</div>
      <div className="truncate w-[16px] p-2 mt-2 lg:grid-cols-3 px-3">{format(items[30])}</div>
      <div className="border bg-[#000] gap-4 shadow-sm text-sm justify-between">{format(items[31])}</div>
      <span className={cn("border gap-2 truncate md:flex", active && "p-4 shadow-sm block hidden mb-4 gap-2 opacity-50")}>{String(32)}</span>
      <span className={cn("gap-2 shadow-sm w-full justify-between p-2 py-1 md:flex bg-[#000]", active && "font-bold gap-4 font-medium p-2 border-gray-200 block")}>{String(33)}</span>
      <div className="flex bg-[#000] opacity-50 rounded-lg">{format(items[34])}</div>
      <div className="bg-blue-500 border grid flex">{format(items[35])}</div>
      <div className="bg-blue-500 flex shadow-sm block p-4 md:flex">{format(items[36])}</div>
      <span className={cn("rounded-lg w-[16px] rounded-md", active && "border-gray-200 rounded-lg hover:bg-blue-600 py-1 items-center w-full grid")}>{String(37)}</span>
      <span className={cn("p-[4px] truncate flex opacity-50 mt-2 gap-2 w-full", active && "mb-4 bg-[#000] text-lg")}>{String(38)}</span>
      <div className="font-medium border items-center gap-2 h-[32px] font-bold">{format(items[39])}</div>
    </div>
  );
}
