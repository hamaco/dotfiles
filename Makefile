CURRENT_DIR := $(shell pwd)
INSTALL_DIR := $(HOME)
XDG_CONFIG_HOME := $(HOME)/.config

OS = ${shell uname}

all: cui mac

.PHONY: git tig lazygit tmux vim zsh peco ripgrep homebrew aqua
cui: git tig lazygit tmux vim zsh peco ripgrep aqua

.PHONY: slate finicky karabiner ghostty
mac: slate finicky karabiner ghostty

.PHONY: alacritty ideavim nodoka
windows: alacritty ideavim nodoka

aqua:
	ln -fns $(HOME)/src/github.com/hamaco/my-aqua-config $(XDG_CONFIG_HOME)/aquaproj-aqua

dropbox:
	ln -fns $(HOME)/Dropbox/data/snippets $(INSTALL_DIR)/.snippets
	ln -fns $(HOME)/Dropbox/data/linux/share/phpmanual $(INSTALL_DIR)/share/phpmanual

git:
	ln -fns $(CURRENT_DIR)/git $(XDG_CONFIG_HOME)/git
	ln -fns $(CURRENT_DIR)/gh $(XDG_CONFIG_HOME)/gh
	ln -fns $(CURRENT_DIR)/gh/extensions/gh-triage $(XDG_DATA_HOME)/gh-triage

homebrew:
	@if ! builtin command -v brew > /dev/null; then \
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" \
	fi

peco:
	ln -fns $(CURRENT_DIR)/peco $(XDG_CONFIG_HOME)/peco

ripgrep:
	ln -fns $(CURRENT_DIR)/ripgrep $(XDG_CONFIG_HOME)/ripgrep
	ln -fns $(CURRENT_DIR)/ripgrep/rgignore $(HOME)/.rgignore

slate:
	ln -fns $(CURRENT_DIR)/slate/slate.js $(INSTALL_DIR)/.slate.js

finicky:
	ln -fns $(CURRENT_DIR)/mac/finicky.js $(INSTALL_DIR)/.finicky.js

tig:
	ln -fns $(CURRENT_DIR)/tig/tigrc $(INSTALL_DIR)/.tigrc

lazygit:
	ln -fns $(CURRENT_DIR)/lazygit $(XDG_CONFIG_HOME)/lazygit

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
		if [ ! -d /mnt/c/Users/hamaco/AppData/Roaming/alacritty ]; then \
			mkdir /mnt/c/Users/hamaco/AppData/Roaming/alacritty; \
		fi; \
		cp $(CURRENT_DIR)/alacritty/alacritty.toml /mnt/c/Users/hamaco/AppData/Roaming/alacritty/alacritty.toml; \
		cp $(CURRENT_DIR)/alacritty/alacritty.windows.toml /mnt/c/Users/hamaco/AppData/Roaming/alacritty/alacritty.windows.toml; \
	fi

ghostty:
	@if [ "$(OS)" = "Darwin" ]; then \
		if [ ! -d "${HOME}/Library/Application Support/com.mitchellh.ghostty" ]; then \
			mkdir "${HOME}/Library/Application Support/com.mitchellh.ghostty"; \
		fi; \
		ln -fns $(CURRENT_DIR)/ghostty/config "${HOME}/Library/Application Support/com.mitchellh.ghostty/config"; \
	else \
		echo 'TODO: macOS以外に入れていないので入れる時に頑張る'; \
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

go:
	go install github.com/mattn/sleepy@v0.0.3
