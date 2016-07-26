Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "{{_input_:name}}.vm"
  config.vm.network :private_network, ip: "10.10.10.10"

  config.vm.synced_folder ".", "/webroot", type: "nfs"
  config.ssh.insert_key = false

  config.vm.provider "virtualbox" do |v|
      v.memory = 1024
  end

  if defined?(Landrush)
    config.landrush.enabled = true
    config.landrush.tld = 'vm'
    config.landrush.guest_redirect_dns = false
  end

  config.vm.provision :shell, :inline => <<-EOT
    HOST_NAME="{{_input_:name}}.vm"
    MYSQL_PASSWORD="root"
    MYSQL_DBNAME="{{_input_:name}}_dev"

    aptitude update

    aptitude install -y git
  EOT
end
