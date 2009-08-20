function _add_path(){
	env_name="PATH"

	for i in $@; do
		if ! dirs=`eval echo $i` > /dev/null 2>&1; then
			continue
		fi

		for i in `eval echo $dirs`; do
			if eval echo \$$env_name | egrep '(\:|^)'$i'(\:|$)' >/dev/null 2>&1; then
				continue
			fi

			if [ -d $i ]; then
				eval $env_name=\$$env_name:$i
			fi
		done
	done
}

export PATH=""
	_add_path "/bin" "/sbin"
	_add_path "/usr/bin" "/usr/sbin"
	_add_path "/usr/local/bin" "/usr/local/sbin"
	_add_path "/usr/local/*/bin" "/usr/local/*/sbin"
	_add_path "/opt/bin" "/opt/sbin"
	_add_path "/opt/local/bin" "/opt/local/sbin"
	_add_path "/opt/local/*/bin" "/opt/local/*/sbin"
	_add_path "${HOME}/bin" "${HOME}/sbin"
	_add_path "/var/lib/gems/*/bin"

export EDITOR=vim
export SVN_EDITOR=vim

export PAGER="less"
export LESS="--tabs=4 --no-init --LONG-PROMPT --ignore-case"

#export SCREENDIR="${HOME}/.screen"

export SABEL_HOME="/sabel"

export TZ="Asia/Tokyo"
export LANG="ja_JP.UTF-8"
#export LANG="en_US.UTF-8"
