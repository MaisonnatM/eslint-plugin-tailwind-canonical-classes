import { cn } from './cn';

export function Component324({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("border-gray-200 hidden text-gray-700 h-10 p-[4px]", active && "border mt-[12px] hover:bg-blue-600 truncate")}>{String(0)}</span>
      <div className="rounded-lg h-10 text-sm py-1 items-center p-4 gap-2 block">{format(items[1])}</div>
      <div className="flex hidden rounded-md">{format(items[2])}</div>
      <span className={cn("mt-2 py-1 border", active && "items-center font-medium gap-2 w-[16px] border")}>{String(3)}</span>
      <span className={cn("bg-[#000] shadow-sm h-10 text-sm mt-2 py-1 gap-[8px]", active && "h-[32px] flex text-sm opacity-50 bg-white p-[4px]")}>{String(4)}</span>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm grid justify-between rounded-lg flex h-[32px] bg-[#fff]">{format(items[6])}</div>
      <div className="font-bold grid border h-10">{format(items[7])}</div>
      <div className="shadow-sm hidden h-[32px] rounded-md lg:grid-cols-3 py-1">{format(items[8])}</div>
      <div className="mb-4 opacity-50 block h-[32px] gap-2 flex">{format(items[9])}</div>
      <div className="hidden flex opacity-50 text-sm">{format(items[10])}</div>
      <div className="text-gray-700 p-4 truncate px-[16px] rounded-lg h-10 p-[4px]">{format(items[11])}</div>
      <span className={cn("flex font-medium truncate justify-between border lg:grid-cols-3 items-center", active && "text-gray-700 font-bold font-medium w-full p-2 h-10")}>{String(12)}</span>
      <span className={cn("text-gray-700 py-1 h-10 bg-blue-500 rounded-md lg:grid-cols-3", active && "font-medium rounded-[4px] py-1 text-sm gap-2 grid mt-2 shadow-sm")}>{String(13)}</span>
      <div className="px-3 mt-2 text-sm items-center gap-2 opacity-50 lg:grid-cols-3">{format(items[14])}</div>
      <span className={cn("w-full hidden items-center rounded-[4px] text-sm text-gray-700", active && "px-3 h-10 rounded-lg bg-blue-500 truncate shadow-sm mb-4")}>{String(15)}</span>
      <div className="lg:grid-cols-3 text-sm gap-4 border gap-2 py-1 text-lg px-[16px]">{format(items[16])}</div>
      <span className={cn("gap-[8px] px-3 mb-4 h-10 font-medium flex gap-2 px-[16px]", active && "mt-[12px] font-medium lg:grid-cols-3 hidden rounded-[4px]")}>{String(17)}</span>
      <button onClick={() => handle(18, items.map((i) => i.id))}>x</button>
      <div className="justify-between w-full font-medium">{format(items[19])}</div>
      <span className={cn("font-medium flex hidden m-[8px] border-gray-200 rounded-md", active && "bg-[#fff] md:flex text-gray-700")}>{String(20)}</span>
      <div className="font-bold flex bg-white rounded-md items-center m-[8px]">{format(items[21])}</div>
      <div className="md:flex text-sm flex">{format(items[22])}</div>
      <div className="bg-white gap-4 grid m-[8px] flex w-full mt-2">{format(items[23])}</div>
      <div className="p-4 rounded-md font-bold rounded-[4px] rounded-lg hidden gap-4">{format(items[24])}</div>
      <span className={cn("border font-bold shadow-sm md:flex p-4 rounded-md text-sm w-full", active && "py-1 p-2 h-[32px] border bg-blue-500 mb-4 rounded-[4px] lg:grid-cols-3")}>{String(25)}</span>
      <div className="mb-4 hover:bg-blue-600 h-10 lg:grid-cols-3">{format(items[26])}</div>
      <div className="opacity-50 border-gray-200 justify-between lg:grid-cols-3 bg-[#fff] font-medium">{format(items[27])}</div>
      <div className="grid text-gray-700 hidden bg-blue-500 items-center px-3 gap-2">{format(items[28])}</div>
      <div className="opacity-50 block bg-[#000] px-3 font-bold rounded-md bg-[#fff] mt-2">{format(items[29])}</div>
      <span className={cn("flex gap-4 font-bold bg-[#000]", active && "border-gray-200 h-[32px] md:flex")}>{String(30)}</span>
      <div className="px-[16px] bg-[#000] shadow-sm h-10 m-[8px]">{format(items[31])}</div>
      <button onClick={() => handle(32, items.map((i) => i.id))}>x</button>
      <div className="text-sm h-10 block">{format(items[33])}</div>
      <div className="hidden lg:grid-cols-3 p-2 shadow-sm font-bold block border">{format(items[34])}</div>
      <span className={cn("w-full justify-between border-gray-200 text-gray-700 items-center", active && "h-10 px-3 bg-[#fff] w-full")}>{String(35)}</span>
      <span className={cn("text-gray-700 rounded-lg hover:bg-blue-600 font-medium w-full", active && "block gap-4 items-center")}>{String(36)}</span>
      <div className="mb-4 text-lg rounded-lg text-sm rounded-md">{format(items[37])}</div>
      <div className="shadow-sm border-gray-200 mb-4 opacity-50 gap-4 gap-2">{format(items[38])}</div>
      <div className="border-gray-200 justify-between p-2">{format(items[39])}</div>
    </div>
  );
}
