#!/bin/bash
echo "> MyXD 하위 기존 디렉터리 제거"
cd ~
cd MyXD
find . -name _next -type d -exec rm -rf {} \;
find . -name components -type d -exec rm -rf {} \;
find . -name pages -type d -exec rm -rf {} \;
find . -name public -type d -exec rm -rf {} \;

echo "> MyXD.zip 파일 이동 : zip → MyXD "
cd ../zip
mv * ../MyXD
cd ../MyXD

echo "> MyXD.zip 파일 압출 풀기"
unzip MyXD.zip

echo "> MyXD.zip 파일 제거"
rm -rf MyXD.zip


