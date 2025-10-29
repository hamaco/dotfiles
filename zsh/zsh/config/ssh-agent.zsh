## SSHのagent forward
if exists keychain; then
    eval `keychain --eval id_ed25519 id_rsa old.id_rsa`
else
    echo -e "\e[31mkeychainコマンドインストールしてください。 (brew install keychain)\e[m"
fi

## Windows で 1Password for SSH を使う場合はこっちをコメントアウトする
# if [[ "$(uname -r)" == *microsoft* ]]; then
#     ## SSH for 1Password SSH
#     # via. https://stuartleeks.com/posts/wsl-ssh-key-forward-to-windows
#     export SSH_AUTH_SOCK=$HOME/.ssh/agent.sock
#     ALREADY_RUNNING=$(ps -auxww | grep -q "[n]piperelay.exe -ei -s //./pipe/openssh-ssh-agent"; echo $?)
#     if [[ $ALREADY_RUNNING != "0" ]]; then
#         if [[ -S $SSH_AUTH_SOCK ]]; then
#             echo "removing previous socket..."
#             rm $SSH_AUTH_SOCK
#         fi
#     
#         echo "Starting SSH-Agent relay..."
#     
#         (setsid socat UNIX-LISTEN:$SSH_AUTH_SOCK,fork EXEC:"/mnt/c/Users/hamaco/go/bin/npiperelay.exe -ei -s //./pipe/openssh-ssh-agent",nofork &) >/dev/null 2>&1
#     fi
# fi

