#!/bin/bash
echo "> MyXD/_next 디렉토리 파일 제거"
cd ~
cd MyXD
rm -rf *

echo "> MyXD.zip 파일 이동"
cd ../zip
mv * ../MyXD
cd ../MyXD

echo "> MyXD.zip 파일 압출 풀기"
unzip MyXD.zip
rm -rf MyXD.zip
