import { useState } from "react";
import { useFeesUpload } from "../hooks/useFeesUpload";
const FeesUpload = () => {
  const { uploads, error, isLoading } = useFeesUpload();
  const [feesReceipt, setFeesReceipt] = useState("");
  const [prevAllot, setPrevAllot] = useState("");
  const [err, setErr] = useState(false);
  // const [feesType, setFeesType] = useState();
  const [allotType, setAllotType] = useState();

  const fileType = (file) => {
    console.log(file);
    let name = file.name;
    console.log(name);
    let type = name.split(".");
    if (type[1] !== "pdf") {
      console.log("inside");
      {
        alert("The input file should be a pdf :>");
      }
      {
        window.location.reload(false);
      }
    }
  };

  const feesUpload = (e) => {
    const file = e.target.files[0];
    fileType(file);
    setfeesToBase(file);
    console.log(file);
  };

  const setfeesToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFeesReceipt(reader.result);
    };
  };
  const AllotmentUpload = (e) => {
    const file = e.target.files[0];
    fileType(file);
    setAllotmentToBase(file);
    setAllotType(file.type);
  };

  const setAllotmentToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevAllot(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fileType(feesReceipt);
    console.log("inside handlesubmit ", err);
    // if (!feesType == "application/pdf" || !allotType == "application/pdf") {
    //   console.log(feesType, "inside condition ");
    //   {
    //     alert("The input field should be pdf type only");
    //   }
    //   return;
    // }
    console.log("inside FeesUploads", feesReceipt, prevAllot);
    console.log("Submitted th fees and allotment receipt");
    await uploads(feesReceipt, prevAllot);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css"
        rel="stylesheet"
      />
      <div style={{ padding: "10%" }}>
        <h1
          style={{ fontSize: "200%", textAlign: "center", marginBottom: "4%" }}
        >
          Uploads Section:
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-file custom-file">
            <label
              htmlFor="image"
              className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Upload Hostel Payement Receipt
            </label>
            <input
              type="file"
              className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="image"
              name="feesReceipt"
              placeholder="Choose Image"
              required=""
              onChange={feesUpload}
            />
            <label for="image" class="btn btn-primary"></label>
          </div>
          <div className="form-file custom-file">
            <label
              htmlFor="image"
              className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Upload Previous Hostel Allotment:
            </label>
            <input
              type="file"
              className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="image"
              name="prevAllot"
              placeholder="Choose Image"
              required=""
              onChange={AllotmentUpload}
            />
            <label for="image" class="btn btn-primary"></label>
          </div>
          <div>err:{err}</div>
          <button
            onSubmit={handleSubmit}
            type="submit"
            disabled={isLoading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeesUpload;
