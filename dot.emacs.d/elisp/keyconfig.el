(global-set-key "\C-h" 'delete-backward-char) ;; Backspace
(global-set-key [C-backspace] 'backward-kill-word)

(global-set-key "\C-m" 'newline-and-indent) ;; 改行とインデント
(global-set-key "\C-x\C-i" 'indent-region) ;; 選択範囲をインデント

(global-set-key "\C-x\C-l" 'recenter) ;; 現在行を中央に
(global-set-key "\C-l" 'goto-line) ;; 指定した行へジャンプ


(defun forward-word+1 ()
  "forward-word で単語の先頭へ移動する"
  (interactive)
  (forward-word)
  (forward-char))

(global-set-key (kbd "M-f") 'forward-word+1)


;; ウィンドウ操作
(global-set-key [S-right] 'split-window-horizontally) ;; 左右に分割する
(global-set-key [S-left] 'split-window-horizontally) ;; 左右に分割する
(global-set-key [S-up] 'split-window-vertically) ;; 上下に分割する
(global-set-key [S-down] 'delete-other-windows) ;; 分割の解除

(global-set-key [right] 'windmove-right) ;; 右のウィンドウに移動
(global-set-key [left] 'windmove-left) ;; 左のウィンドウに移動
(global-set-key [up] 'windmove-up) ;; 上のウィンドウに移動
(global-set-key [down] 'windmove-down) ;; 下のウィンドウに移動
