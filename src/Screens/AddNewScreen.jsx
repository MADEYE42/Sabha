import React from "react";
import Header from "../Components/Header";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSend, IoIosInformationCircleOutline} from "react-icons/io";



function AddNewScreen() {
  return (
    <div>
      <Header />
      <button className="btn mt-7 border bg-primary"><IoArrowBack /> Back</button>
      <h2 className="font-bold text-2xl mt-5">
        Let's Lock in it's the time of the year.
      </h2>
      <div className=" flex flex-col mt-7 gap-2">
        <label>Enter your idea</label>
        <textarea
          class="textarea textarea-primary"
          placeholder="Ideas"
        ></textarea>
      </div>
      <div className=" flex flex-col mt-7 gap-2">
        <label className="flex justify-between ">Enter your username <span className="items-center gap-2 flex"><IoIosInformationCircleOutline className="w-8 h-8"/>No account needed*</span></label>
        <input
          type="text"
          placeholder="Username"
          class="input input-bordered input-primary w-full "
        />
      </div>
      <button class="btn btn-active btn-primary w-full mt-10 items-center">Send <IoIosSend /></button>
    </div>
  );
}

export default AddNewScreen;
