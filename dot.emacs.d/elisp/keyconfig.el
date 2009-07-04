(global-set-key "\C-h" 'delete-backward-char) ;; Backspace
(global-set-key [C-backspace] 'backward-kill-word)

(global-set-key "\C-m" 'newline-and-indent) ;; 改行とインデント
(global-set-key "\C-x\C-i" 'indent-region) ;; 選択範囲をインデント

(global-set-key "\C-x\C-l" 'recenter) ;; 現在行を中央に
(global-set-key "\C-l" 'goto-line) ;; 指定した行へジャンプ

(global-set-key "\C-cc" 'comment-region) ;; 選択範囲をコメントアウト
(global-set-key "\C-cu" 'uncomment-region) ;; 選択範囲のコメントアウトを解除


;; ウィンドウ操作
(global-set-key [S-right] 'split-window-horizontally) ;; 左右に分割する
(global-set-key [S-left] 'split-window-horizontally) ;; 左右に分割する
(global-set-key [S-up] 'split-window-vertically) ;; 上下に分割する
(global-set-key [S-down] 'delete-other-windows) ;; 分割の解除

(global-set-key [right] 'windmove-right) ;; 右のウィンドウに移動
(global-set-key [left] 'windmove-left) ;; 左のウィンドウに移動
(global-set-key [up] 'windmove-up) ;; 上のウィンドウに移動
(global-set-key [down] 'windmove-down) ;; 下のウィンドウに移動
