## SSHのagent forward
# if exists keychain; then
#     eval `keychain --eval id_ed25519 id_rsa old.id_rsa`
# else
#     echo -e "\e[31mkeychainコマンドインストールしてください。 (brew install keychain)\e[m"
# fi

# 1Password SSH Agent
export SSH_AUTH_SOCK="$HOME/.ssh/agent.sock"
if [[ -S ~/Library/Group\ Containers/2BUA8C4S2C.com.1password/t/agent.sock ]]; then
    # for macOS
    ln -sf ~/Library/Group\ Containers/2BUA8C4S2C.com.1password/t/agent.sock ~/.ssh/agent.sock
elif exists socat && exists npiperelay.exe; then
    # for Windows WSL
    if ! ss -a | grep -q "$SSH_AUTH_SOCK"; then
      rm -f "$SSH_AUTH_SOCK"
      (setsid socat UNIX-LISTEN:"$SSH_AUTH_SOCK",fork EXEC:"npiperelay.exe -ei -s //./pipe/openssh-ssh-agent",nofork &) >/dev/null 2>&1
    fi
else
    echo -e "\e[31m1Password for SSH が有効化されていません\e[m"
fi
