# File Securita
intro to project

## Some installments before we start
### Meat Mask
Download  Meta Mask from https://metamask.io/ 
<br>
#### Steps:
* Create Account
* Copy your account private key and paste it in "deploy.js".
* Add network sepolia by following steps:
* Go to this link "testhttps://chainlist.org/?chain=11155111&testnets=true&search=sepolia+" and click the checkbox to add Sepolia network.
* Add seploia and switch to Sepolia
### Pinata (Decentralized storage)
Download  Pinata from https://www.pinata.cloud/
<br>
#### Steps:
* Sign-in to pinata
* Click on "API Key" in the navbar
* Click on "New API key" You will get..
  ![WhatsApp Image 2023-07-03 at 14 55 31](https://github.com/komal5689/Blockchain-based-file-sharing-system/assets/109617644/16107357-3dbb-4c27-8591-d99e71b5fa4a)
* Enable all the option while you see in creating API key.
  ![WhatsApp Image 2023-07-03 at 14 52 11](https://github.com/komal5689/Blockchain-based-file-sharing-system/assets/109617644/d4e76775-dcf5-4371-b206-0db88695bab2)
* Copy and paste your Api-key and API secret Key in "FileUpload.js".
    ![image](https://github.com/komal5689/Blockchain-based-file-sharing-system/assets/109617644/933ae2aa-8445-4913-bd8e-3229ec49c32d)

### Node.js
Download  Node.js from https://nodejs.org/en
### Go to terminal
#### Run following Commands one-by-one:
```
npm --version
```
If npm not exists install it by
```
pip install npm
```
check if node.js is installed properly
```
node -v 
```
```
npm init -y 
npm i cross-env@5.2.0 --save
npm i request@2.88.0
npm i tar

npm run build
react -v
```
if react doesnt exist install it from
```
pip install react
npm install  create-react-app
```
```
cd client
npm install --save-dev hardhat@2.12.4
npm install --save-dev "hardhat@2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
npm install -g create-react-app
```
```
cd client
cd src
npx hardhat node


```
now everytime start project by runnning following commands
```
npx hardhat run deployments/deploy.js --network sepolia
```
after running this command you will get contract address copy and paste it in app.js where yout_contract_address written.

```
cd peer
npm start
```
### Further Steps
feel free to fork repository and contribute new features .
