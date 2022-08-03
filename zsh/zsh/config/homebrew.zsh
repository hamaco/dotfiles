if [ -f $(brew --prefix)/etc/brew-wrap ]; then
    . $(brew --prefix)/etc/brew-wrap

    _post_brewfile_update () {
        brew file push
    }
fi
