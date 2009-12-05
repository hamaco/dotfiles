;-------------------------------------------------------------------------------
; 基本設定
;-------------------------------------------------------------------------------
(cd (expand-file-name "~/"))

;; load-path
(defvar default-load-path load-path "default load path")
(setq my-load-path
			(list
				(expand-file-name "~/.emacs.d/elisp")
				(expand-file-name "~/.emacs.d/elisp/3rd-party")
				(expand-file-name "~/.emacs.d/elisp/3rd-party/howm")
				(expand-file-name "~/.emacs.d/elisp/3rd-party/mmm-mode")
			))
(setq load-path (append my-load-path default-load-path))

;; me
(setq user-full-name "hamaco")
(setq user-mail-address "hamanaka.kazuhiro@gmail.com")


(load "configs")
(load "keyconfig")
(load "autoloads")
