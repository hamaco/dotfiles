;-------------------------------------------------------------------------------
; 
;-------------------------------------------------------------------------------

(if window-system
	(progn
		; ツールバーを表示しない
		(setq tool-bar-mode nil)
		; タイトルバーにファイル名表示
		(setq frame-title-format (format  "%%f - emacs" (system-name)))
))

; 起動時のメッセージを抑制
(setq inhibit-startup-message t)
; 画面反転抑制
(setq visible-bell nil)

; 行数と列数を表示
(line-number-mode t)
(column-number-mode t)

; 時間表示
(display-time)

; カーソルを点滅させない
(blink-cursor-mode nil)

; ホイールマウスを使用
(mouse-wheel-mode t)

; 最後に改行を付加
(setq require-final-newline t)

; タブ長の設定
(setq tab-width 2)
(setq default-tab-width 2)

; iswitchb
(iswitchb-mode 1)
(iswitchb-default-keybindings)

(add-hook 'iswitchb-define-mode-map-hook
					'iswitchb-my-keys)

(defun iswitchb-my-keys ()
	"Add my keybindings for iswitchb."
	(define-key iswitchb-mode-map [tab] 'iswitchb-next-match)
	(define-key iswitchb-mode-map " " 'iswitchb-next-match)
	(define-key iswitchb-mode-map "\C-f" 'iswitchb-next-match)
	(define-key iswitchb-mode-map "\C-b" 'iswitchb-prev-match)
)

; バックアップファイルを作成する
(setq make-backup-files t)
; バックアップファイルの保存場所
(setq backup-directory-alist
			'(("." . "~/.emacs.d/backups")))
(setq backup-by-copying t)

; GCの頻度を減らしてEmacsを速くする
(setq gc-cons-threshold 5242880)

; 検索で大文字・小文字を区別しない
(setq default-case-fold-search t)
(setq search-highlight nil)
(setq query-replace-highlight t)
(setq lazy-highlight-initial-delay 0)

; 1行ずつスクロールする
(setq scroll-conservatively 1)

; バッファ最後尾に移動時に空行を挿入しない
(setq next-line-add-newlines nil)

; *Messages*の最大行数
(setq message-log-max 200)

; .gzファイルを扱えるように
(auto-compression-mode t)

; version control
(setq vc-follow-symlinks t)
(setq vc-command-messages t)

; Narrowingの警告を抑止
; Regionを選択後 C-x n n か C-x n w
(put 'narrow-to-region 'disabled nil)
(put 'narrow-to-page'disabled nil)
