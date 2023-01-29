import './App.css';

function App() {
  return (
    <div className="bg-[#d6e2f0] min-h-screen outfit flex justify-center items-center">
        <div className="rounded-[22px] gap-[25px] text-[30px] text-center p-[20px] flex flex-col w-[400px] max-w-[calc(100vw-80px)] pb-[50px] bg-[#ffffff]">
            <img className="rounded-[14px]" src={process.env.PUBLIC_URL + "/images/image-qr-code.png"} alt="QR code" />
            <h1 className="px-[10px] font-bold text-[28px] text-[#1f3251]">Improve your front-end skills by building projects</h1>
            <p className="px-[10px] text-[20px] text-[#7b879d] font-normal leading-6">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>        
    </div>
  );
}


export default App;
