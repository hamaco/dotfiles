#!/bin/sh
# vim:set ft=sh:

if which js >/dev/null 2>&1 ; then
	js -s -w -C $1 2>&1 \
	#	| grep ':$' \
	#	| grep -v 'test for equality' \
fi


