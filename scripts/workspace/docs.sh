#!/usr/bin/env bash
lerna run clean --ignore @monorepo/api
lerna run build --ignore @monorepo/api
yarn lerna run gen-docs --ignore @monorepo/api

GH_PAGES_CFG_EXISTS=$(test -f docs/_config.yml)
if [ $GH_PAGES_CFG_EXISTS ]
then
  echo "GitHub pages config file DETECTED"
  cp docs/_config.yml .
fi

yarn api-documenter markdown -i temp -o docs

if [ $GH_PAGES_CFG_EXISTS ]
then
  cp _config.yml docs/_config.yml
fi
