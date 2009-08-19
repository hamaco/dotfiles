;-------------------------------------------------------------------------------
; 外部ファイルのロード
;-------------------------------------------------------------------------------

;; magit
(require 'magit)

;; dsvn
(autoload 'svn-status "dsvn" "Run `svn status'." t)
(autoload 'svn-update "dsvn" "Run `svn update'." t)

(load "init-css")
(load "init-html")
(load "init-javascript")
(load "init-php")

;; mmm-mode
(require 'mmm-mode)

(setq mmm-global-mode 'maybe)
(setq mmm-submode-decoration-level 2) ; mmm-modeをカラフルにする
(set-face-background 'mmm-default-submode-face "#000") ; mmm-modeの背景色

(mmm-add-classes
	'((embedded-js
			:submode js2-mode
			:front "<script[^>]*>"
			:back "</script>")))
(mmm-add-mode-ext-class nil "\\.(tpl|html)" 'embedded-js)


(load "init-anything")
(load "init-autoinsert")
(load "init-auto-complete")
(load "init-auto-save-buffers")
(load "init-flymake")
(load "init-jaspace")
(load "init-ky-indent")

(load "init-woman")

(load "init-color")
(load "init-window")
(load "init-widen-window")


;; yasnippet http://code.google.com/p/yasnippet/
;(require 'yasnippet)
;(setq yas/root-directory (list (expand-file-name "~/.emacs.d/elisp/3rd-party/snippets")
;                               (expand-file-name "~/.emacs.d/yasnippet-snippets")))
;(yas/initialize)
;(yas/reload-all)
;
;
;;; hippie-expand
;(setq hippie-expand-try-functions-list
;			'(yas/hippie-try-expand
;				try-complete-file-name-partially
;				try-complete-file-name
;				try-expand-all-abbrevs
;				try-expand-list
;				try-expand-line
;				try-expand-dabbrev
;				try-expand-dabbrev-all-buffers
;				try-expand-dabbrev-from-kill
;				try-complete-lisp-symbol-partially
;				try-complete-lisp-symbol))
;(global-set-key "\C-o" 'hippie-expand)


;; 起動時に存在しないファイルをリストから削除。
(setq recentf-auto-cleanup 'never)
(recentf-mode t)

;; howm
(setq howm-menu-lang 'ja)
(setq howm-directory "~/.howm/")
(global-set-key "\C-c,," 'howm-menu)
(mapc
	(lambda (f)
		(autoload f
							"howm" "Hitori Otegaru Wiki Modoki" t))
	'(howm-menu howm-list-all howm-list-recent howm-list-grep
							howm-create howm-keyword-to-kill-ring))

;; リンクを TAB で辿る
(eval-after-load "howm-mode"
  '(progn
     (define-key howm-mode-map [tab] 'action-lock-goto-next-link)
     (define-key howm-mode-map [(meta tab)] 'action-lock-goto-previous-link)))
;; 「最近のメモ」一覧時にタイトル表示
(setq howm-list-recent-title t)
;; 全メモ一覧時にタイトル表示
(setq howm-list-all-title t)
;; メニューを 2 時間キャッシュ
(setq howm-menu-expiry-hours 2)

;; howm の時は auto-fill で
;(add-hook 'howm-mode-on-hook 'auto-fill-mode)

;; RET でファイルを開く際, 一覧バッファを消す
;; C-u RET なら残る
(setq howm-view-summary-persistent nil)

;; メニューの予定表の表示範囲
;; 10 日前から
(setq howm-menu-schedule-days-before 10)
;; 3 日後まで
(setq howm-menu-schedule-days 3)

;; 1 メモ 1 ファイル (デフォルト)
(setq howm-file-name-format "%Y/%m/%Y-%m-%d-%H%M%S.howm")


(load "unix")
(load "mac")
