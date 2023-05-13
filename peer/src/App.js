import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Dancing+Script:wght@500&family=Prompt:wght@300&display=swap');
</style>

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [displayOpen, setDisplayOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const[home,setHome]=useState(true);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        let contractAddress = "0x3aCA12034FcE640dc8ffbbbd5e67B2aDb069a026";

        //
    
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  const handleHomeClick = () => {
    setHome(true);
    setUploadOpen(false);
    setDisplayOpen(false);
    setModalOpen(false);
  };
  const handleUploadClick = () => {
    setHome(false);
    setUploadOpen(true);
    setDisplayOpen(false);
    setModalOpen(false);
  };

  const handleDisplayClick = () => {
    setHome(false);
    setDisplayOpen(true);
    setUploadOpen(false);
    setModalOpen(false);
  };

  const handleModalClick = () => {
    setHome(false);
    setModalOpen(true);
    setUploadOpen(false);
    setDisplayOpen(false);
  };

  return (
    <div className="App">
           <h1 class= "heading" style={{ color: "black"  }}>File Securita</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p class= "account" style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
      <div className="navbar">
        <img class = "App-logo" src="https://thumbs.dreamstime.com/b/print-167280049.jpg" alt="Logo" border="0" width="100" height="100" />
        <button className="navbar-button" onClick={handleHomeClick}>
          Home
        </button>
        <button className="navbar-button" onClick={handleUploadClick}>
          Upload
        </button>
        <button className="navbar-button" onClick={handleDisplayClick}>
          Display
        </button>
        <button className="navbar-button" onClick={handleModalClick}>
          Share
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );

  function renderContent() {
    if (uploadOpen) {
      return <FileUpload account={account} provider={provider} contract={contract} setUploadOpen={setUploadOpen} />;
    } else if (displayOpen) {
      return <Display contract={contract} account={account} provider={provider} setDisplayOpen={setDisplayOpen} />;
    } else if (modalOpen) {
      return <Modal setModalOpen={setModalOpen} contract={contract} />;
    }
    else if (home) {
      return (
        <div className="home">
          <p>
            File Securita is a decentralized file storage application that
            allows users to upload files to the blockchain. The files are
            encrypted and stored on the blockchain. The user can then share the
            file with other users by providing them with the file hash. The
            other users can then download the file from the blockchain.
          </p>
        
          </div>
      );
  }
  }
}
export default App;
