import { cn } from './cn';

export function Component347({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-md w-[16px] gap-[8px] opacity-50", active && "gap-2 text-lg lg:grid-cols-3 hidden bg-blue-500 mt-2 shadow-sm")}>{String(1)}</span>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <span className={cn("font-medium px-3 shadow-sm h-10 justify-between flex", active && "p-[4px] mb-4 flex py-1 shadow-sm")}>{String(3)}</span>
      <button onClick={() => handle(4, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg px-[16px] font-bold", active && "bg-white hidden border-gray-200")}>{String(5)}</span>
      <div className="bg-[#fff] opacity-50 flex block grid px-3 gap-2 border">{format(items[6])}</div>
      <span className={cn("h-10 gap-4 rounded-md hover:bg-blue-600", active && "rounded-md lg:grid-cols-3 gap-2 hidden")}>{String(7)}</span>
      <span className={cn("border-gray-200 bg-white shadow-sm h-10 items-center bg-[#000]", active && "justify-between border-gray-200 opacity-50")}>{String(8)}</span>
      <div className="flex mb-4 gap-2 font-medium p-2">{format(items[9])}</div>
      <span className={cn("px-3 border text-gray-700 py-1 mb-4", active && "p-[4px] font-bold lg:grid-cols-3")}>{String(10)}</span>
      <span className={cn("justify-between border px-[16px] md:flex items-center border-gray-200 lg:grid-cols-3", active && "text-lg gap-2 px-3")}>{String(11)}</span>
      <span className={cn("px-3 hidden rounded-[4px] py-1 border-gray-200 flex", active && "bg-blue-500 w-full gap-4 h-10 items-center")}>{String(12)}</span>
      <span className={cn("p-2 w-full opacity-50", active && "gap-4 mb-4 border-gray-200")}>{String(13)}</span>
      <div className="p-2 flex truncate px-3">{format(items[14])}</div>
      <div className="truncate w-[16px] p-2 mt-2 lg:grid-cols-3 px-3">{format(items[15])}</div>
      <div className="border bg-[#000] gap-4 shadow-sm text-sm justify-between">{format(items[16])}</div>
      <span className={cn("border gap-2 truncate md:flex", active && "p-4 shadow-sm block hidden mb-4 gap-2 opacity-50")}>{String(17)}</span>
      <span className={cn("gap-2 shadow-sm w-full justify-between p-2 py-1 md:flex bg-[#000]", active && "font-bold gap-4 font-medium p-2 border-gray-200 block")}>{String(18)}</span>
      <div className="flex bg-[#000] opacity-50 rounded-lg">{format(items[19])}</div>
      <div className="bg-blue-500 border grid flex">{format(items[20])}</div>
      <div className="bg-blue-500 flex shadow-sm block p-4 md:flex">{format(items[21])}</div>
      <span className={cn("rounded-lg w-[16px] rounded-md", active && "border-gray-200 rounded-lg hover:bg-blue-600 py-1 items-center w-full grid")}>{String(22)}</span>
      <span className={cn("p-[4px] truncate flex opacity-50 mt-2 gap-2 w-full", active && "mb-4 bg-[#000] text-lg")}>{String(23)}</span>
      <div className="font-medium border items-center gap-2 h-[32px] font-bold">{format(items[24])}</div>
      <div className="gap-[8px] px-[16px] border-gray-200">{format(items[25])}</div>
      <div className="rounded-lg gap-4 px-3 rounded-[4px]">{format(items[26])}</div>
      <button onClick={() => handle(27, items.map((i) => i.id))}>x</button>
      <div className="mb-4 px-3 bg-blue-500 truncate">{format(items[28])}</div>
      <div className="m-[8px] truncate bg-white block items-center bg-blue-500 h-[32px] mt-[12px]">{format(items[29])}</div>
      <div className="grid hidden hover:bg-blue-600">{format(items[30])}</div>
      <div className="hidden hover:bg-blue-600 p-4 shadow-sm rounded-lg">{format(items[31])}</div>
      <div className="p-4 gap-2 truncate md:flex bg-blue-500">{format(items[32])}</div>
      <div className="gap-4 border-gray-200 w-full border rounded-lg">{format(items[33])}</div>
      <div className="gap-4 border-gray-200 mt-2 grid">{format(items[34])}</div>
      <div className="justify-between px-[16px] lg:grid-cols-3 font-bold">{format(items[35])}</div>
      <span className={cn("block text-sm shadow-sm", active && "gap-4 p-2 border-gray-200 text-lg justify-between hidden")}>{String(36)}</span>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <span className={cn("border h-10 mt-[12px] flex bg-blue-500", active && "justify-between py-1 grid block text-sm h-10 lg:grid-cols-3 hidden")}>{String(38)}</span>
      <span className={cn("gap-4 m-[8px] shadow-sm items-center font-bold h-[32px] text-lg", active && "px-[16px] hover:bg-blue-600 px-3 truncate p-4 text-gray-700 h-10 opacity-50")}>{String(39)}</span>
    </div>
  );
}
