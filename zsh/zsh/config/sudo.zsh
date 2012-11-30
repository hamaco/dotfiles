sudo() {
  local args
  case $2 in
    v|vi|vim|/Applications/MacVim.app/Contents/MacOS/Vim)
      args=()
      for arg in $@[3,-1]
      do
        if [ $arg[1] = '-' ]; then
          args[$(( 1+$#args ))]=$arg
        else
          args[$(( 1+$#args ))]="sudo:$arg"
        fi
      done
      command vim $args
      ;;
    *)
      command sudo $@
      ;;
  esac
}
