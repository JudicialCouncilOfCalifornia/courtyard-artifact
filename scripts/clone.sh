#!/bin/bash

if [[ ! -d /app/courtyard ]] ; then
  cd /app
  git clone git@github.com:Exygy/courtyard.git
fi

cd /app/courtyard
git fetch --all 
git checkout $1
