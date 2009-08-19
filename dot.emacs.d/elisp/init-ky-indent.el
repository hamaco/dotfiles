;; http://gist.github.com/133159
(require 'ky-indent)

(setq ky-indent-enable-mode-hooks
  (append '(php-mode-hook)
    ky-indent-enable-mode-hooks))

(setq ky-indent-setting
  (append '((php-mode . c-basic-offset))
    ky-indent-setting))

(ky-indent-init)
