CURRENT_DIR := $(shell pwd)
INSTALL_DIR := $(HOME)

OS = ${shell uname}

all: cui gui mac

.PHONY: git mercurial tig tmux vim zsh percol common
cui: git mercurial tig tmux vim zsh percol common

.PHONY: vimperator chrome
gui: vimperator chrome

.PHONY: slate
mac: slate

chrome:
ifeq ($(OS), Linux)
	ln -fns $(CURRENT_DIR)/chrome/usercss/Custom.css $(INSTALL_DIR)/.config/chromium/Default/User\ StyleSheets/Custom.css
endif
ifeq ($(OS), Darwin)
	ln -fns $(CURRENT_DIR)/chrome/usercss/Custom.css $(INSTALL_DIR)/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css
endif

common:
	ln -fns $(CURRENT_DIR)/common/ackrc    $(INSTALL_DIR)/.ackrc
	ln -fns $(CURRENT_DIR)/common/agignore $(INSTALL_DIR)/.agignore
	ln -fns $(CURRENT_DIR)/common/editrc   $(INSTALL_DIR)/.editrc
	ln -fns $(CURRENT_DIR)/common/gemrc    $(INSTALL_DIR)/.gemrc
	ln -fns $(CURRENT_DIR)/common/inputrc  $(INSTALL_DIR)/.inputrc

git:
	ln -fns $(CURRENT_DIR)/git/gitconfig $(INSTALL_DIR)/.gitconfig
	ln -fns $(CURRENT_DIR)/git/gitignore $(INSTALL_DIR)/.gitignore

mercurial:
	ln -fns $(CURRENT_DIR)/mercurial/hgrc $(INSTALL_DIR)/.hgrc

percol:
	ln -fns $(CURRENT_DIR)/percol/percol.d $(INSTALL_DIR)/.percol.d

slate:
	ln -nfs $(CURRENT_DIR)/slate/slate.js $(INSTALL_DIR)/.slate.js

tig:
	ln -fns $(CURRENT_DIR)/tig/tigrc $(INSTALL_DIR)/.tigrc

tmux:
	ln -fns $(CURRENT_DIR)/tmux/tmux.conf $(INSTALL_DIR)/.tmux.conf

vim:
	@if [ ! -d $(INSTALL_DIR)/.bundle ]; then \
		git clone git://github.com/Shougo/neobundle.vim $(INSTALL_DIR)/.bundle/neobundle.vim; \
	fi
	ln -fns $(CURRENT_DIR)/vim/vim    $(INSTALL_DIR)/.vim
	ln -fns $(CURRENT_DIR)/vim/vimrc  $(INSTALL_DIR)/.vimrc
	ln -fns $(CURRENT_DIR)/vim/gvimrc $(INSTALL_DIR)/.gvimrc
	vim -u ~/.vim/neobundle.vimrc +"silent NeoBundleInstall" +q

vimperator: vimperator-repo
	ln -fns $(CURRENT_DIR)/vimperator/vimperator      $(INSTALL_DIR)/.vimperator
	ln -fns $(CURRENT_DIR)/vimperator/vimperatorrc    $(INSTALL_DIR)/.vimperatorrc
	ln -fns $(CURRENT_DIR)/vimperator/vimperatorrc.js $(INSTALL_DIR)/.vimperatorrc.js

vimperator-repo:
	@if [ ! -d $(INSTALL_DIR)/share/vimperator-plugins ]; then \
		git clone git://github.com/vimpr/vimperator-plugins.git $(INSTALL_DIR)/share/vimperator-plugins; \
	fi

zsh:
	ln -fns $(CURRENT_DIR)/zsh/zsh    $(INSTALL_DIR)/.zsh
	ln -fns $(CURRENT_DIR)/zsh/zshrc  $(INSTALL_DIR)/.zshrc
	ln -fns $(CURRENT_DIR)/zsh/zshenv $(INSTALL_DIR)/.zshenv
	@if [ ! -d $(INSTALL_DIR)/.zsh/plugins/antigen/antigen ]; then \
		git clone git://github.com/hamaco/antigen.git $(INSTALL_DIR)/.zsh/plugins/antigen/antigen; \
		cd $(INSTALL_DIR)/.zsh/plugins/antigen/antigen; \
		git co fix/load-script-loc; \
	fi
