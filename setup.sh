#!/bin/sh

CURRENT=`pwd`

for file in .vim .vimrc .gvimrc .emacs .emacs.d .vimperator .vimperatorrc .zsh .zshrc .zshenv .gitconfig .screenrc
do
	rm -f ~/$file
	ln -s $CURRENT/dot$file ~/$file
done
