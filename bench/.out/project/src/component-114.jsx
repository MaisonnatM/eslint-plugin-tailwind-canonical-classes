import { cn } from './cn';

export function Component114({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <button onClick={() => handle(0, items.map((i) => i.id))}>x</button>
      <div className="gap-2 gap-4 px-3 m-[8px] mb-4">{format(items[1])}</div>
      <button onClick={() => handle(2, items.map((i) => i.id))}>x</button>
      <div className="font-bold gap-[8px] rounded-[4px] mt-2 block grid gap-4 truncate">{format(items[3])}</div>
      <span className={cn("py-1 h-10 font-bold lg:grid-cols-3", active && "text-sm h-10 text-gray-700 border bg-blue-500 bg-[#fff] p-2")}>{String(4)}</span>
      <span className={cn("font-medium rounded-lg opacity-50 items-center truncate text-lg", active && "gap-4 md:flex w-full opacity-50 h-10 flex font-medium")}>{String(5)}</span>
      <span className={cn("md:flex gap-2 mt-[12px] mt-2 lg:grid-cols-3 rounded-md mb-4 truncate", active && "text-lg px-[16px] grid")}>{String(6)}</span>
      <div className="w-full px-[16px] w-[16px] bg-blue-500 bg-white border-gray-200 px-3">{format(items[7])}</div>
      <span className={cn("mt-2 justify-between hidden py-1 gap-2", active && "border opacity-50 border-gray-200")}>{String(8)}</span>
      <span className={cn("md:flex gap-2 text-lg", active && "rounded-[4px] mb-4 items-center p-2 truncate")}>{String(9)}</span>
      <div className="hover:bg-blue-600 px-3 font-medium w-full p-2 border-gray-200 gap-4">{format(items[10])}</div>
      <div className="text-gray-700 px-3 gap-[8px] lg:grid-cols-3 m-[8px] border hidden p-4">{format(items[11])}</div>
      <div className="rounded-md px-3 py-1 bg-white">{format(items[12])}</div>
      <span className={cn("bg-blue-500 font-bold truncate bg-white mb-4 grid", active && "gap-4 hover:bg-blue-600 bg-blue-500 h-[32px] hidden font-medium")}>{String(13)}</span>
      <div className="bg-blue-500 text-gray-700 h-10 bg-white grid">{format(items[14])}</div>
      <span className={cn("py-1 p-2 w-full hover:bg-blue-600", active && "items-center py-1 flex p-2 text-lg block")}>{String(15)}</span>
      <span className={cn("truncate border-gray-200 items-center flex h-10", active && "py-1 md:flex gap-2 mt-2 h-10 grid lg:grid-cols-3 text-gray-700")}>{String(16)}</span>
      <div className="text-lg m-[8px] items-center bg-white font-medium">{format(items[17])}</div>
      <div className="p-4 px-[16px] gap-[8px] bg-blue-500 gap-2 bg-[#fff]">{format(items[18])}</div>
      <div className="font-medium text-lg gap-4 text-sm items-center w-[16px]">{format(items[19])}</div>
      <div className="truncate rounded-lg gap-2 mb-4 p-2 bg-blue-500">{format(items[20])}</div>
      <button onClick={() => handle(21, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(22, items.map((i) => i.id))}>x</button>
      <span className={cn("px-[16px] m-[8px] py-1", active && "px-3 flex bg-blue-500 text-lg py-1 h-10 p-2")}>{String(23)}</span>
      <div className="rounded-[4px] text-lg items-center border-gray-200 grid font-bold">{format(items[24])}</div>
      <span className={cn("hover:bg-blue-600 items-center rounded-lg shadow-sm truncate hidden bg-[#fff] p-2", active && "flex justify-between bg-[#000] w-[16px] shadow-sm border-gray-200")}>{String(25)}</span>
      <div className="truncate justify-between lg:grid-cols-3 gap-2 w-full md:flex font-bold">{format(items[26])}</div>
      <div className="m-[8px] hidden px-3 font-bold">{format(items[27])}</div>
      <div className="px-3 opacity-50 hidden p-[4px] rounded-md">{format(items[28])}</div>
      <div className="mt-2 border-gray-200 p-4">{format(items[29])}</div>
      <span className={cn("text-lg md:flex truncate bg-blue-500", active && "mb-4 gap-4 mt-2")}>{String(30)}</span>
      <div className="text-gray-700 justify-between h-10 items-center">{format(items[31])}</div>
      <div className="p-2 p-4 rounded-[4px]">{format(items[32])}</div>
      <button onClick={() => handle(33, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 bg-blue-500 truncate grid text-sm", active && "w-full font-bold px-3 md:flex flex")}>{String(34)}</span>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[35])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[36])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[37])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(38)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[39])}</div>
    </div>
  );
}
