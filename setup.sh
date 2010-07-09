#!/bin/sh

CURRENT=`pwd`

for file in .vim .vimrc .vimshrc .gvimrc .emacs .emacs.d .vimperator .vimperatorrc .zsh .zshrc .zshenv .gitconfig .gitignore .screenrc
do
	rm -f ~/$file
	ln -s $CURRENT/dot$file ~/$file
done

ln -s ~/Dropbox/Linux/bin ~/bin
ln -s ~/Dropbox/Linux/share ~/share
