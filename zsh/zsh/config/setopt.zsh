setopt always_last_prompt   # カーソル位置は保持したままファイル名一覧を順次その場で表示
setopt auto_cd              # cdなしでもディレクトリ移動
setopt auto_list            # ^Iで補完可能な一覧を表示する(補完候補が複数ある時に、一覧表示)
setopt auto_menu            # 補完キー連打で順に補完候補を自動で補完
setopt auto_pushd           # cdのタイミングで自動的にpushd
#setopt no_auto_remove_slash # パスの最後のスラッシュを自動で削除しない
setopt auto_resume          # サスペンド中のプロセスと同じコマンド名を実行した場合はリジューム
setopt no_beep              # ビープ音の無効化
setopt brace_ccl            # {a-c}をa b cに展開できるようにする
setopt correct              # コマンド名の自動修正
setopt extended_glob        # 拡張ファイルグロブを有効化
setopt equals               # =COMMAND を COMMAND のパス名に展開
setopt no_flow_control      # C-s, C-qの無効化
setopt no_hup               # ログアウト時にバックグラウンドジョブをkillしない
setopt ignore_eof           # C-dでexitしない
setopt interactive_comments # コマンドにコメントを付けられるようにする
setopt no_list_beep         # 補完候補表示時にビープ音が鳴らないようにする
setopt list_packed          # 補完候補をつめて表示
setopt list_types           # 補完候補表示時にファイル種別を表示
setopt long_list_jobs       # jobsコマンドのデフォルトを jobs -l にする
setopt magic_equal_subst    # コマンドラインの引数で --PREFIX=/USR などの = 以降でも補完できる
setopt mark_dirs            # ファイル名の展開でディレクトリにマッチした場合 末尾に / を付加
setopt notify               # バックグラウンドジョブが終了したら(プロンプトの表示を待たずに)すぐに知らせる
setopt nonullglob           # 拡張ファイルグロブにマッチしない時にそのままコマンドを実行しない
setopt numeric_glob_sort    # ファイル名を数値としてソート
setopt print_eight_bit      # 補完候補リストの日本語を適正表示
setopt prompt_subst         # 色を使う
setopt pushd_ignore_dups    # 同じディレクトリをpushdしない
setopt short_loops          # FOR, REPEAT, SELECT, IF, FUNCTION などで簡略文法が使えるようになる
# setopt transient_rprompt    # コマンド実行時にRPROMPTを消す
