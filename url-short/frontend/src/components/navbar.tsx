export default function Navbar() {
  return (
    <div className="p-4 flex flex-1 items-center justify-between h-12 w-screen bg-black">
      <h1 className="font-bold  text-white">url-shortner</h1>
      <div className="flex text-white ">
        <h1 className="bg-gray-300 p-2 rounded-md text-black">Logout</h1>
      </div>
    </div>
  );
}
