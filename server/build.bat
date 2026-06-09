@echo off
chcp 65001
:: 编译为 Linux 64 位服务端程序
set CGO_ENABLED=0
set GOOS=linux
set GOARCH=amd64
echo 开始编译 Linux 服务端...
go build -ldflags "-s -w" -o app ./cmd/server/main.go
echo 编译完成！文件：app
pause