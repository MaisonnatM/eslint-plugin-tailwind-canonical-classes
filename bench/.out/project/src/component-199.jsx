import { cn } from './cn';

export function Component199({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="items-center px-3 bg-white px-[16px] lg:grid-cols-3 text-lg shadow-sm bg-[#000]">{format(items[0])}</div>
      <div className="rounded-lg px-3 items-center p-2 gap-2 text-gray-700 mb-4">{format(items[1])}</div>
      <div className="bg-blue-500 shadow-sm py-1 opacity-50 flex px-[16px]">{format(items[2])}</div>
      <span className={cn("p-[4px] p-4 rounded-md", active && "opacity-50 shadow-sm border-gray-200 items-center")}>{String(3)}</span>
      <div className="bg-white flex w-[16px]">{format(items[4])}</div>
      <span className={cn("h-10 w-full rounded-[4px]", active && "font-bold p-4 items-center rounded-md block text-sm")}>{String(5)}</span>
      <span className={cn("opacity-50 md:flex flex lg:grid-cols-3 shadow-sm m-[8px] mt-2", active && "rounded-lg hover:bg-blue-600 opacity-50 mt-[12px] p-4 gap-4")}>{String(6)}</span>
      <div className="py-1 lg:grid-cols-3 items-center border border-gray-200 px-3 justify-between gap-[8px]">{format(items[7])}</div>
      <div className="px-[16px] gap-[8px] md:flex">{format(items[8])}</div>
      <div className="border-gray-200 p-[4px] hidden text-sm gap-2 bg-blue-500 text-gray-700 font-medium">{format(items[9])}</div>
      <div className="justify-between gap-2 gap-4 border-gray-200 m-[8px] rounded-[4px] hidden">{format(items[10])}</div>
      <span className={cn("block items-center font-bold", active && "py-1 opacity-50 p-2 bg-[#fff] rounded-md w-full hidden")}>{String(11)}</span>
      <span className={cn("justify-between hover:bg-blue-600 font-bold", active && "rounded-[4px] hidden lg:grid-cols-3 text-sm rounded-md")}>{String(12)}</span>
      <div className="py-1 lg:grid-cols-3 w-full items-center h-[32px] mb-4 truncate">{format(items[13])}</div>
      <span className={cn("mt-2 border w-full items-center", active && "px-[16px] w-[16px] font-bold p-2 mt-2")}>{String(14)}</span>
      <div className="rounded-md flex gap-2 font-bold px-3 p-2 font-medium">{format(items[15])}</div>
      <span className={cn("rounded-lg rounded-md px-3 p-4 grid", active && "bg-[#000] font-bold border bg-white text-sm border-gray-200 hover:bg-blue-600")}>{String(16)}</span>
      <div className="bg-[#fff] h-10 opacity-50 font-bold p-2">{format(items[17])}</div>
      <div className="rounded-md block flex lg:grid-cols-3 gap-[8px]">{format(items[18])}</div>
      <span className={cn("mt-2 lg:grid-cols-3 p-[4px] font-bold grid hidden gap-2 items-center", active && "mt-2 hidden bg-white font-bold items-center border-gray-200 text-sm py-1")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="font-medium px-[16px] hidden md:flex font-bold mt-2 text-lg opacity-50">{format(items[22])}</div>
      <div className="border-gray-200 mb-4 grid rounded-md border items-center">{format(items[23])}</div>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-md w-[16px] gap-[8px] opacity-50", active && "gap-2 text-lg lg:grid-cols-3 hidden bg-blue-500 mt-2 shadow-sm")}>{String(26)}</span>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <span className={cn("font-medium px-3 shadow-sm h-10 justify-between flex", active && "p-[4px] mb-4 flex py-1 shadow-sm")}>{String(28)}</span>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg px-[16px] font-bold", active && "bg-white hidden border-gray-200")}>{String(30)}</span>
      <div className="bg-[#fff] opacity-50 flex block grid px-3 gap-2 border">{format(items[31])}</div>
      <span className={cn("h-10 gap-4 rounded-md hover:bg-blue-600", active && "rounded-md lg:grid-cols-3 gap-2 hidden")}>{String(32)}</span>
      <span className={cn("border-gray-200 bg-white shadow-sm h-10 items-center bg-[#000]", active && "justify-between border-gray-200 opacity-50")}>{String(33)}</span>
      <div className="flex mb-4 gap-2 font-medium p-2">{format(items[34])}</div>
      <span className={cn("px-3 border text-gray-700 py-1 mb-4", active && "p-[4px] font-bold lg:grid-cols-3")}>{String(35)}</span>
      <span className={cn("justify-between border px-[16px] md:flex items-center border-gray-200 lg:grid-cols-3", active && "text-lg gap-2 px-3")}>{String(36)}</span>
      <span className={cn("px-3 hidden rounded-[4px] py-1 border-gray-200 flex", active && "bg-blue-500 w-full gap-4 h-10 items-center")}>{String(37)}</span>
      <span className={cn("p-2 w-full opacity-50", active && "gap-4 mb-4 border-gray-200")}>{String(38)}</span>
      <div className="p-2 flex truncate px-3">{format(items[39])}</div>
    </div>
  );
}
