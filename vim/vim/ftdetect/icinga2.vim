" Modify
au BufNewFile,BufRead /*etc/icinga2/*.conf,/*usr/share/icinga2/include/{itl,plugins,*.conf} set filetype=icinga2

au BufNewFile,BufRead /*/icinga/*.conf set filetype=icinga2
