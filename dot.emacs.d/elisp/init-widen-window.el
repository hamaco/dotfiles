;; widen-window
(require 'widen-window)
(global-widen-window-mode t)

(setq ww-advised-functions
			(append ww-advised-functions
							'(windmove-up
								windmove-down
								windmove-left
								windmove-right)))
