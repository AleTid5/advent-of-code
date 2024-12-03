#!/bin/bash

rainbow() {
  local text="$1"
  local colors=(31 33 32 34 35 36) # Red, Yellow, Green, Blue, Magenta, Cyan
  local color_index=0

  # Loop through each letter in the string
  for (( i=0; i<${#text}; i++ )); do
    local char="${text:$i:1}"

    # Set color using escape codes
    echo -n -e "\033[${colors[$color_index]}m$char\033[0m"

    # Move to the next color in the rainbow
    ((color_index++))

    # If the index exceeds the array length, loop back to the first color
    if (( color_index >= ${#colors[@]} )); then
      color_index=0
    fi
  done
  echo  # Newline at the end
}

bold() {
  local text="$1"
  echo -e "\033[1m$text\033[0m"
}