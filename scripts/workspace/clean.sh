#!/usr/bin/env bash
echo "┏━━━ 🧹 CLEAN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn lerna run clean --concurrency 4
echo "┗━━━ 🧹 CLEAN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
