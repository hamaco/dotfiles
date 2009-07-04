;; http://gist.github.com/133159
(require 'ky-indent)
(ky-indent-init)

;(setq ky-indent-enable-mode-hooks '())
(setq ky-indent-setting
      (append '((php-mode . c-basic-offset))
              ky-indent-setting))
