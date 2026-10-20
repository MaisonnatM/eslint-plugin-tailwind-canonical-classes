import { cn } from './cn';

export function Component200({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="truncate w-[16px] p-2 mt-2 lg:grid-cols-3 px-3">{format(items[0])}</div>
      <div className="border bg-[#000] gap-4 shadow-sm text-sm justify-between">{format(items[1])}</div>
      <span className={cn("border gap-2 truncate md:flex", active && "p-4 shadow-sm block hidden mb-4 gap-2 opacity-50")}>{String(2)}</span>
      <span className={cn("gap-2 shadow-sm w-full justify-between p-2 py-1 md:flex bg-[#000]", active && "font-bold gap-4 font-medium p-2 border-gray-200 block")}>{String(3)}</span>
      <div className="flex bg-[#000] opacity-50 rounded-lg">{format(items[4])}</div>
      <div className="bg-blue-500 border grid flex">{format(items[5])}</div>
      <div className="bg-blue-500 flex shadow-sm block p-4 md:flex">{format(items[6])}</div>
      <span className={cn("rounded-lg w-[16px] rounded-md", active && "border-gray-200 rounded-lg hover:bg-blue-600 py-1 items-center w-full grid")}>{String(7)}</span>
      <span className={cn("p-[4px] truncate flex opacity-50 mt-2 gap-2 w-full", active && "mb-4 bg-[#000] text-lg")}>{String(8)}</span>
      <div className="font-medium border items-center gap-2 h-[32px] font-bold">{format(items[9])}</div>
      <div className="gap-[8px] px-[16px] border-gray-200">{format(items[10])}</div>
      <div className="rounded-lg gap-4 px-3 rounded-[4px]">{format(items[11])}</div>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <div className="mb-4 px-3 bg-blue-500 truncate">{format(items[13])}</div>
      <div className="m-[8px] truncate bg-white block items-center bg-blue-500 h-[32px] mt-[12px]">{format(items[14])}</div>
      <div className="grid hidden hover:bg-blue-600">{format(items[15])}</div>
      <div className="hidden hover:bg-blue-600 p-4 shadow-sm rounded-lg">{format(items[16])}</div>
      <div className="p-4 gap-2 truncate md:flex bg-blue-500">{format(items[17])}</div>
      <div className="gap-4 border-gray-200 w-full border rounded-lg">{format(items[18])}</div>
      <div className="gap-4 border-gray-200 mt-2 grid">{format(items[19])}</div>
      <div className="justify-between px-[16px] lg:grid-cols-3 font-bold">{format(items[20])}</div>
      <span className={cn("block text-sm shadow-sm", active && "gap-4 p-2 border-gray-200 text-lg justify-between hidden")}>{String(21)}</span>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("border h-10 mt-[12px] flex bg-blue-500", active && "justify-between py-1 grid block text-sm h-10 lg:grid-cols-3 hidden")}>{String(23)}</span>
      <span className={cn("gap-4 m-[8px] shadow-sm items-center font-bold h-[32px] text-lg", active && "px-[16px] hover:bg-blue-600 px-3 truncate p-4 text-gray-700 h-10 opacity-50")}>{String(24)}</span>
      <span className={cn("rounded-lg mt-2 lg:grid-cols-3 grid md:flex bg-white bg-[#fff] truncate", active && "bg-[#fff] opacity-50 p-4 px-3")}>{String(25)}</span>
      <button onClick={() => handle(26, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 lg:grid-cols-3 shadow-sm">{format(items[27])}</div>
      <div className="justify-between hover:bg-blue-600 bg-[#fff] rounded-md gap-4 m-[8px] rounded-lg bg-[#000]">{format(items[28])}</div>
      <span className={cn("border-gray-200 border hover:bg-blue-600 mb-4 w-full", active && "mb-4 hidden text-lg")}>{String(29)}</span>
      <span className={cn("hover:bg-blue-600 hidden border-gray-200", active && "p-4 truncate px-[16px] hidden items-center font-bold md:flex")}>{String(30)}</span>
      <span className={cn("gap-2 text-gray-700 text-sm mb-4 rounded-md gap-4", active && "opacity-50 justify-between truncate hover:bg-blue-600 shadow-sm rounded-md border flex")}>{String(31)}</span>
      <div className="hidden gap-2 bg-white justify-between items-center md:flex">{format(items[32])}</div>
      <div className="px-3 bg-blue-500 hidden py-1 text-gray-700 font-medium shadow-sm">{format(items[33])}</div>
      <div className="p-2 mt-[12px] bg-[#000] grid text-gray-700 block w-full py-1">{format(items[34])}</div>
      <div className="justify-between px-3 h-10">{format(items[35])}</div>
      <div className="w-full p-[4px] grid lg:grid-cols-3 md:flex px-3 bg-white">{format(items[36])}</div>
      <div className="h-10 block text-lg flex md:flex">{format(items[37])}</div>
      <div className="text-sm py-1 grid p-4 hidden">{format(items[38])}</div>
      <span className={cn("px-3 bg-[#fff] rounded-lg bg-[#000] block", active && "h-10 px-3 p-4 truncate mb-4 rounded-md")}>{String(39)}</span>
    </div>
  );
}
