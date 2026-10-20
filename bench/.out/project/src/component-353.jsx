import { cn } from './cn';

export function Component353({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="gap-4 hidden rounded-md py-1 bg-white w-full border">{format(items[1])}</div>
      <div className="hidden p-4 font-medium rounded-lg p-[4px] grid justify-between">{format(items[2])}</div>
      <span className={cn("bg-white mt-[12px] w-full m-[8px] text-gray-700 shadow-sm", active && "font-bold p-4 flex md:flex shadow-sm py-1 text-lg")}>{String(3)}</span>
      <div className="md:flex grid gap-4 mb-4">{format(items[4])}</div>
      <span className={cn("border-gray-200 text-lg flex lg:grid-cols-3 bg-white items-center rounded-lg grid", active && "truncate block flex p-4 py-1 hover:bg-blue-600 h-10 lg:grid-cols-3")}>{String(5)}</span>
      <div className="bg-white gap-2 bg-[#fff] flex shadow-sm lg:grid-cols-3 hidden text-sm">{format(items[6])}</div>
      <div className="gap-4 border opacity-50 text-sm shadow-sm px-3 justify-between">{format(items[7])}</div>
      <div className="block p-4 gap-[8px] text-sm gap-2">{format(items[8])}</div>
      <div className="hover:bg-blue-600 p-2 grid font-medium mb-4">{format(items[9])}</div>
      <div className="md:flex font-medium grid hidden gap-4 mt-2">{format(items[10])}</div>
      <div className="rounded-lg justify-between px-3 bg-white gap-4">{format(items[11])}</div>
      <span className={cn("justify-between gap-4 opacity-50 bg-[#fff] px-3", active && "font-bold m-[8px] hover:bg-blue-600 p-2 text-sm")}>{String(12)}</span>
      <span className={cn("px-3 w-[16px] text-lg border-gray-200 mb-4", active && "flex bg-[#000] border-gray-200 text-lg h-[32px]")}>{String(13)}</span>
      <button onClick={() => handle(14, items.map((i) => i.id))}>x</button>
      <div className="items-center text-gray-700 w-full mt-2">{format(items[15])}</div>
      <div className="w-[16px] rounded-lg rounded-md hover:bg-blue-600 bg-blue-500 items-center">{format(items[16])}</div>
      <span className={cn("hover:bg-blue-600 p-4 w-full p-2", active && "mt-2 items-center w-full gap-2 bg-white border grid")}>{String(17)}</span>
      <div className="px-3 py-1 p-2 mt-2 block p-4">{format(items[18])}</div>
      <div className="text-sm items-center px-3 truncate bg-white text-gray-700">{format(items[19])}</div>
      <span className={cn("font-bold text-gray-700 shadow-sm grid", active && "md:flex border px-[16px] opacity-50 bg-white rounded-md")}>{String(20)}</span>
      <div className="rounded-md text-sm hidden lg:grid-cols-3 text-gray-700 rounded-[4px]">{format(items[21])}</div>
      <span className={cn("font-bold px-[16px] gap-4", active && "gap-4 h-10 shadow-sm mb-4 mt-2 p-2 text-gray-700 bg-[#fff]")}>{String(22)}</span>
      <div className="border-gray-200 font-medium gap-2">{format(items[23])}</div>
      <span className={cn("px-[16px] p-4 opacity-50 grid", active && "grid lg:grid-cols-3 mt-[12px] md:flex text-sm border")}>{String(24)}</span>
      <span className={cn("text-sm border bg-blue-500", active && "h-10 text-lg mt-[12px] bg-blue-500 hover:bg-blue-600")}>{String(25)}</span>
      <div className="grid font-medium py-1 truncate flex rounded-lg">{format(items[26])}</div>
      <div className="text-gray-700 hidden opacity-50">{format(items[27])}</div>
      <span className={cn("text-lg gap-2 mb-4 grid rounded-md", active && "lg:grid-cols-3 p-2 border h-10 border-gray-200 font-medium p-[4px]")}>{String(28)}</span>
      <div className="rounded-md py-1 opacity-50 hidden mt-2 p-2">{format(items[29])}</div>
      <div className="block truncate rounded-lg">{format(items[30])}</div>
      <div className="lg:grid-cols-3 items-center text-lg mb-4 text-sm px-3 hidden flex">{format(items[31])}</div>
      <span className={cn("w-[16px] opacity-50 font-medium", active && "mb-4 justify-between text-gray-700 rounded-md hover:bg-blue-600")}>{String(32)}</span>
      <div className="py-1 opacity-50 font-bold">{format(items[33])}</div>
      <div className="block items-center rounded-lg justify-between w-full truncate mb-4">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="gap-4 py-1 h-[32px] w-[16px] hover:bg-blue-600 border-gray-200">{format(items[36])}</div>
      <div className="bg-blue-500 hover:bg-blue-600 bg-white flex text-sm text-lg">{format(items[37])}</div>
      <div className="lg:grid-cols-3 px-3 gap-2 border">{format(items[38])}</div>
      <div className="text-gray-700 text-lg px-[16px]">{format(items[39])}</div>
    </div>
  );
}
