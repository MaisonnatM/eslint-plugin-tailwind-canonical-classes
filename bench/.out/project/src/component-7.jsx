import { cn } from './cn';

export function Component7({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="bg-white truncate grid hidden">{format(items[0])}</div>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="grid gap-4 rounded-md bg-blue-500 bg-white block md:flex truncate">{format(items[2])}</div>
      <span className={cn("bg-blue-500 text-sm py-1 border-gray-200 gap-4", active && "w-full py-1 flex")}>{String(3)}</span>
      <span className={cn("opacity-50 grid bg-blue-500 truncate gap-4 gap-2 flex w-[16px]", active && "mt-2 hidden rounded-md justify-between flex py-1 text-gray-700")}>{String(4)}</span>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="grid font-medium p-2 opacity-50 truncate text-lg">{format(items[6])}</div>
      <span className={cn("p-4 rounded-lg hover:bg-blue-600", active && "md:flex justify-between w-[16px] gap-2 p-[4px]")}>{String(7)}</span>
      <span className={cn("p-4 opacity-50 h-10", active && "mb-4 text-sm h-10 justify-between shadow-sm")}>{String(8)}</span>
      <div className="lg:grid-cols-3 border h-10 opacity-50 bg-[#fff]">{format(items[9])}</div>
      <span className={cn("text-lg lg:grid-cols-3 mt-[12px] font-bold", active && "w-full border-gray-200 px-3 w-[16px]")}>{String(10)}</span>
      <button onClick={() => handle(11, items.map((i) => i.id))}>x</button>
      <span className={cn("bg-white py-1 truncate border hidden p-2 justify-between bg-blue-500", active && "gap-2 text-gray-700 mt-[12px] py-1 hover:bg-blue-600 text-sm rounded-lg block")}>{String(12)}</span>
      <span className={cn("border-gray-200 p-[4px] justify-between", active && "truncate border-gray-200 text-sm")}>{String(13)}</span>
      <div className="text-sm text-gray-700 px-3">{format(items[14])}</div>
      <div className="p-4 h-[32px] rounded-md text-lg m-[8px]">{format(items[15])}</div>
      <div className="block mb-4 mt-[12px] grid text-lg flex">{format(items[16])}</div>
      <span className={cn("px-3 grid opacity-50 m-[8px]", active && "shadow-sm p-2 justify-between py-1 truncate p-4 gap-2 bg-[#000]")}>{String(17)}</span>
      <div className="h-10 h-[32px] items-center p-2">{format(items[18])}</div>
      <div className="mb-4 truncate gap-2 bg-blue-500 rounded-[4px] gap-4">{format(items[19])}</div>
      <div className="text-sm m-[8px] items-center">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <span className={cn("hidden justify-between grid flex bg-white m-[8px]", active && "hidden mb-4 font-medium grid w-full truncate bg-[#000] mt-2")}>{String(22)}</span>
      <span className={cn("bg-blue-500 lg:grid-cols-3 p-2 font-bold h-[32px] opacity-50 hover:bg-blue-600", active && "shadow-sm border-gray-200 px-3 opacity-50 justify-between lg:grid-cols-3")}>{String(23)}</span>
      <div className="font-bold px-3 truncate md:flex grid">{format(items[24])}</div>
      <span className={cn("font-bold flex gap-2 font-medium hidden mt-2", active && "h-10 gap-4 text-lg")}>{String(25)}</span>
      <span className={cn("h-10 rounded-md m-[8px] text-lg block", active && "md:flex px-3 flex gap-2")}>{String(26)}</span>
      <div className="py-1 h-[32px] rounded-md">{format(items[27])}</div>
      <div className="bg-[#fff] w-full p-[4px] gap-4 bg-blue-500 rounded-lg p-2">{format(items[28])}</div>
      <div className="w-full shadow-sm md:flex">{format(items[29])}</div>
      <div className="justify-between lg:grid-cols-3 m-[8px] h-10 md:flex">{format(items[30])}</div>
      <span className={cn("rounded-md py-1 gap-2 md:flex hover:bg-blue-600", active && "md:flex mt-2 w-full rounded-lg hover:bg-blue-600 lg:grid-cols-3 font-medium")}>{String(31)}</span>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="w-[16px] hidden p-4 truncate">{format(items[34])}</div>
      <span className={cn("text-gray-700 text-sm mt-2 grid hover:bg-blue-600 font-medium bg-white border", active && "bg-white hidden p-[4px] gap-4 border rounded-lg md:flex text-lg")}>{String(35)}</span>
      <div className="truncate p-4 lg:grid-cols-3">{format(items[36])}</div>
      <span className={cn("text-gray-700 hover:bg-blue-600 mb-4 py-1 truncate gap-2 px-3 bg-[#000]", active && "rounded-lg p-4 opacity-50 border-gray-200 w-full mt-2")}>{String(37)}</span>
      <div className="border gap-4 gap-2">{format(items[38])}</div>
      <div className="shadow-sm lg:grid-cols-3 mb-4 p-[4px] py-1 gap-2 opacity-50">{format(items[39])}</div>
    </div>
  );
}
