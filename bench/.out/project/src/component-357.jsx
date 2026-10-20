import { cn } from './cn';

export function Component357({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="hidden flex opacity-50 text-sm">{format(items[0])}</div>
      <div className="text-gray-700 p-4 truncate px-[16px] rounded-lg h-10 p-[4px]">{format(items[1])}</div>
      <span className={cn("flex font-medium truncate justify-between border lg:grid-cols-3 items-center", active && "text-gray-700 font-bold font-medium w-full p-2 h-10")}>{String(2)}</span>
      <span className={cn("text-gray-700 py-1 h-10 bg-blue-500 rounded-md lg:grid-cols-3", active && "font-medium rounded-[4px] py-1 text-sm gap-2 grid mt-2 shadow-sm")}>{String(3)}</span>
      <div className="px-3 mt-2 text-sm items-center gap-2 opacity-50 lg:grid-cols-3">{format(items[4])}</div>
      <span className={cn("w-full hidden items-center rounded-[4px] text-sm text-gray-700", active && "px-3 h-10 rounded-lg bg-blue-500 truncate shadow-sm mb-4")}>{String(5)}</span>
      <div className="lg:grid-cols-3 text-sm gap-4 border gap-2 py-1 text-lg px-[16px]">{format(items[6])}</div>
      <span className={cn("gap-[8px] px-3 mb-4 h-10 font-medium flex gap-2 px-[16px]", active && "mt-[12px] font-medium lg:grid-cols-3 hidden rounded-[4px]")}>{String(7)}</span>
      <button onClick={() => handle(8, items.map((i) => i.id))}>x</button>
      <div className="justify-between w-full font-medium">{format(items[9])}</div>
      <span className={cn("font-medium flex hidden m-[8px] border-gray-200 rounded-md", active && "bg-[#fff] md:flex text-gray-700")}>{String(10)}</span>
      <div className="font-bold flex bg-white rounded-md items-center m-[8px]">{format(items[11])}</div>
      <div className="md:flex text-sm flex">{format(items[12])}</div>
      <div className="bg-white gap-4 grid m-[8px] flex w-full mt-2">{format(items[13])}</div>
      <div className="p-4 rounded-md font-bold rounded-[4px] rounded-lg hidden gap-4">{format(items[14])}</div>
      <span className={cn("border font-bold shadow-sm md:flex p-4 rounded-md text-sm w-full", active && "py-1 p-2 h-[32px] border bg-blue-500 mb-4 rounded-[4px] lg:grid-cols-3")}>{String(15)}</span>
      <div className="mb-4 hover:bg-blue-600 h-10 lg:grid-cols-3">{format(items[16])}</div>
      <div className="opacity-50 border-gray-200 justify-between lg:grid-cols-3 bg-[#fff] font-medium">{format(items[17])}</div>
      <div className="grid text-gray-700 hidden bg-blue-500 items-center px-3 gap-2">{format(items[18])}</div>
      <div className="opacity-50 block bg-[#000] px-3 font-bold rounded-md bg-[#fff] mt-2">{format(items[19])}</div>
      <span className={cn("flex gap-4 font-bold bg-[#000]", active && "border-gray-200 h-[32px] md:flex")}>{String(20)}</span>
      <div className="px-[16px] bg-[#000] shadow-sm h-10 m-[8px]">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <div className="text-sm h-10 block">{format(items[23])}</div>
      <div className="hidden lg:grid-cols-3 p-2 shadow-sm font-bold block border">{format(items[24])}</div>
      <span className={cn("w-full justify-between border-gray-200 text-gray-700 items-center", active && "h-10 px-3 bg-[#fff] w-full")}>{String(25)}</span>
      <span className={cn("text-gray-700 rounded-lg hover:bg-blue-600 font-medium w-full", active && "block gap-4 items-center")}>{String(26)}</span>
      <div className="mb-4 text-lg rounded-lg text-sm rounded-md">{format(items[27])}</div>
      <div className="shadow-sm border-gray-200 mb-4 opacity-50 gap-4 gap-2">{format(items[28])}</div>
      <div className="border-gray-200 justify-between p-2">{format(items[29])}</div>
      <div className="truncate font-bold bg-blue-500">{format(items[30])}</div>
      <div className="border-gray-200 p-4 text-sm rounded-lg lg:grid-cols-3 font-medium">{format(items[31])}</div>
      <span className={cn("text-lg w-[16px] font-bold opacity-50 gap-4 font-medium truncate p-4", active && "bg-[#fff] rounded-lg block border mt-[12px] gap-4")}>{String(32)}</span>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg h-10 rounded-md border px-3", active && "text-lg bg-white opacity-50 bg-blue-500 font-bold")}>{String(34)}</span>
      <span className={cn("items-center mb-4 gap-4 lg:grid-cols-3 border mt-2 px-3 text-gray-700", active && "mt-2 gap-2 w-full mb-4")}>{String(35)}</span>
      <div className="py-1 h-10 p-2 flex text-sm bg-white md:flex grid">{format(items[36])}</div>
      <div className="rounded-lg justify-between text-lg rounded-md shadow-sm text-sm bg-[#fff] mt-2">{format(items[37])}</div>
      <div className="m-[8px] flex gap-4 lg:grid-cols-3 items-center mt-2">{format(items[38])}</div>
      <div className="mt-2 p-2 justify-between">{format(items[39])}</div>
    </div>
  );
}
