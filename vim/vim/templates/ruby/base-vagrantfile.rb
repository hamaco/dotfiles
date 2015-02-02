Vagrant.configure(2) do |config|
  config.vm.box = "parallels/ubuntu-14.04"

  config.vm.hostname = "{{_cursor_}}.hamaco.local"
  config.vm.network :private_network, ip: "10.10.10.10"

  config.vm.synced_folder "./", "/webroot", type: "nfs"

  config.ssh.insert_key = false

  config.vm.provision :shell, :inline => <<-EOT
    aptitude update

    aptitude install -y git
  EOT
end
