import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
function FileUpload({ contract, provider, account }) {
  // const [urlArr, setUrlArr] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        try {
          const formData = new FormData();
          formData.append("file", file);

          const resFile = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              pinata_api_key: `YOUR PINATA API KEY`,
              pinata_secret_api_key: `YOUR PINATA SECRET API KEY`,
              "Content-Type": "multipart/form-data",
            },
          });
          // console.log(file.type());
          const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
          console.log(ImgHash);
          const fileType = file.type;
          const fileName = file.name;
          console.log(fileType);

          const signer = contract.connect(provider.getSigner());
          console.log(signer.add(account, ImgHash, fileType,fileName));

          //setUrlArr((prev) => [...prev, ImgHash]);

          //Take a look at your Pinata Pinned section, you will see a new file added to you list.
        } catch (error) {
          alert("Error sending File to IPFS");
          console.log(error);
        }
      }

      alert("Successfully Uploaded");
      setFileName("No image selected");
      setFile(null); //to again disable the upload button after upload
    } catch (error) {
      console.log(error.message); //this mostly occurse when net is not working
    }
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0];
    console.log(data);

    const reader = new window.FileReader();

    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <h1 class="header">Let's Upload Something!</h1>
        <label htmlFor="file-upload" className="choose">
          {/*turn around for avoding choose file */}
          Choose Image
        </label>
        <input
          disabled={!account} //disabling button when metamask account is not connected
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {fileName}</span>
        {/* choose file */}
        <button type="submit" disabled={!file} className="upload">
          Upload file
        </button>
      </form>
    </div>
  );
}

export default FileUpload;