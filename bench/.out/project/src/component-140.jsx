import { cn } from './cn';

export function Component140({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="py-1 justify-between bg-white md:flex">{format(items[0])}</div>
      <div className="gap-2 mb-4 m-[8px] p-4 bg-white">{format(items[1])}</div>
      <span className={cn("hidden px-3 rounded-md", active && "flex w-[16px] mt-[12px] m-[8px]")}>{String(2)}</span>
      <span className={cn("px-3 p-[4px] flex", active && "text-sm py-1 rounded-lg")}>{String(3)}</span>
      <div className="bg-[#fff] p-2 text-gray-700 lg:grid-cols-3 p-[4px]">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="gap-4 hidden rounded-md py-1 bg-white w-full border">{format(items[6])}</div>
      <div className="hidden p-4 font-medium rounded-lg p-[4px] grid justify-between">{format(items[7])}</div>
      <span className={cn("bg-white mt-[12px] w-full m-[8px] text-gray-700 shadow-sm", active && "font-bold p-4 flex md:flex shadow-sm py-1 text-lg")}>{String(8)}</span>
      <div className="md:flex grid gap-4 mb-4">{format(items[9])}</div>
      <span className={cn("border-gray-200 text-lg flex lg:grid-cols-3 bg-white items-center rounded-lg grid", active && "truncate block flex p-4 py-1 hover:bg-blue-600 h-10 lg:grid-cols-3")}>{String(10)}</span>
      <div className="bg-white gap-2 bg-[#fff] flex shadow-sm lg:grid-cols-3 hidden text-sm">{format(items[11])}</div>
      <div className="gap-4 border opacity-50 text-sm shadow-sm px-3 justify-between">{format(items[12])}</div>
      <div className="block p-4 gap-[8px] text-sm gap-2">{format(items[13])}</div>
      <div className="hover:bg-blue-600 p-2 grid font-medium mb-4">{format(items[14])}</div>
      <div className="md:flex font-medium grid hidden gap-4 mt-2">{format(items[15])}</div>
      <div className="rounded-lg justify-between px-3 bg-white gap-4">{format(items[16])}</div>
      <span className={cn("justify-between gap-4 opacity-50 bg-[#fff] px-3", active && "font-bold m-[8px] hover:bg-blue-600 p-2 text-sm")}>{String(17)}</span>
      <span className={cn("px-3 w-[16px] text-lg border-gray-200 mb-4", active && "flex bg-[#000] border-gray-200 text-lg h-[32px]")}>{String(18)}</span>
      <button onClick={() => handle(19, items.map((i) => i.id))}>x</button>
      <div className="items-center text-gray-700 w-full mt-2">{format(items[20])}</div>
      <div className="w-[16px] rounded-lg rounded-md hover:bg-blue-600 bg-blue-500 items-center">{format(items[21])}</div>
      <span className={cn("hover:bg-blue-600 p-4 w-full p-2", active && "mt-2 items-center w-full gap-2 bg-white border grid")}>{String(22)}</span>
      <div className="px-3 py-1 p-2 mt-2 block p-4">{format(items[23])}</div>
      <div className="text-sm items-center px-3 truncate bg-white text-gray-700">{format(items[24])}</div>
      <span className={cn("font-bold text-gray-700 shadow-sm grid", active && "md:flex border px-[16px] opacity-50 bg-white rounded-md")}>{String(25)}</span>
      <div className="rounded-md text-sm hidden lg:grid-cols-3 text-gray-700 rounded-[4px]">{format(items[26])}</div>
      <span className={cn("font-bold px-[16px] gap-4", active && "gap-4 h-10 shadow-sm mb-4 mt-2 p-2 text-gray-700 bg-[#fff]")}>{String(27)}</span>
      <div className="border-gray-200 font-medium gap-2">{format(items[28])}</div>
      <span className={cn("px-[16px] p-4 opacity-50 grid", active && "grid lg:grid-cols-3 mt-[12px] md:flex text-sm border")}>{String(29)}</span>
      <span className={cn("text-sm border bg-blue-500", active && "h-10 text-lg mt-[12px] bg-blue-500 hover:bg-blue-600")}>{String(30)}</span>
      <div className="grid font-medium py-1 truncate flex rounded-lg">{format(items[31])}</div>
      <div className="text-gray-700 hidden opacity-50">{format(items[32])}</div>
      <span className={cn("text-lg gap-2 mb-4 grid rounded-md", active && "lg:grid-cols-3 p-2 border h-10 border-gray-200 font-medium p-[4px]")}>{String(33)}</span>
      <div className="rounded-md py-1 opacity-50 hidden mt-2 p-2">{format(items[34])}</div>
      <div className="block truncate rounded-lg">{format(items[35])}</div>
      <div className="lg:grid-cols-3 items-center text-lg mb-4 text-sm px-3 hidden flex">{format(items[36])}</div>
      <span className={cn("w-[16px] opacity-50 font-medium", active && "mb-4 justify-between text-gray-700 rounded-md hover:bg-blue-600")}>{String(37)}</span>
      <div className="py-1 opacity-50 font-bold">{format(items[38])}</div>
      <div className="block items-center rounded-lg justify-between w-full truncate mb-4">{format(items[39])}</div>
    </div>
  );
}
