import { cn } from './cn';

export function Component257({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <div className="font-medium hover:bg-blue-600 h-[32px] items-center justify-between px-[16px] font-bold">{format(items[0])}</div>
      <button onClick={() => handle(1, items.map((i) => i.id))}>x</button>
      <div className="hover:bg-blue-600 text-sm px-3 justify-between hidden shadow-sm">{format(items[2])}</div>
      <div className="px-3 opacity-50 font-medium">{format(items[3])}</div>
      <div className="block opacity-50 gap-2 w-full bg-blue-500">{format(items[4])}</div>
      <div className="gap-4 text-lg py-1 border border-gray-200 hidden">{format(items[5])}</div>
      <div className="mt-2 mt-[12px] text-lg border md:flex">{format(items[6])}</div>
      <span className={cn("items-center mt-[12px] rounded-md text-lg h-[32px] h-10 hover:bg-blue-600 text-gray-700", active && "mt-2 border grid md:flex gap-4 flex bg-white")}>{String(7)}</span>
      <div className="font-bold lg:grid-cols-3 w-[16px] h-10 hidden px-[16px] py-1">{format(items[8])}</div>
      <div className="text-sm font-medium block p-2 border-gray-200 mt-2 items-center truncate">{format(items[9])}</div>
      <span className={cn("font-bold gap-4 rounded-lg rounded-md opacity-50 mt-2 flex py-1", active && "hover:bg-blue-600 block opacity-50 text-gray-700 p-2 text-lg flex")}>{String(10)}</span>
      <div className="truncate font-medium grid gap-4 font-bold">{format(items[11])}</div>
      <span className={cn("md:flex flex p-[4px]", active && "w-full w-[16px] opacity-50 p-4 border-gray-200 grid p-2")}>{String(12)}</span>
      <div className="w-full p-4 bg-[#000] px-3">{format(items[13])}</div>
      <div className="block hidden border">{format(items[14])}</div>
      <div className="items-center text-sm mb-4">{format(items[15])}</div>
      <div className="text-sm px-3 p-4 md:flex gap-4">{format(items[16])}</div>
      <div className="p-2 border h-[32px] lg:grid-cols-3 font-bold text-lg">{format(items[17])}</div>
      <div className="bg-blue-500 h-10 text-gray-700 font-medium">{format(items[18])}</div>
      <span className={cn("opacity-50 mt-[12px] gap-4 border-gray-200 hidden truncate rounded-lg block", active && "p-[4px] mb-4 flex gap-4 truncate rounded-lg")}>{String(19)}</span>
      <span className={cn("flex grid md:flex text-sm", active && "truncate hidden h-[32px] py-1 gap-2 p-[4px] rounded-md opacity-50")}>{String(20)}</span>
      <div className="py-1 text-lg text-gray-700 grid flex">{format(items[21])}</div>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <div className="bg-blue-500 border md:flex px-[16px]">{format(items[23])}</div>
      <div className="p-2 lg:grid-cols-3 items-center border-gray-200 grid p-4 hover:bg-blue-600">{format(items[24])}</div>
      <div className="w-full p-4 border-gray-200 px-3">{format(items[25])}</div>
      <div className="text-gray-700 h-10 gap-4 mb-4 rounded-[4px] bg-[#000] mt-[12px]">{format(items[26])}</div>
      <span className={cn("rounded-lg rounded-md bg-[#000]", active && "block m-[8px] hidden flex opacity-50 mb-4 bg-blue-500 justify-between")}>{String(27)}</span>
      <div className="mb-4 items-center flex">{format(items[28])}</div>
      <span className={cn("font-bold hover:bg-blue-600 p-2 font-medium p-[4px]", active && "flex bg-white rounded-lg opacity-50 lg:grid-cols-3")}>{String(29)}</span>
      <span className={cn("h-10 items-center md:flex px-3 hidden text-gray-700", active && "py-1 w-full rounded-md p-[4px] rounded-[4px]")}>{String(30)}</span>
      <span className={cn("font-medium lg:grid-cols-3 py-1", active && "hover:bg-blue-600 px-3 mt-2 font-bold border-gray-200 p-4")}>{String(31)}</span>
      <span className={cn("hover:bg-blue-600 items-center justify-between border py-1 gap-2 mb-4 block", active && "md:flex mt-2 block mb-4 px-3")}>{String(32)}</span>
      <span className={cn("gap-4 rounded-md text-gray-700 p-4 text-sm", active && "border bg-white justify-between truncate")}>{String(33)}</span>
      <div className="gap-4 text-lg py-1 md:flex bg-white">{format(items[34])}</div>
      <span className={cn("flex w-full p-4 shadow-sm h-10 mt-2 items-center mb-4", active && "rounded-lg m-[8px] bg-[#fff] truncate justify-between")}>{String(35)}</span>
      <div className="rounded-md rounded-lg bg-white font-bold bg-blue-500">{format(items[36])}</div>
      <button onClick={() => handle(37, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-[4px] gap-[8px] border-gray-200 mt-2", active && "font-bold mt-2 flex hidden")}>{String(38)}</span>
      <div className="flex gap-[8px] rounded-md text-lg bg-white">{format(items[39])}</div>
    </div>
  );
}
