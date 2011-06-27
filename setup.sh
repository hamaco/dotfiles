#!/bin/sh

CURRENT=`pwd`

for file in .vim .vimrc .vimshrc .gvimrc .emacs .emacs.d .vimperator .vimperatorrc .zsh .zshrc .zshenv .gitconfig .gitignore .screenrc .gemrc
do
	rm -f ~/$file
	ln -s $CURRENT/dot$file ~/$file
done

for dir in bin share
do
	if [ ! -e ~/$dir ]; then
		ln -s ~/Dropbox/data/linux/$dir ~/$dir
	fi
done
