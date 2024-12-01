#!/bin/bash
set -euo pipefail

echo "Missing from RANKED:"
jq '.[] | select(.rankedNetplayProfile?.continent == "SOUTH_AMERICA") | select(.rankedNetplayProfile?.wins != null or .rankedNetplayProfile?.losses != null) | .connectCode?.code' $1

echo ""
echo "From other region:"
jq '.[] | select(.rankedNetplayProfile?.continent != null and .rankedNetplayProfile?.continent != "SOUTH_AMERICA") | .connectCode?.code' $1
