#!/bin/sh

cat /usr/share/natar-webserver/tmp/pids/unicorn.pid | xargs kill -QUIT
