CURRENT_DIR := $(shell pwd)
INSTALL_DIR := $(HOME)
XDG_CONFIG_HOME := $(HOME)/.config

OS = ${shell uname}

all: cui mac

.PHONY: git tig tmux vim zsh peco ripgrep
cui: git tig tmux vim zsh peco ripgrep

.PHONY: slate homebrew karabiner
mac: karabiner

.PHONY: alacritty ideavim nodoka
windows: alacritty ideavim nodoka

dropbox:
	ln -fns $(HOME)/Dropbox/data/snippets $(INSTALL_DIR)/.snippets
	ln -fns $(HOME)/Dropbox/data/linux/share/phpmanual $(INSTALL_DIR)/share/phpmanual

git:
	ln -fns $(CURRENT_DIR)/git $(XDG_CONFIG_HOME)/git
	ln -fns $(CURRENT_DIR)/gh $(XDG_CONFIG_HOME)/gh

homebrew:
	@if ! builtin command -v brew > /dev/null; then \
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" \
	fi

peco:
	ln -fns $(CURRENT_DIR)/peco $(XDG_CONFIG_HOME)/peco

ripgrep:
	ln -fns $(CURRENT_DIR)/ripgrep/rgignore $(HOME)/.rgignore

slate:
	ln -fns $(CURRENT_DIR)/slate/slate.js $(INSTALL_DIR)/.slate.js

tig:
	ln -fns $(CURRENT_DIR)/tig/tigrc $(INSTALL_DIR)/.tigrc

tmux:
	@if [ ! -d $(INSTALL_DIR)/.tmux/plugins/tpm ]; then \
		git clone https://github.com/tmux-plugins/tpm.git $(INSTALL_DIR)/.tmux/plugins/tpm; \
	fi
	ln -fns $(CURRENT_DIR)/tmux $(XDG_CONFIG_HOME)/tmux

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
	ln -fns $(CURRENT_DIR)/zsh/zshenv  $(INSTALL_DIR)/.zshenv
	ln -fns $(CURRENT_DIR)/zsh/zsh     $(XDG_CONFIG_HOME)/zsh
	ln -fns $(CURRENT_DIR)/zsh/sheldon $(XDG_CONFIG_HOME)/sheldon
	ln -fns $(CURRENT_DIR)/zsh/zeno    $(XDG_CONFIG_HOME)/zeno

alacritty:
	@if [ "$(OS)" = "Darwin" ]; then \
		if [ ! -d $(XDG_CONFIG_HOME)/alacritty ]; then \
			mkdir $(XDG_CONFIG_HOME)/alacritty; \
		fi; \
		ln -fns $(CURRENT_DIR)/alacritty/alacritty.yml $(XDG_CONFIG_HOME)/alacritty/alacritty.yml; \
		ln -fns $(CURRENT_DIR)/alacritty/alacritty.darwin.yml $(XDG_CONFIG_HOME)/alacritty/alacritty.darwin.yml; \
	else \
		cp $(CURRENT_DIR)/alacritty/alacritty.yml /mnt/c/Users/hamaco/AppData/Roaming/alacritty/alacritty.yml; \
		cp $(CURRENT_DIR)/alacritty/alacritty.windows.yml /mnt/c/Users/hamaco/AppData/Roaming/alacritty/alacritty.windows.yml; \
	fi

ideavim:
	@if [ "$(OS)" = "Darwin" ]; then \
		ln -fns $(CURRENT_DIR)/ideavim/ideavimrc $(INSTALL_DIR)/.ideavimrc; \
	else \
		cp $(CURRENT_DIR)/ideavim/ideavimrc /mnt/c/Users/hamaco/.ideavimrc; \
	fi

nodoka:
	cp $(CURRENT_DIR)/nodoka/dot.nodoka /mnt/c/Users/hamaco/dot.nodoka

karabiner:
	if [ -d $(XDG_CONFIG_HOME)/karabiner/assets/complex_modifications ]; then \
		rmdir $(XDG_CONFIG_HOME)/karabiner/assets/complex_modifications; \
	fi; \
	ln -fns $(CURRENT_DIR)/karabiner/complex_modifications $(XDG_CONFIG_HOME)/karabiner/assets/complex_modifications
