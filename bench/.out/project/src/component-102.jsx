import { cn } from './cn';

export function Component102({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="gap-[8px] px-[16px] border-gray-200">{format(items[0])}</div>
      <div className="rounded-lg gap-4 px-3 rounded-[4px]">{format(items[1])}</div>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <div className="mb-4 px-3 bg-blue-500 truncate">{format(items[3])}</div>
      <div className="m-[8px] truncate bg-white block items-center bg-blue-500 h-[32px] mt-[12px]">{format(items[4])}</div>
      <div className="grid hidden hover:bg-blue-600">{format(items[5])}</div>
      <div className="hidden hover:bg-blue-600 p-4 shadow-sm rounded-lg">{format(items[6])}</div>
      <div className="p-4 gap-2 truncate md:flex bg-blue-500">{format(items[7])}</div>
      <div className="gap-4 border-gray-200 w-full border rounded-lg">{format(items[8])}</div>
      <div className="gap-4 border-gray-200 mt-2 grid">{format(items[9])}</div>
      <div className="justify-between px-[16px] lg:grid-cols-3 font-bold">{format(items[10])}</div>
      <span className={cn("block text-sm shadow-sm", active && "gap-4 p-2 border-gray-200 text-lg justify-between hidden")}>{String(11)}</span>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <span className={cn("border h-10 mt-[12px] flex bg-blue-500", active && "justify-between py-1 grid block text-sm h-10 lg:grid-cols-3 hidden")}>{String(13)}</span>
      <span className={cn("gap-4 m-[8px] shadow-sm items-center font-bold h-[32px] text-lg", active && "px-[16px] hover:bg-blue-600 px-3 truncate p-4 text-gray-700 h-10 opacity-50")}>{String(14)}</span>
      <span className={cn("rounded-lg mt-2 lg:grid-cols-3 grid md:flex bg-white bg-[#fff] truncate", active && "bg-[#fff] opacity-50 p-4 px-3")}>{String(15)}</span>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <div className="opacity-50 lg:grid-cols-3 shadow-sm">{format(items[17])}</div>
      <div className="justify-between hover:bg-blue-600 bg-[#fff] rounded-md gap-4 m-[8px] rounded-lg bg-[#000]">{format(items[18])}</div>
      <span className={cn("border-gray-200 border hover:bg-blue-600 mb-4 w-full", active && "mb-4 hidden text-lg")}>{String(19)}</span>
      <span className={cn("hover:bg-blue-600 hidden border-gray-200", active && "p-4 truncate px-[16px] hidden items-center font-bold md:flex")}>{String(20)}</span>
      <span className={cn("gap-2 text-gray-700 text-sm mb-4 rounded-md gap-4", active && "opacity-50 justify-between truncate hover:bg-blue-600 shadow-sm rounded-md border flex")}>{String(21)}</span>
      <div className="hidden gap-2 bg-white justify-between items-center md:flex">{format(items[22])}</div>
      <div className="px-3 bg-blue-500 hidden py-1 text-gray-700 font-medium shadow-sm">{format(items[23])}</div>
      <div className="p-2 mt-[12px] bg-[#000] grid text-gray-700 block w-full py-1">{format(items[24])}</div>
      <div className="justify-between px-3 h-10">{format(items[25])}</div>
      <div className="w-full p-[4px] grid lg:grid-cols-3 md:flex px-3 bg-white">{format(items[26])}</div>
      <div className="h-10 block text-lg flex md:flex">{format(items[27])}</div>
      <div className="text-sm py-1 grid p-4 hidden">{format(items[28])}</div>
      <span className={cn("px-3 bg-[#fff] rounded-lg bg-[#000] block", active && "h-10 px-3 p-4 truncate mb-4 rounded-md")}>{String(29)}</span>
      <span className={cn("justify-between gap-4 mt-2 hover:bg-blue-600 rounded-md hidden w-[16px]", active && "lg:grid-cols-3 rounded-md text-gray-700 border py-1 opacity-50")}>{String(30)}</span>
      <button onClick={() => handle(31, items.map((i) => i.id))}>x</button>
      <div className="rounded-[4px] justify-between px-3 mt-[12px] text-gray-700 m-[8px] mb-4">{format(items[32])}</div>
      <div className="gap-2 truncate shadow-sm">{format(items[33])}</div>
      <span className={cn("p-4 text-sm border-gray-200 h-10 justify-between lg:grid-cols-3 mb-4", active && "h-[32px] p-4 text-lg grid w-[16px] rounded-md")}>{String(34)}</span>
      <div className="gap-2 mt-2 block hidden h-[32px] gap-4 font-medium text-sm">{format(items[35])}</div>
      <button onClick={() => handle(36, items.map((i) => i.id))}>x</button>
      <div className="px-3 gap-[8px] text-gray-700">{format(items[37])}</div>
      <span className={cn("rounded-[4px] bg-blue-500 py-1", active && "bg-white m-[8px] w-full lg:grid-cols-3 border")}>{String(38)}</span>
      <span className={cn("border w-[16px] bg-[#000]", active && "md:flex truncate hover:bg-blue-600 border-gray-200")}>{String(39)}</span>
    </div>
  );
}
