import { cn } from './cn';

export function Component128({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("font-medium flex hidden m-[8px] border-gray-200 rounded-md", active && "bg-[#fff] md:flex text-gray-700")}>{String(0)}</span>
      <div className="font-bold flex bg-white rounded-md items-center m-[8px]">{format(items[1])}</div>
      <div className="md:flex text-sm flex">{format(items[2])}</div>
      <div className="bg-white gap-4 grid m-[8px] flex w-full mt-2">{format(items[3])}</div>
      <div className="p-4 rounded-md font-bold rounded-[4px] rounded-lg hidden gap-4">{format(items[4])}</div>
      <span className={cn("border font-bold shadow-sm md:flex p-4 rounded-md text-sm w-full", active && "py-1 p-2 h-[32px] border bg-blue-500 mb-4 rounded-[4px] lg:grid-cols-3")}>{String(5)}</span>
      <div className="mb-4 hover:bg-blue-600 h-10 lg:grid-cols-3">{format(items[6])}</div>
      <div className="opacity-50 border-gray-200 justify-between lg:grid-cols-3 bg-[#fff] font-medium">{format(items[7])}</div>
      <div className="grid text-gray-700 hidden bg-blue-500 items-center px-3 gap-2">{format(items[8])}</div>
      <div className="opacity-50 block bg-[#000] px-3 font-bold rounded-md bg-[#fff] mt-2">{format(items[9])}</div>
      <span className={cn("flex gap-4 font-bold bg-[#000]", active && "border-gray-200 h-[32px] md:flex")}>{String(10)}</span>
      <div className="px-[16px] bg-[#000] shadow-sm h-10 m-[8px]">{format(items[11])}</div>
      <button onClick={() => handle(12, items.map((i) => i.id))}>x</button>
      <div className="text-sm h-10 block">{format(items[13])}</div>
      <div className="hidden lg:grid-cols-3 p-2 shadow-sm font-bold block border">{format(items[14])}</div>
      <span className={cn("w-full justify-between border-gray-200 text-gray-700 items-center", active && "h-10 px-3 bg-[#fff] w-full")}>{String(15)}</span>
      <span className={cn("text-gray-700 rounded-lg hover:bg-blue-600 font-medium w-full", active && "block gap-4 items-center")}>{String(16)}</span>
      <div className="mb-4 text-lg rounded-lg text-sm rounded-md">{format(items[17])}</div>
      <div className="shadow-sm border-gray-200 mb-4 opacity-50 gap-4 gap-2">{format(items[18])}</div>
      <div className="border-gray-200 justify-between p-2">{format(items[19])}</div>
      <div className="truncate font-bold bg-blue-500">{format(items[20])}</div>
      <div className="border-gray-200 p-4 text-sm rounded-lg lg:grid-cols-3 font-medium">{format(items[21])}</div>
      <span className={cn("text-lg w-[16px] font-bold opacity-50 gap-4 font-medium truncate p-4", active && "bg-[#fff] rounded-lg block border mt-[12px] gap-4")}>{String(22)}</span>
      <button onClick={() => handle(23, items.map((i) => i.id))}>x</button>
      <span className={cn("rounded-lg h-10 rounded-md border px-3", active && "text-lg bg-white opacity-50 bg-blue-500 font-bold")}>{String(24)}</span>
      <span className={cn("items-center mb-4 gap-4 lg:grid-cols-3 border mt-2 px-3 text-gray-700", active && "mt-2 gap-2 w-full mb-4")}>{String(25)}</span>
      <div className="py-1 h-10 p-2 flex text-sm bg-white md:flex grid">{format(items[26])}</div>
      <div className="rounded-lg justify-between text-lg rounded-md shadow-sm text-sm bg-[#fff] mt-2">{format(items[27])}</div>
      <div className="m-[8px] flex gap-4 lg:grid-cols-3 items-center mt-2">{format(items[28])}</div>
      <div className="mt-2 p-2 justify-between">{format(items[29])}</div>
      <div className="gap-4 p-2 py-1">{format(items[30])}</div>
      <div className="mb-4 w-full rounded-lg">{format(items[31])}</div>
      <span className={cn("hidden px-3 text-gray-700 opacity-50", active && "text-sm rounded-[4px] hover:bg-blue-600 px-3")}>{String(32)}</span>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg grid mb-4 mt-2">{format(items[34])}</div>
      <div className="lg:grid-cols-3 shadow-sm bg-white p-4 items-center gap-2">{format(items[35])}</div>
      <div className="items-center gap-2 grid">{format(items[36])}</div>
      <div className="md:flex rounded-lg w-full m-[8px] p-2 text-sm rounded-md flex">{format(items[37])}</div>
      <div className="border h-[32px] md:flex">{format(items[38])}</div>
      <div className="text-lg gap-4 border-gray-200 gap-2 bg-[#000]">{format(items[39])}</div>
    </div>
  );
}
