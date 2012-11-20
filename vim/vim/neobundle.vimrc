set nocompatible
filetype off
filetype indent plugin off

if has('vim_starting')
	" set runtimepath+=$HOME/.bundle/vimproc
	if filereadable(expand('~/.bundle/neobundle.vim/autoload/neobundle.vim'))
		set runtimepath+=$HOME/.bundle/neobundle.vim
	else
		set runtimepath+=$HOME/.vim/bundle/neobundle.vim
		"set runtimepath+=$HOME/_neobundle
	endif

	call neobundle#rc(expand('~/.bundle'))
endif

NeoBundle 'git://github.com/hamaco/vim-sunday.git'

"NeoBundle 'git://github.com/vim-scripts/JavaScript-syntax.git'
"NeoBundle 'git://github.com/pangloss/vim-javascript.git'

NeoBundle 'git://github.com/vim-jp/vimdoc-ja.git'

NeoBundle 'git://github.com/vim-scripts/capslock.vim.git'
NeoBundle 'git://github.com/vim-scripts/errormarker.vim.git'
NeoBundle 'git://github.com/vim-scripts/indenthtml.vim.git'
NeoBundle 'git://github.com/vim-scripts/sudo.vim.git'

NeoBundle 'git://github.com/basyura/bitly.vim.git'
NeoBundle 'git://github.com/basyura/twibill.vim.git'
NeoBundle 'git://github.com/basyura/TweetVim.git'

NeoBundle 'git://github.com/h1mesuke/textobj-wiw.git'
NeoBundle 'git://github.com/h1mesuke/unite-outline.git'
NeoBundle 'git://github.com/h1mesuke/vim-alignta.git'

NeoBundle 'git://github.com/kana/vim-gf-diff.git'
NeoBundle 'git://github.com/kana/vim-gf-user.git'
NeoBundle 'git://github.com/kana/vim-operator-user.git'
NeoBundle 'git://github.com/kana/vim-smartinput.git'
NeoBundle 'git://github.com/kana/vim-submode.git'
NeoBundle 'git://github.com/kana/vim-surround.git'
NeoBundle 'git://github.com/kana/vim-textobj-line.git'
NeoBundle 'git://github.com/kana/vim-textobj-user.git'

NeoBundle 'git://github.com/LeafCage/foldCC.git'

NeoBundle 'git://github.com/mattn/favstar-vim.git'
NeoBundle 'git://github.com/mattn/gist-vim.git'
NeoBundle 'git://github.com/mattn/googletranslate-vim.git'
NeoBundle 'git://github.com/mattn/learn-vimscript.git'
NeoBundle 'git://github.com/mattn/sonictemplate-vim.git'
NeoBundle 'git://github.com/mattn/unite-gist.git'
NeoBundle 'git://github.com/mattn/vim-textobj-cell.git'
NeoBundle 'git://github.com/mattn/webapi-vim.git'
NeoBundle 'git://github.com/mattn/zencoding-vim.git'

" NeoBundle 'git://github.com/osyo-manga/quickrun-hook-u-nya-.git'
NeoBundle 'git://github.com/hamaco/quickrun-hook-u-nya-.git'
NeoBundle 'git://github.com/osyo-manga/shabadou.vim.git'
NeoBundle 'git://github.com/osyo-manga/unite-quickfix.git'
NeoBundle 'git://github.com/osyo-manga/vim-reanimate.git'

NeoBundle 'git://github.com/Shougo/echodoc.git'
NeoBundle 'git://github.com/Shougo/neobundle.vim.git'
NeoBundle 'git://github.com/Shougo/neocomplcache.git'
NeoBundle 'git://github.com/Shougo/neosnippet.git'
NeoBundle 'git://github.com/Shougo/unite.vim.git'
NeoBundle 'git://github.com/Shougo/vim-vcs.git'
NeoBundle 'git://github.com/Shougo/vimfiler.git'
NeoBundle 'git://github.com/Shougo/vimproc.git', { 'build': {
\     'mac' : 'make -f make_mac.mak',
\     'unix': 'make -f make_unix.mak',
\   },
\ }
NeoBundle 'git://github.com/Shougo/vimshell.git'

NeoBundle 'git://github.com/soh335/unite-hatenabookmark.git'

NeoBundle 'git://github.com/t9md/vim-textmanip.git'

