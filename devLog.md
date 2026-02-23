# 末端點定位技術-後端建立步驟
## 環境架設 (windows)
### 安裝node.js
https://nodejs.org/zh-tw/download

### Mongodb 架設
1. 到 https://www.mongodb.com/try/download/community 下載
2. 安裝時注意這幾個選項：
✅ Install MongoDB as a Service
✅ Data Directory
3. 配置環境變數
4. 確認 MongoDB 是否啟動
    打開 PowerShell / CMD：
    ```
    mongod --version
    ```
    mongosh
    ```
    show dbs
    use test
    db.users.insertOne({ name: "John", age: 30 })
    db.users.find().pretty()
    ```
### 套件安裝
```
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```
## 文件建置
依下列結構建立後端專案資料夾與檔案 
```text
src/
├─ models/
│  ├─ User.js
│  ├─ Operation.js
│  └─ Detection.js
├─ app.js
└─ db.js
```
建置範例：[Windows 指令](#windowsSetup)｜[Linux 指令](#linuxSetup)

## 環境架設 (linux)
### mongodb建置
1. 更新apt
```
sudo apt update && sudo apt upgrade -y
```
2. 安裝必要工具
```
sudo apt install gnupg curl -y
```
3. 匯入金鑰
```
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
4. 加入官方套件
```
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
不行的話 jammy 改 focal
5. 更新 apt
6. 安裝mongodb
```
sudo apt install -y mongodb-org
```
7. 建立資料夾並啟動(背景執行)
```
sudo mkdir -p /data/db
sudo chown -R $USER:$USER /data/db
mongod --dbpath /data/db --fork --logpath ~/mongo.log 
```
8. 進入mongosh測試連線
```
mongosh
```
9. 在mongosh關閉連線 (關閉後須重新啟動)
```
db.shutdownServer()
```
### 啟動MQTT
1. 安裝mosquitto-clients
```
sudo apt update
sudo apt install mosquitto mosquitto-clients
```
2. 啟動服務
```
sudo systemctl start mosquitto
sudo systemctl enable mosquitto
```
3. 測試
訂閱端：
```
mosquitto_sub -h localhost -t test
```
發送端：
```
mosquitto_pub -h localhost -t test -m "Hello MQTT"
```
### 啟動nodejs
1. 安裝nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
重新載入shell
```
source ~/.bashrc
```
測試nvm
```
nvm -v
```
2. 安裝node.js
```
nvm install --lts
```
測試
```
node -v
npm -v
```
啟動伺服器監聽(需先建置好資料庫)
```
npm run dev
```

## 附註1 - 實作範例
### Windows
<a id="windowsSetup"></a>
```powershell
mkdir src\models
New-Item src\app.js
New-Item src\db.js
New-Item src\models\User.js
New-Item src\models\Operation.js
New-Item src\models\Detection.js
```
### Linux
<a id="linuxSetup"></a>
```bash
mkdir -p src/models
touch src/app.js src/db.js \
      src/models/User.js \
      src/models/Operation.js \
      src/models/Detection.js
```
