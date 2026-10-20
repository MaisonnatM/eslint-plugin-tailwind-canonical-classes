import { cn } from './cn';

export function Component61({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("flex grid md:flex text-sm", active && "truncate hidden h-[32px] py-1 gap-2 p-[4px] rounded-md opacity-50")}>{String(0)}</span>
      <div className="py-1 text-lg text-gray-700 grid flex">{format(items[1])}</div>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <div className="bg-blue-500 border md:flex px-[16px]">{format(items[3])}</div>
      <div className="p-2 lg:grid-cols-3 items-center border-gray-200 grid p-4 hover:bg-blue-600">{format(items[4])}</div>
      <div className="w-full p-4 border-gray-200 px-3">{format(items[5])}</div>
      <div className="text-gray-700 h-10 gap-4 mb-4 rounded-[4px] bg-[#000] mt-[12px]">{format(items[6])}</div>
      <span className={cn("rounded-lg rounded-md bg-[#000]", active && "block m-[8px] hidden flex opacity-50 mb-4 bg-blue-500 justify-between")}>{String(7)}</span>
      <div className="mb-4 items-center flex">{format(items[8])}</div>
      <span className={cn("font-bold hover:bg-blue-600 p-2 font-medium p-[4px]", active && "flex bg-white rounded-lg opacity-50 lg:grid-cols-3")}>{String(9)}</span>
      <span className={cn("h-10 items-center md:flex px-3 hidden text-gray-700", active && "py-1 w-full rounded-md p-[4px] rounded-[4px]")}>{String(10)}</span>
      <span className={cn("font-medium lg:grid-cols-3 py-1", active && "hover:bg-blue-600 px-3 mt-2 font-bold border-gray-200 p-4")}>{String(11)}</span>
      <span className={cn("hover:bg-blue-600 items-center justify-between border py-1 gap-2 mb-4 block", active && "md:flex mt-2 block mb-4 px-3")}>{String(12)}</span>
      <span className={cn("gap-4 rounded-md text-gray-700 p-4 text-sm", active && "border bg-white justify-between truncate")}>{String(13)}</span>
      <div className="gap-4 text-lg py-1 md:flex bg-white">{format(items[14])}</div>
      <span className={cn("flex w-full p-4 shadow-sm h-10 mt-2 items-center mb-4", active && "rounded-lg m-[8px] bg-[#fff] truncate justify-between")}>{String(15)}</span>
      <div className="rounded-md rounded-lg bg-white font-bold bg-blue-500">{format(items[16])}</div>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <span className={cn("gap-4 rounded-[4px] gap-[8px] border-gray-200 mt-2", active && "font-bold mt-2 flex hidden")}>{String(18)}</span>
      <div className="flex gap-[8px] rounded-md text-lg bg-white">{format(items[19])}</div>
      <div className="font-bold truncate md:flex mt-[12px] h-10 flex hover:bg-blue-600">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <div className="rounded-lg hover:bg-blue-600 bg-[#fff] lg:grid-cols-3 h-10 items-center rounded-[4px] rounded-md">{format(items[22])}</div>
      <div className="border gap-[8px] flex grid">{format(items[23])}</div>
      <div className="hover:bg-blue-600 rounded-lg md:flex text-gray-700 p-4 h-10 justify-between">{format(items[24])}</div>
      <div className="block font-bold p-2 opacity-50 w-full p-[4px] p-4 border-gray-200">{format(items[25])}</div>
      <div className="py-1 md:flex justify-between gap-2 flex truncate px-3 gap-[8px]">{format(items[26])}</div>
      <div className="grid bg-blue-500 font-bold gap-2 hidden">{format(items[27])}</div>
      <div className="mt-2 px-3 bg-blue-500 truncate border font-bold py-1">{format(items[28])}</div>
      <div className="block text-lg flex justify-between font-bold grid bg-white font-medium">{format(items[29])}</div>
      <button onClick={() => handle(30, items.map((i) => i.id))}>x</button>
      <div className="px-3 flex lg:grid-cols-3 px-[16px] py-1">{format(items[31])}</div>
      <div className="py-1 hover:bg-blue-600 font-bold gap-2 p-4 text-sm">{format(items[32])}</div>
      <div className="rounded-lg bg-blue-500 block border font-medium px-[16px] bg-[#fff]">{format(items[33])}</div>
      <button onClick={() => handle(34, items.map((i) => i.id))}>x</button>
      <div className="block hidden truncate m-[8px] font-bold md:flex">{format(items[35])}</div>
      <div className="text-lg bg-white p-[4px] lg:grid-cols-3 h-[32px]">{format(items[36])}</div>
      <span className={cn("px-[16px] gap-4 w-full px-3 p-2 gap-[8px]", active && "font-bold p-4 gap-2 rounded-[4px] bg-blue-500 flex gap-4 py-1")}>{String(37)}</span>
      <div className="border-gray-200 font-bold items-center truncate lg:grid-cols-3">{format(items[38])}</div>
      <span className={cn("rounded-lg font-bold shadow-sm border", active && "text-sm justify-between opacity-50 border-gray-200 text-gray-700 flex")}>{String(39)}</span>
    </div>
  );
}
