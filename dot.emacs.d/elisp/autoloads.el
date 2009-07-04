;-------------------------------------------------------------------------------
; 外部ファイルのロード
;-------------------------------------------------------------------------------

(require 'magit)

(load "init-css")
(load "init-javascript")
(load "init-php")

(load "init-autoinsert")
(load "init-auto-complete")
(load "init-auto-save-buffers")
(load "init-jaspace")
(load "init-ky-indent")
(load "init-woman")

(load "init-color")
(load "init-window")

(require 'widen-window)
(global-widen-window-mode t)

(setq ww-advised-functions
			(append ww-advised-functions
							'(windmove-up
								windmove-down
								windmove-left
								windmove-right)))

(load "unix")
(load "mac")
