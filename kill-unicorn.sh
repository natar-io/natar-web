#!/bin/sh

cat tmp/pids/unicorn.pid | xargs kill -QUIT
