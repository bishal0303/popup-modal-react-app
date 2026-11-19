const Popup = ({ popup, setPopup, title }) => {
  return (
    <>
      {popup && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-gray-300 flex justify-center items-center transition-all duration-500 ease-in-out scale-100 opacity-100 starting:opacity-0">
          <button
            onClick={() => {
              setPopup(false);
            }}
            className=" cursor-pointer absolute top-[1rem] right-[1rem]"
          >
            ❌
          </button>

          <div className="flex flex-col justify-center items-center gap-5 w-full h-full max-w-[50rem] max-h-[30rem] bg-gray-400 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out scale-100 opacity-100 starting:scale-80  starting:opacity-0">
            <h1 className="font-bold text-3xl capitalize">⚠️ {title}</h1>
            <p className=" capitalize">Are you sure want to {title} this?</p>
            <div className="flex gap-4">
              <button onClick={() => setPopup(false)} className="bg-amber-400 cursor-pointer px-4 py-2 shadow-lg rounded-lg">No</button>
              <button onClick={() => setPopup(false)} className="bg-green-400 cursor-pointer px-4 py-2 shadow-lg rounded-lg">Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;