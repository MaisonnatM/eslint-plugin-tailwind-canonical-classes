import { cn } from './cn';

export function Component84({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("mt-[12px] flex grid font-medium truncate gap-4", active && "items-center flex lg:grid-cols-3 mt-2")}>{String(0)}</span>
      <div className="px-[16px] mt-2 rounded-lg block border-gray-200 px-3 font-bold">{format(items[1])}</div>
      <span className={cn("w-[16px] grid text-sm", active && "px-3 w-[16px] text-gray-700 gap-4 px-[16px] h-10 p-4")}>{String(2)}</span>
      <button onClick={() => handle(3, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(4, items.map((i) => i.id))}>x</button>
      <span className={cn("h-10 font-medium hover:bg-blue-600 justify-between mb-4 text-lg", active && "p-4 mt-2 bg-white rounded-md p-[4px] grid w-full")}>{String(5)}</span>
      <span className={cn("p-4 border-gray-200 h-10 gap-2 block px-3 rounded-lg mt-[12px]", active && "font-bold truncate font-medium bg-blue-500 bg-[#000] gap-2 rounded-lg")}>{String(6)}</span>
      <div className="mb-4 border-gray-200 items-center font-bold rounded-md">{format(items[7])}</div>
      <div className="p-2 rounded-md hover:bg-blue-600 border text-sm gap-[8px] gap-2 px-3">{format(items[8])}</div>
      <div className="text-sm text-lg opacity-50 border text-gray-700 gap-4 hover:bg-blue-600">{format(items[9])}</div>
      <div className="gap-2 grid font-bold text-lg font-medium md:flex hover:bg-blue-600 mt-[12px]">{format(items[10])}</div>
      <div className="text-sm px-3 mt-[12px] md:flex hover:bg-blue-600 block h-[32px] flex">{format(items[11])}</div>
      <div className="text-sm text-gray-700 w-[16px] p-4 shadow-sm grid rounded-lg block">{format(items[12])}</div>
      <div className="hover:bg-blue-600 h-10 w-full mb-4">{format(items[13])}</div>
      <span className={cn("shadow-sm rounded-md h-10 hidden bg-[#fff] w-[16px] rounded-lg", active && "hidden lg:grid-cols-3 rounded-lg gap-2 gap-4 py-1 border-gray-200")}>{String(14)}</span>
      <div className="items-center px-3 bg-white px-[16px] lg:grid-cols-3 text-lg shadow-sm bg-[#000]">{format(items[15])}</div>
      <div className="rounded-lg px-3 items-center p-2 gap-2 text-gray-700 mb-4">{format(items[16])}</div>
      <div className="bg-blue-500 shadow-sm py-1 opacity-50 flex px-[16px]">{format(items[17])}</div>
      <span className={cn("p-[4px] p-4 rounded-md", active && "opacity-50 shadow-sm border-gray-200 items-center")}>{String(18)}</span>
      <div className="bg-white flex w-[16px]">{format(items[19])}</div>
      <span className={cn("h-10 w-full rounded-[4px]", active && "font-bold p-4 items-center rounded-md block text-sm")}>{String(20)}</span>
      <span className={cn("opacity-50 md:flex flex lg:grid-cols-3 shadow-sm m-[8px] mt-2", active && "rounded-lg hover:bg-blue-600 opacity-50 mt-[12px] p-4 gap-4")}>{String(21)}</span>
      <div className="py-1 lg:grid-cols-3 items-center border border-gray-200 px-3 justify-between gap-[8px]">{format(items[22])}</div>
      <div className="px-[16px] gap-[8px] md:flex">{format(items[23])}</div>
      <div className="border-gray-200 p-[4px] hidden text-sm gap-2 bg-blue-500 text-gray-700 font-medium">{format(items[24])}</div>
      <div className="justify-between gap-2 gap-4 border-gray-200 m-[8px] rounded-[4px] hidden">{format(items[25])}</div>
      <span className={cn("block items-center font-bold", active && "py-1 opacity-50 p-2 bg-[#fff] rounded-md w-full hidden")}>{String(26)}</span>
      <span className={cn("justify-between hover:bg-blue-600 font-bold", active && "rounded-[4px] hidden lg:grid-cols-3 text-sm rounded-md")}>{String(27)}</span>
      <div className="py-1 lg:grid-cols-3 w-full items-center h-[32px] mb-4 truncate">{format(items[28])}</div>
      <span className={cn("mt-2 border w-full items-center", active && "px-[16px] w-[16px] font-bold p-2 mt-2")}>{String(29)}</span>
      <div className="rounded-md flex gap-2 font-bold px-3 p-2 font-medium">{format(items[30])}</div>
      <span className={cn("rounded-lg rounded-md px-3 p-4 grid", active && "bg-[#000] font-bold border bg-white text-sm border-gray-200 hover:bg-blue-600")}>{String(31)}</span>
      <div className="bg-[#fff] h-10 opacity-50 font-bold p-2">{format(items[32])}</div>
      <div className="rounded-md block flex lg:grid-cols-3 gap-[8px]">{format(items[33])}</div>
      <span className={cn("mt-2 lg:grid-cols-3 p-[4px] font-bold grid hidden gap-2 items-center", active && "mt-2 hidden bg-white font-bold items-center border-gray-200 text-sm py-1")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <div className="font-medium px-[16px] hidden md:flex font-bold mt-2 text-lg opacity-50">{format(items[37])}</div>
      <div className="border-gray-200 mb-4 grid rounded-md border items-center">{format(items[38])}</div>
      <button onClick={() => handle(39, items.map((i) => i.id))}>x</button>
    </div>
  );
}
