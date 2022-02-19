CURRENT_DIR := $(shell pwd)
INSTALL_DIR := $(HOME)
CONFIG_HOME := $(INSTALL_DIR)/.config

OS = ${shell uname}

all: cui mac

.PHONY: git tig tmux vim zsh peco ripgrep
cui: git tig tmux vim zsh peco ripgrep

.PHONY: slate homebrew
mac: slate homebrew

.PHONY: alacritty ideavim
windows: alacritty ideavim

dropbox:
	ln -fns $(HOME)/Dropbox/data/snippets $(INSTALL_DIR)/.snippets
	ln -fns $(HOME)/Dropbox/data/linux/share/phpmanual $(INSTALL_DIR)/share/phpmanual

git:
	ln -fns $(CURRENT_DIR)/git $(CONFIG_HOME)/git
	ln -fns $(CURRENT_DIR)/gh $(CONFIG_HOME)/gh

homebrew:
	@if ! builtin command -v brew > /dev/null; then \
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" \
	fi

peco:
	ln -fns $(CURRENT_DIR)/peco $(CONFIG_HOME)/peco

ripgrep:
	ln -fns $(CURRENT_DIR)/ripgrep/rgignore $(HOME)/.rgignore

slate:
	ln -fns $(CURRENT_DIR)/slate/slate.js $(INSTALL_DIR)/.slate.js

tig:
	ln -fns $(CURRENT_DIR)/tig/tigrc $(INSTALL_DIR)/.tigrc

tmux:
	@if [ ! -d $(INSTALL_DIR)/.tmux/plugins/tpm ]; then \
		git clone git://github.com/tmux-plugins/tpm $(INSTALL_DIR)/.tmux/plugins/tpm; \
	fi
	ln -fns $(CURRENT_DIR)/tmux $(CONFIG_HOME)/tmux

vim:
	@if [ ! -d $(INSTALL_DIR)/.bundle ]; then \
		git clone git://github.com/Shougo/neobundle.vim $(INSTALL_DIR)/.bundle/neobundle.vim; \
	fi
	ln -fns $(CURRENT_DIR)/vim/vim    $(INSTALL_DIR)/.vim
	ln -fns $(CURRENT_DIR)/vim/vimrc  $(INSTALL_DIR)/.vimrc
	ln -fns $(CURRENT_DIR)/vim/gvimrc $(INSTALL_DIR)/.gvimrc
	vim -N -u $(INSTALL_DIR)/.vim/neobundle.vimrc -U NONE -i NONE -V1 -e -s \
		-c "try | NeoBundleUpdate $* | finally | qall! | endtry"

zsh:
	ln -fns $(CURRENT_DIR)/zsh/zsh    $(INSTALL_DIR)/.zsh
	ln -fns $(CURRENT_DIR)/zsh/zshrc  $(INSTALL_DIR)/.zshrc
	ln -fns $(CURRENT_DIR)/zsh/zshenv $(INSTALL_DIR)/.zshenv

alacritty:
	@if [ "$(OS)" = "Darwin" ]; then \
		if [ ! -d $(CONFIG_HOME)/alacritty ]; then \
			mkdir $(CONFIG_HOME)/alacritty; \
		fi; \
		ln -fns $(CURRENT_DIR)/alacritty/alacritty.yml $(CONFIG_HOME)/alacritty/alacritty.yml; \
	else \
		cp $(CURRENT_DIR)/alacritty/alacritty.yml /mnt/c/Users/hamaco/AppData/Roaming/alacritty/alacritty.yml; \
	fi

ideavim:
	cp $(CURRENT_DIR)/ideavim/ideavimrc /mnt/c/Users/hamaco/.ideavimrc

karabiner:
	ln -fns $(CURRENT_DIR)/mac/karabiner $(CONFIG_HOME)/karabiner
