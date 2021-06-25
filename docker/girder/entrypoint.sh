#!/bin/bash

pip3 install -e /hpccloud/server/hpccloud
pip3 install -e /hpccloud/server/ums
pip3 install -e /hpccloud/server/pvwproxy

cd /girder
girder serve --mode development -d mongodb://mongodb:27017/girder
