remote_control_box
==================

使用 mobile 遙控網頁所顯示的方塊. html5 + pre3d + websocket + node js

youtube 影片

[![youtube 影片](http://img.youtube.com/vi/-qqQIr7wij4/0.jpg)](http://www.youtube.com/watch?v=-qqQIr7wij4)


A、說明

    主要分為三個部分
    1、使用 nodejs 當 broadcast server.
    2、iPhone 使用 websocket 傳送 速度計資料給 broadcast server.
    3、網頁HTML 使用 websocket 接收 broadcast server 所傳來的 速度計資料 顯示方塊運動方向.
  
B、設定

    1、下載 https://github.com/wonliao/nodejs_echo_server 並依說明安裝及啟動.
    2、修改 remote_control_box/ios/www/js/index.js 這個檔案，找到 var wsUri = "ws://192.168.1.143:8000"; 改成你的 IP 及 PORT.
    3、修改 web/index.html 這個檔案，找到 var wsUri = "ws://192.168.1.143:8000/"; 改成你的 IP 及 PORT.
  
C、啟動

    1、 nodejs 的 broadcast server 請參照 https://github.com/wonliao/nodejs_echo_server 的說明
    2、 iOS 請用 xcode 編譯並執行
    3、 使用網頁開啟 web/index.html
