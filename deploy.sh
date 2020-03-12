#!/bin/bash
echo "> MyXD 디렉토리 기존 파일 제거"
cd ~
cd MyXD
rm -rf *

echo "> MyXD.zip 파일 이동 : zip → MyXD "
cd ../zip
mv * ../MyXD
cd ../MyXD

echo "> MyXD.zip 파일 압출 풀기"
unzip MyXD.zip

echo "> MyXD.zip 파일 제거"
rm -rf MyXD.zip

echo "> npm rebuild"

