#!/bin/bash
echo "> MyXD/_next 디렉토리 파일 제거"
cd .
cd MyXD/_next
rm -rf *

echo "> MyXD.zip 파일 이동"
cd ../../zip
mv MyXD.zip scripts appspec.yml ../MyXD/_next/
cd ../MyXD/_next/

echo "> MyXD.zip 파일 압출 풀기"
unzip MyXD.zip
rm -rf MyXD.zip scripts appspec.yml
