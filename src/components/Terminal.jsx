export default function Terminal() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[900px] h-[700px] bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl flex flex-col">
        {/* Terminal Header */}
        <div className="bg-[#3b3b3b] px-4 py-3 flex items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center pr-[60px] text-white font-bold font-mono">
            Terminal
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4">
          <div className="text-white font-mono space-y-1">
            <p>User@Machine:~$ ls</p>
            <p>Documents  Downloads  Music  Pictures  Videos</p>
            <p>User@Machine:~$ pwd</p>
            <p>/home/user</p>
          </div>
        </div>
      </div>
    </div>
  );
}