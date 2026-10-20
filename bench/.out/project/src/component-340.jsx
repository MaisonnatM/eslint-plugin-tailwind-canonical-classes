import { cn } from './cn';

export function Component340({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="block font-bold p-2 opacity-50 w-full p-[4px] p-4 border-gray-200">{format(items[0])}</div>
      <div className="py-1 md:flex justify-between gap-2 flex truncate px-3 gap-[8px]">{format(items[1])}</div>
      <div className="grid bg-blue-500 font-bold gap-2 hidden">{format(items[2])}</div>
      <div className="mt-2 px-3 bg-blue-500 truncate border font-bold py-1">{format(items[3])}</div>
      <div className="block text-lg flex justify-between font-bold grid bg-white font-medium">{format(items[4])}</div>
      <button onClick={() => handle(5, items.map((i) => i.id))}>x</button>
      <div className="px-3 flex lg:grid-cols-3 px-[16px] py-1">{format(items[6])}</div>
      <div className="py-1 hover:bg-blue-600 font-bold gap-2 p-4 text-sm">{format(items[7])}</div>
      <div className="rounded-lg bg-blue-500 block border font-medium px-[16px] bg-[#fff]">{format(items[8])}</div>
      <button onClick={() => handle(9, items.map((i) => i.id))}>x</button>
      <div className="block hidden truncate m-[8px] font-bold md:flex">{format(items[10])}</div>
      <div className="text-lg bg-white p-[4px] lg:grid-cols-3 h-[32px]">{format(items[11])}</div>
      <span className={cn("px-[16px] gap-4 w-full px-3 p-2 gap-[8px]", active && "font-bold p-4 gap-2 rounded-[4px] bg-blue-500 flex gap-4 py-1")}>{String(12)}</span>
      <div className="border-gray-200 font-bold items-center truncate lg:grid-cols-3">{format(items[13])}</div>
      <span className={cn("rounded-lg font-bold shadow-sm border", active && "text-sm justify-between opacity-50 border-gray-200 text-gray-700 flex")}>{String(14)}</span>
      <span className={cn("border-gray-200 hidden text-gray-700 h-10 p-[4px]", active && "border mt-[12px] hover:bg-blue-600 truncate")}>{String(15)}</span>
      <div className="rounded-lg h-10 text-sm py-1 items-center p-4 gap-2 block">{format(items[16])}</div>
      <div className="flex hidden rounded-md">{format(items[17])}</div>
      <span className={cn("mt-2 py-1 border", active && "items-center font-medium gap-2 w-[16px] border")}>{String(18)}</span>
      <span className={cn("bg-[#000] shadow-sm h-10 text-sm mt-2 py-1 gap-[8px]", active && "h-[32px] flex text-sm opacity-50 bg-white p-[4px]")}>{String(19)}</span>
      <button onClick={() => handle(20, items.map((i) => i.id))}>x</button>
      <div className="shadow-sm grid justify-between rounded-lg flex h-[32px] bg-[#fff]">{format(items[21])}</div>
      <div className="font-bold grid border h-10">{format(items[22])}</div>
      <div className="shadow-sm hidden h-[32px] rounded-md lg:grid-cols-3 py-1">{format(items[23])}</div>
      <div className="mb-4 opacity-50 block h-[32px] gap-2 flex">{format(items[24])}</div>
      <div className="hidden flex opacity-50 text-sm">{format(items[25])}</div>
      <div className="text-gray-700 p-4 truncate px-[16px] rounded-lg h-10 p-[4px]">{format(items[26])}</div>
      <span className={cn("flex font-medium truncate justify-between border lg:grid-cols-3 items-center", active && "text-gray-700 font-bold font-medium w-full p-2 h-10")}>{String(27)}</span>
      <span className={cn("text-gray-700 py-1 h-10 bg-blue-500 rounded-md lg:grid-cols-3", active && "font-medium rounded-[4px] py-1 text-sm gap-2 grid mt-2 shadow-sm")}>{String(28)}</span>
      <div className="px-3 mt-2 text-sm items-center gap-2 opacity-50 lg:grid-cols-3">{format(items[29])}</div>
      <span className={cn("w-full hidden items-center rounded-[4px] text-sm text-gray-700", active && "px-3 h-10 rounded-lg bg-blue-500 truncate shadow-sm mb-4")}>{String(30)}</span>
      <div className="lg:grid-cols-3 text-sm gap-4 border gap-2 py-1 text-lg px-[16px]">{format(items[31])}</div>
      <span className={cn("gap-[8px] px-3 mb-4 h-10 font-medium flex gap-2 px-[16px]", active && "mt-[12px] font-medium lg:grid-cols-3 hidden rounded-[4px]")}>{String(32)}</span>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="justify-between w-full font-medium">{format(items[34])}</div>
      <span className={cn("font-medium flex hidden m-[8px] border-gray-200 rounded-md", active && "bg-[#fff] md:flex text-gray-700")}>{String(35)}</span>
      <div className="font-bold flex bg-white rounded-md items-center m-[8px]">{format(items[36])}</div>
      <div className="md:flex text-sm flex">{format(items[37])}</div>
      <div className="bg-white gap-4 grid m-[8px] flex w-full mt-2">{format(items[38])}</div>
      <div className="p-4 rounded-md font-bold rounded-[4px] rounded-lg hidden gap-4">{format(items[39])}</div>
    </div>
  );
}
