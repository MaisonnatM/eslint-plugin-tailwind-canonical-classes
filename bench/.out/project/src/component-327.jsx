import { cn } from './cn';

export function Component327({ active, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  console.log(String(total), Math.max(total, 0));
  return (
    <div>
      <span className={cn("font-medium rounded-lg opacity-50 items-center truncate text-lg", active && "gap-4 md:flex w-full opacity-50 h-10 flex font-medium")}>{String(0)}</span>
      <span className={cn("md:flex gap-2 mt-[12px] mt-2 lg:grid-cols-3 rounded-md mb-4 truncate", active && "text-lg px-[16px] grid")}>{String(1)}</span>
      <div className="w-full px-[16px] w-[16px] bg-blue-500 bg-white border-gray-200 px-3">{format(items[2])}</div>
      <span className={cn("mt-2 justify-between hidden py-1 gap-2", active && "border opacity-50 border-gray-200")}>{String(3)}</span>
      <span className={cn("md:flex gap-2 text-lg", active && "rounded-[4px] mb-4 items-center p-2 truncate")}>{String(4)}</span>
      <div className="hover:bg-blue-600 px-3 font-medium w-full p-2 border-gray-200 gap-4">{format(items[5])}</div>
      <div className="text-gray-700 px-3 gap-[8px] lg:grid-cols-3 m-[8px] border hidden p-4">{format(items[6])}</div>
      <div className="rounded-md px-3 py-1 bg-white">{format(items[7])}</div>
      <span className={cn("bg-blue-500 font-bold truncate bg-white mb-4 grid", active && "gap-4 hover:bg-blue-600 bg-blue-500 h-[32px] hidden font-medium")}>{String(8)}</span>
      <div className="bg-blue-500 text-gray-700 h-10 bg-white grid">{format(items[9])}</div>
      <span className={cn("py-1 p-2 w-full hover:bg-blue-600", active && "items-center py-1 flex p-2 text-lg block")}>{String(10)}</span>
      <span className={cn("truncate border-gray-200 items-center flex h-10", active && "py-1 md:flex gap-2 mt-2 h-10 grid lg:grid-cols-3 text-gray-700")}>{String(11)}</span>
      <div className="text-lg m-[8px] items-center bg-white font-medium">{format(items[12])}</div>
      <div className="p-4 px-[16px] gap-[8px] bg-blue-500 gap-2 bg-[#fff]">{format(items[13])}</div>
      <div className="font-medium text-lg gap-4 text-sm items-center w-[16px]">{format(items[14])}</div>
      <div className="truncate rounded-lg gap-2 mb-4 p-2 bg-blue-500">{format(items[15])}</div>
      <button onClick={() => handle(16, items.map((i) => i.id))}>x</button>
      <button onClick={() => handle(17, items.map((i) => i.id))}>x</button>
      <span className={cn("px-[16px] m-[8px] py-1", active && "px-3 flex bg-blue-500 text-lg py-1 h-10 p-2")}>{String(18)}</span>
      <div className="rounded-[4px] text-lg items-center border-gray-200 grid font-bold">{format(items[19])}</div>
      <span className={cn("hover:bg-blue-600 items-center rounded-lg shadow-sm truncate hidden bg-[#fff] p-2", active && "flex justify-between bg-[#000] w-[16px] shadow-sm border-gray-200")}>{String(20)}</span>
      <div className="truncate justify-between lg:grid-cols-3 gap-2 w-full md:flex font-bold">{format(items[21])}</div>
      <div className="m-[8px] hidden px-3 font-bold">{format(items[22])}</div>
      <div className="px-3 opacity-50 hidden p-[4px] rounded-md">{format(items[23])}</div>
      <div className="mt-2 border-gray-200 p-4">{format(items[24])}</div>
      <span className={cn("text-lg md:flex truncate bg-blue-500", active && "mb-4 gap-4 mt-2")}>{String(25)}</span>
      <div className="text-gray-700 justify-between h-10 items-center">{format(items[26])}</div>
      <div className="p-2 p-4 rounded-[4px]">{format(items[27])}</div>
      <button onClick={() => handle(28, items.map((i) => i.id))}>x</button>
      <span className={cn("p-4 bg-blue-500 truncate grid text-sm", active && "w-full font-bold px-3 md:flex flex")}>{String(29)}</span>
      <div className="px-3 h-[32px] py-1 block shadow-sm md:flex h-10">{format(items[30])}</div>
      <div className="hover:bg-blue-600 bg-blue-500 gap-4 px-3">{format(items[31])}</div>
      <div className="font-medium hover:bg-blue-600 justify-between rounded-lg w-full border p-2">{format(items[32])}</div>
      <span className={cn("rounded-md p-2 rounded-lg font-medium mb-4", active && "flex text-lg px-3 w-[16px]")}>{String(33)}</span>
      <div className="font-bold px-[16px] bg-blue-500">{format(items[34])}</div>
      <button onClick={() => handle(35, items.map((i) => i.id))}>x</button>
      <div className="p-2 text-gray-700 truncate bg-[#000] w-[16px] bg-blue-500">{format(items[36])}</div>
      <div className="justify-between hidden p-4 font-bold hover:bg-blue-600 text-sm px-3">{format(items[37])}</div>
      <div className="mb-4 md:flex grid bg-blue-500 bg-[#fff] rounded-md h-[32px]">{format(items[38])}</div>
      <div className="flex font-bold p-2 gap-2">{format(items[39])}</div>
    </div>
  );
}
