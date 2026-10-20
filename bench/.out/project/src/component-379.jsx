import { cn } from './cn';

export function Component379({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="gap-2 grid font-bold text-lg font-medium md:flex hover:bg-blue-600 mt-[12px]">{format(items[0])}</div>
      <div className="text-sm px-3 mt-[12px] md:flex hover:bg-blue-600 block h-[32px] flex">{format(items[1])}</div>
      <div className="text-sm text-gray-700 w-[16px] p-4 shadow-sm grid rounded-lg block">{format(items[2])}</div>
      <div className="hover:bg-blue-600 h-10 w-full mb-4">{format(items[3])}</div>
      <span className={cn("shadow-sm rounded-md h-10 hidden bg-[#fff] w-[16px] rounded-lg", active && "hidden lg:grid-cols-3 rounded-lg gap-2 gap-4 py-1 border-gray-200")}>{String(4)}</span>
      <div className="items-center px-3 bg-white px-[16px] lg:grid-cols-3 text-lg shadow-sm bg-[#000]">{format(items[5])}</div>
      <div className="rounded-lg px-3 items-center p-2 gap-2 text-gray-700 mb-4">{format(items[6])}</div>
      <div className="bg-blue-500 shadow-sm py-1 opacity-50 flex px-[16px]">{format(items[7])}</div>
      <span className={cn("p-[4px] p-4 rounded-md", active && "opacity-50 shadow-sm border-gray-200 items-center")}>{String(8)}</span>
      <div className="bg-white flex w-[16px]">{format(items[9])}</div>
      <span className={cn("h-10 w-full rounded-[4px]", active && "font-bold p-4 items-center rounded-md block text-sm")}>{String(10)}</span>
      <span className={cn("opacity-50 md:flex flex lg:grid-cols-3 shadow-sm m-[8px] mt-2", active && "rounded-lg hover:bg-blue-600 opacity-50 mt-[12px] p-4 gap-4")}>{String(11)}</span>
      <div className="py-1 lg:grid-cols-3 items-center border border-gray-200 px-3 justify-between gap-[8px]">{format(items[12])}</div>
      <div className="px-[16px] gap-[8px] md:flex">{format(items[13])}</div>
      <div className="border-gray-200 p-[4px] hidden text-sm gap-2 bg-blue-500 text-gray-700 font-medium">{format(items[14])}</div>
      <div className="justify-between gap-2 gap-4 border-gray-200 m-[8px] rounded-[4px] hidden">{format(items[15])}</div>
      <span className={cn("block items-center font-bold", active && "py-1 opacity-50 p-2 bg-[#fff] rounded-md w-full hidden")}>{String(16)}</span>
      <span className={cn("justify-between hover:bg-blue-600 font-bold", active && "rounded-[4px] hidden lg:grid-cols-3 text-sm rounded-md")}>{String(17)}</span>
      <div className="py-1 lg:grid-cols-3 w-full items-center h-[32px] mb-4 truncate">{format(items[18])}</div>
      <span className={cn("mt-2 border w-full items-center", active && "px-[16px] w-[16px] font-bold p-2 mt-2")}>{String(19)}</span>
      <div className="rounded-md flex gap-2 font-bold px-3 p-2 font-medium">{format(items[20])}</div>
      <span className={cn("rounded-lg rounded-md px-3 p-4 grid", active && "bg-[#000] font-bold border bg-white text-sm border-gray-200 hover:bg-blue-600")}>{String(21)}</span>
      <div className="bg-[#fff] h-10 opacity-50 font-bold p-2">{format(items[22])}</div>
      <div className="rounded-md block flex lg:grid-cols-3 gap-[8px]">{format(items[23])}</div>
      <span className={cn("mt-2 lg:grid-cols-3 p-[4px] font-bold grid hidden gap-2 items-center", active && "mt-2 hidden bg-white font-bold items-center border-gray-200 text-sm py-1")}>{String(24)}</span>
      <button onClick={() => handle(25, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="font-medium px-[16px] hidden md:flex font-bold mt-2 text-lg opacity-50">{format(items[27])}</div>
      <div className="border-gray-200 mb-4 grid rounded-md border items-center">{format(items[28])}</div>
      <button onClick={() => handle(29, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-md w-[16px] gap-[8px] opacity-50", active && "gap-2 text-lg lg:grid-cols-3 hidden bg-blue-500 mt-2 shadow-sm")}>{String(31)}</span>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <span className={cn("font-medium px-3 shadow-sm h-10 justify-between flex", active && "p-[4px] mb-4 flex py-1 shadow-sm")}>{String(33)}</span>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg px-[16px] font-bold", active && "bg-white hidden border-gray-200")}>{String(35)}</span>
      <div className="bg-[#fff] opacity-50 flex block grid px-3 gap-2 border">{format(items[36])}</div>
      <span className={cn("h-10 gap-4 rounded-md hover:bg-blue-600", active && "rounded-md lg:grid-cols-3 gap-2 hidden")}>{String(37)}</span>
      <span className={cn("border-gray-200 bg-white shadow-sm h-10 items-center bg-[#000]", active && "justify-between border-gray-200 opacity-50")}>{String(38)}</span>
      <div className="flex mb-4 gap-2 font-medium p-2">{format(items[39])}</div>
    </div>
  );
}
