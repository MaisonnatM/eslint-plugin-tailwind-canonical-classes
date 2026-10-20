import { cn } from './cn';

export function Component356({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("h-10 items-center md:flex px-3 hidden text-gray-700", active && "py-1 w-full rounded-md p-[4px] rounded-[4px]")}>{String(0)}</span>
      <span className={cn("font-medium lg:grid-cols-3 py-1", active && "hover:bg-blue-600 px-3 mt-2 font-bold border-gray-200 p-4")}>{String(1)}</span>
      <span className={cn("hover:bg-blue-600 items-center justify-between border py-1 gap-2 mb-4 block", active && "md:flex mt-2 block mb-4 px-3")}>{String(2)}</span>
      <span className={cn("gap-4 rounded-md text-gray-700 p-4 text-sm", active && "border bg-white justify-between truncate")}>{String(3)}</span>
      <div className="gap-4 text-lg py-1 md:flex bg-white">{format(items[4])}</div>
      <span className={cn("flex w-full p-4 shadow-sm h-10 mt-2 items-center mb-4", active && "rounded-lg m-[8px] bg-[#fff] truncate justify-between")}>{String(5)}</span>
      <div className="rounded-md rounded-lg bg-white font-bold bg-blue-500">{format(items[6])}</div>
      <button onClick={() => handle(7, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-[4px] gap-[8px] border-gray-200 mt-2", active && "font-bold mt-2 flex hidden")}>{String(8)}</span>
      <div className="flex gap-[8px] rounded-md text-lg bg-white">{format(items[9])}</div>
      <div className="font-bold truncate md:flex mt-[12px] h-10 flex hover:bg-blue-600">{format(items[10])}</div>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg hover:bg-blue-600 bg-[#fff] lg:grid-cols-3 h-10 items-center rounded-[4px] rounded-md">{format(items[12])}</div>
      <div className="border gap-[8px] flex grid">{format(items[13])}</div>
      <div className="hover:bg-blue-600 rounded-lg md:flex text-gray-700 p-4 h-10 justify-between">{format(items[14])}</div>
      <div className="block font-bold p-2 opacity-50 w-full p-[4px] p-4 border-gray-200">{format(items[15])}</div>
      <div className="py-1 md:flex justify-between gap-2 flex truncate px-3 gap-[8px]">{format(items[16])}</div>
      <div className="grid bg-blue-500 font-bold gap-2 hidden">{format(items[17])}</div>
      <div className="mt-2 px-3 bg-blue-500 truncate border font-bold py-1">{format(items[18])}</div>
      <div className="block text-lg flex justify-between font-bold grid bg-white font-medium">{format(items[19])}</div>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="px-3 flex lg:grid-cols-3 px-[16px] py-1">{format(items[21])}</div>
      <div className="py-1 hover:bg-blue-600 font-bold gap-2 p-4 text-sm">{format(items[22])}</div>
      <div className="rounded-lg bg-blue-500 block border font-medium px-[16px] bg-[#fff]">{format(items[23])}</div>
      <button onClick={() => handle(24, items.map((i) => i.id))}>x</button>
      <div className="block hidden truncate m-[8px] font-bold md:flex">{format(items[25])}</div>
      <div className="text-lg bg-white p-[4px] lg:grid-cols-3 h-[32px]">{format(items[26])}</div>
      <span className={cn("px-[16px] gap-4 w-full px-3 p-2 gap-[8px]", active && "font-bold p-4 gap-2 rounded-[4px] bg-blue-500 flex gap-4 py-1")}>{String(27)}</span>
      <div className="border-gray-200 font-bold items-center truncate lg:grid-cols-3">{format(items[28])}</div>
      <span className={cn("rounded-lg font-bold shadow-sm border", active && "text-sm justify-between opacity-50 border-gray-200 text-gray-700 flex")}>{String(29)}</span>
      <span className={cn("border-gray-200 hidden text-gray-700 h-10 p-[4px]", active && "border mt-[12px] hover:bg-blue-600 truncate")}>{String(30)}</span>
      <div className="rounded-lg h-10 text-sm py-1 items-center p-4 gap-2 block">{format(items[31])}</div>
      <div className="flex hidden rounded-md">{format(items[32])}</div>
      <span className={cn("mt-2 py-1 border", active && "items-center font-medium gap-2 w-[16px] border")}>{String(33)}</span>
      <span className={cn("bg-[#000] shadow-sm h-10 text-sm mt-2 py-1 gap-[8px]", active && "h-[32px] flex text-sm opacity-50 bg-white p-[4px]")}>{String(34)}</span>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm grid justify-between rounded-lg flex h-[32px] bg-[#fff]">{format(items[36])}</div>
      <div className="font-bold grid border h-10">{format(items[37])}</div>
      <div className="shadow-sm hidden h-[32px] rounded-md lg:grid-cols-3 py-1">{format(items[38])}</div>
      <div className="mb-4 opacity-50 block h-[32px] gap-2 flex">{format(items[39])}</div>
    </div>
  );
}
