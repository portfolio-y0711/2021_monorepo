#!/usr/bin/env bash
echo "┏━━━ 📚 API REPORT: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
yarn api-extractor run --local
echo "┗━━━ 📚 API REPORT: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
