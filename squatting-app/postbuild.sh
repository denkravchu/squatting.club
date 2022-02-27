#!/bin/bash

cd build
echo '1/2 Find "build" files'
echo '2/2 Move relevant files to ../..'
find . | grep -Ev '^.$|^.\/user$|^.\/static\/.+' | xargs -I{} mv -v {} ../..