NeoBundle 'git://github.com/thinca/vim-ambicmd.git'
"NeoBundle 'git://github.com/thinca/vim-auto_source.git'
NeoBundle 'git://github.com/thinca/vim-ft-vim_fold.git'
NeoBundle 'git://github.com/thinca/vim-openbuf.git'
NeoBundle 'git://github.com/thinca/vim-poslist.git'
NeoBundle 'git://github.com/thinca/vim-prettyprint.git'
NeoBundle 'git://github.com/thinca/vim-qfreplace.git'
NeoBundle 'git://github.com/thinca/vim-quickrun.git'
NeoBundle 'git://github.com/thinca/vim-ref.git'
NeoBundle 'git://github.com/thinca/vim-scouter.git'
NeoBundle 'git://github.com/thinca/vim-showtime.git'
NeoBundle 'git://github.com/thinca/vim-unite-history.git'
NeoBundle 'git://github.com/thinca/vim-visualstar.git'

NeoBundle 'git://github.com/tpope/vim-abolish.git'
NeoBundle 'git://github.com/tpope/vim-fugitive.git'

NeoBundle 'git://github.com/tsukkee/lingr-vim.git'
NeoBundle 'git://github.com/tsukkee/unite-help.git'

NeoBundle 'git://github.com/tyru/autochmodx.vim.git'
NeoBundle 'git://github.com/tyru/caw.vim.git'
NeoBundle 'git://github.com/tyru/current-func-info.vim.git'
NeoBundle 'git://github.com/tyru/emap.vim.git'
NeoBundle 'git://github.com/tyru/eskk.vim.git'
NeoBundle 'git://github.com/tyru/open-browser.vim.git'
NeoBundle 'git://github.com/tyru/operator-camelize.vim.git'
NeoBundle 'git://github.com/tyru/restart.vim.git'
NeoBundle 'git://github.com/tyru/savemap.vim.git'
NeoBundle 'git://github.com/tyru/vice.vim.git'
NeoBundle 'git://github.com/tyru/vim-altercmd.git'
NeoBundle 'git://github.com/tyru/visualctrlg.vim.git'

NeoBundle 'git://github.com/ujihisa/neco-look.git'
NeoBundle 'git://github.com/ujihisa/shadow.vim.git'
NeoBundle 'git://github.com/ujihisa/tabpagecolorscheme.git'
NeoBundle 'git://github.com/ujihisa/unite-colorscheme.git'
NeoBundle 'git://github.com/ujihisa/unite-launch.git'
NeoBundle 'git://github.com/ujihisa/vimshell-ssh.git'

NeoBundle 'git://github.com/akiyan/vim-textobj-php.git'
NeoBundle 'git://github.com/choplin/unite-vim_hacks.git'
"NeoBundle 'git://github.com/chrisbra/SudoEdit.vim.git'
NeoBundle 'git://github.com/glidenote/octoeditor.vim.git'
NeoBundle 'git://github.com/hallison/vim-markdown.git'
NeoBundle 'git://github.com/jelera/vim-javascript-syntax.git'
NeoBundle 'git://github.com/jsx/jsx.vim.git'
NeoBundle 'git://github.com/karakaram/vim-quickrun-phpunit.git'
NeoBundle 'git://github.com/nathanaelkane/vim-indent-guides.git'
"NeoBundle 'git://github.com/scrooloose/syntastic.git'
NeoBundle 'git://github.com/sjl/gundo.vim.git'
NeoBundle 'git://github.com/superbrothers/vim-vimperator.git'
NeoBundle 'git://github.com/tangledhelix/vim-octopress.git'
NeoBundle 'git://github.com/teramako/jscomplete-vim.git'
NeoBundle 'git://github.com/yuratomo/w3m.vim.git'
NeoBundle 'git://github.com/vexxor/phpdoc.vim.git'


" colorscheme
NeoBundle 'git://github.com/altercation/vim-colors-solarized.git'
NeoBundle 'git://github.com/chriskempson/vim-tomorrow-theme.git'
NeoBundle 'git://github.com/dterei/VimCobaltColourScheme.git'
NeoBundle 'git://github.com/nanotech/jellybeans.vim.git'
NeoBundle 'git://github.com/tomasr/molokai.git'
NeoBundle 'git://github.com/noahfrederick/Hemisu.git'
NeoBundle 'git://gist.github.com/187578.git', {'directory' : 'h2u_white'}


" neta
NeoBundleLazy 'git://github.com/mattn/unite-nyancat.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-homo.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-jojo.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-nyancat_anim.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-rofi.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-shimapan.git'
NeoBundleLazy 'git://github.com/osyo-manga/unite-u-nya-.git'

command! -nargs=0 NeoBundleSourceNetaPlugin
\ :NeoBundleSource unite-nyancat unite-homo unite-jojo unite-nyancat_anim unite-rofi unite-shimapan unite-u-nya-

filetype indent plugin on
