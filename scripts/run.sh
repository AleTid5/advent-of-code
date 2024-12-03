#!/bin/bash
source ./scripts/echo-enhancer.sh

# How to run:
# npm run start day exercise
readonly DAY="day-$1"
readonly CODE="code-$2.js"
readonly PATH="./src/$DAY/$CODE"

if [ -f "$PATH" ]; then
    rainbow "Running the script in:"
    bold "$PATH"
    /opt/homebrew/bin/node "$PATH"
else
    echo "Error: File '$PATH' not found."
    exit 1
fi
