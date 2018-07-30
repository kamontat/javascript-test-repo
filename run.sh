#!/usr/bin/env bash
# shellcheck disable=SC1000

# generate by 3.0.0
# link (https://github.com/Template-generator/script-genrating/tree/3.0.0)

# set -x #DEBUG - Display commands and their arguments as they are executed.
# set -v #VERBOSE - Display shell input lines as they are read.
# set -n #EVALUATE - Check syntax of the script but don't execute.

! command -v "node" >/dev/null && echo "node is required" && exit 1

node "$1/index.js"
