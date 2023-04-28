import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
<<<<<<< HEAD
const FileUpload = ({ contract, account}) => {
=======
const FileUpload = ({ contract, account, provider }) => {
>>>>>>> d734102c6856ac2a91abd0baa7ec6561b6e70d52
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
<<<<<<< HEAD
            pinata_api_key: `a19baf587ff366b87392`,
            pinata_secret_api_key: `af2e0de369150a84e6b444d7cf307efe246bc4ae5581e2394cc0d57b3d981cea`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(contract.add(account,ImgHash));
        console.log(ImgHash);
=======
            pinata_api_key: `
            a19baf587ff366b87392`,
            pinata_secret_api_key: `af2e0de369150a84e6b444d7cf307efe246bc4ae5581e2394cc0d57b3d981cea`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
>>>>>>> d734102c6856ac2a91abd0baa7ec6561b6e70d52
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
<<<<<<< HEAD
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
=======
    // alert("Successfully Image Uploaded");
    // setFileName("No image selected");
    // setFile(null);
>>>>>>> d734102c6856ac2a91abd0baa7ec6561b6e70d52
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
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
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {fileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};
export default FileUpload;