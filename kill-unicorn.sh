#!/bin/sh

cat tmp/pids/unicorn.pid | xargs kill -QUIT
cat /usr/share/natar-webserver/tmp/pids/unicorn.pid  | xargs kill -QUIT
