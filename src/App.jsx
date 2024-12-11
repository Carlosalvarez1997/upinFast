import './App.css';
import './index.css';
import googleImg from "./assets/GetItOnGooglePlay_Badge_Web_color_English.png"
import appleImg from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#22d0a5] p-4 sm:p-10 lg:p-16 xl:p-20">
      <div className="md:w-full sm:w-2/3 h-auto p-6 sm:p-10 border-2 border-black text-center bg-white backdrop-blur-md rounded-3xl shadow-lg">
        <div className="flex justify-center mt-[-60px] sm:mt-[-90px] mb-10 sm:mb-20">
          <img
            src={"/upin.JPG"}  // Make sure the image path is correct
            alt="main image of upin"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl border-2 border-black shadow-lg shadow-slate-900"
          />
        </div>
        <h1 className="font-extrabold text-4xl sm:text-6xl">Upin</h1>
        <p className="mt-4 text-xl sm:text-2xl">
          Create. Join. Connect.
        </p>
        <div className="flex justify-center m-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.benhavis.upinjtyc832ezysr5qkcjpax"
          >
            <img
              src={googleImg}
              alt="get it on google"
              className="w-40 sm:w-48 lg:w-56"
            />
          </a>
        </div>
        <div className="flex justify-center m-5">
          <a
            href="https://apps.apple.com/us/app/upin/id1341978328"
          >
            <img
              src={appleImg}
              alt="Download from the App Store"
              className="w-40 sm:w-48 lg:w-56"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
