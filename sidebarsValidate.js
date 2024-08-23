module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'index'
      ],
    },
    {
      type: 'category',
      label: 'Quick Starts',
      collapsed: false,
      items: [
        'quick-start/index',
        {
          type: 'category',
          label: 'New Installs',
          items: [
            'quick-start/vps-quickstart',
            'quick-start/mainnet-quickstart',
            'quick-start/integrationnet-quickstart',
            'quick-start/dor-quickstart',
          ],
        },
        {
          type: 'category',
          label: 'Procedural Quick Starts',
          items: [
            'quick-start/prerequisites',
            'quick-start/bring-online-quick-start',
            'quick-start/intnet-to-mainnet-quick-start',
            'quick-start/collateralize',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Node Concepts',
      collapsed: false,
      items: [
        'validator/get-started',
        'validator/build',
        'validator/node-creation',
        'validator/specs',
        'validator/providers',
        'validator/vps-explained',
        'validator/trust-labels',
        'validator/p12',
        {
          type: 'category',
          label: 'SSH Keys',
          items: [
            'validator/ssh-key-explained',
            'validator/creation-mac',
            'validator/creation-win',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'VPS Setup Guides',
      collapsed: false,
      items: [
        'setup-guides/index',
        {
          type: 'category',
          label: 'Digital Ocean',
          items: [
            'setup-guides/do/account',
            'setup-guides/do/create-droplet',
            'setup-guides/do/apply-ssh-droplet',
            'setup-guides/do/recommend-options',
            'setup-guides/do/launch-droplet',
            'setup-guides/do/sg-droplet',
          ],
        },
        {
          type: 'category',
          label: 'Amazon Web Services',
          items: [
            'setup-guides/aws/account',
            'setup-guides/aws/apply-ssh-ec2',
            'setup-guides/aws/create-ec2',
            'setup-guides/aws/create-ec2-2',
            'setup-guides/aws/eip',
            'setup-guides/aws/sg',
          ],
        },
        {
          type: 'category',
          label: 'Google Cloud Platform',
          items: [
            'setup-guides/gcp/account',
            'setup-guides/gcp/project',
            'setup-guides/gcp/create-instance-1',
            'setup-guides/gcp/create-instance-2',
            'setup-guides/gcp/sg',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'nodectl utility',
      collapsed: false,
      items: [
        'automated/getting-started/nodectl-getting-started',  
        {
          type: 'category',
          label: 'Installation',
          items: [
            'automated/install/nodectl-install-types',
            {
              type: 'category',
              label: 'Quick Install Guide',
              items: [
                'automated/quickInstall/nodectl-qi-install-prep',
                'automated/quickInstall/nodectl-qi-install-download',                
                'automated/quickInstall/nodectl-qi-install-start',
                'automated/quickInstall/nodectl-qi-install-welcome-banner',
                'automated/quickInstall/nodectl-qi-install-prepare',
                'automated/quickInstall/nodectl-qi-install-confirm',
                'automated/quickInstall/nodectl-qi-install-migrate',
                'automated/quickInstall/nodectl-qi-install-p12',
                'automated/quickInstall/nodectl-qi-install-i-sections',
                'automated/quickInstall/nodectl-qi-install-deps',
                'automated/quickInstall/nodectl-qi-install-bins',
                'automated/quickInstall/nodectl-qi-install-i-sections-2',
                'automated/quickInstall/nodectl-qi-install-complete',
              ],
            },
            {
              type: 'category',
              label: 'Installation Guide',
              items: [
                'automated/install/nodectl-install-require',
                'automated/install/nodectl-install-checklist',
                'automated/install/nodectl-install-access',
                'automated/install/nodectl-install-update',      
                'automated/install/nodectl-install-download',
                'automated/install/nodectl-install-install',
                'automated/install/nodectl-install-qi',
                'automated/install/nodectl-install-install-2', 
                'automated/install/nodectl-install-env',
                'automated/install/nodectl-install-ask-migrate',
                'automated/install/nodectl-install-automate-existing', 
                'automated/install/nodectl-install-update-2', 
                'automated/install/nodectl-install-noninteractive',
                'automated/install/nodectl-install-user',   
                'automated/install/nodectl-install-ssh',       
                'automated/install/nodectl-install-ssh-2',        
                'automated/install/nodectl-install-ssh-3',  
                'automated/install/nodectl-install-dyn', 
                'automated/install/nodectl-install-p12',
                'automated/install/nodectl-install-p12-2',
                'automated/install/nodectl-install-encryption',
                'automated/install/nodectl-install-services',
                'automated/install/nodectl-install-complete',
                'automated/install/nodectl-install-congrats',
              ],
            },
            {
              type: 'category',
              label: 'Installation with p12 Migration Guide',
              items: [
                'automated/migrate/nodectl-migrate',
                'automated/migrate/nodectl-migrate-howto',
                'automated/migrate/nodectl-migrate-install',
                'automated/migrate/nodectl-migrate-upload',
                'automated/migrate/nodectl-migrate-install-2',
                'automated/migrate/nodectl-migrate-import',
                'automated/migrate/nodectl-migrate-import-2',
                'automated/migrate/nodectl-migrate-complete',
              ],
            },
            {
              type: 'category',
              label: 'Uninstall Guide',
              items: [
                'automated/uninstall/index',
                'automated/uninstall/uninstall-start',
                'automated/uninstall/uninstall-confirm',
                'automated/uninstall/uninstall-begin',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          items: [
            'automated/upgrade/nodectl-upgrade-concepts',
            'automated/upgrade/nodectl-upgrade-qs',
            {
              type: 'category',
              label: 'Upgrade nodectl Guide',
              items: [
                'automated/upgrade_nodectl/index',
                'automated/upgrade_nodectl/begin',
                'automated/upgrade_nodectl/confirm',
                'automated/upgrade_nodectl/upgrade',

              ],
            },
            {
              type: 'category',
              label: 'Upgrade Node Guide',
              items: [
                'automated/upgrade/nodectl-upgrade-intro',
                'automated/upgrade/nodectl-upgrade-start',
                'automated/upgrade/nodectl-upgrade-migrate',
                'automated/upgrade/nodectl-upgrade-start-2',
                'automated/upgrade/nodectl-upgrade-confirm',
                'automated/upgrade/nodectl-upgrade-setup',
                'automated/upgrade/nodectl-upgrade-version',
                'automated/upgrade/nodectl-upgrade-offline',
                'automated/upgrade/nodectl-upgrade-internal',
                'automated/upgrade/nodectl-upgrade-directories',
                'automated/upgrade/nodectl-upgrade-packages',
                'automated/upgrade/nodectl-upgrade-seedlist', 
                'automated/upgrade/nodectl-upgrade-encryption',
                'automated/upgrade/nodectl-upgrade-services', 
                'automated/upgrade/nodectl-upgrade-online', 
                'automated/upgrade/nodectl-upgrade-rejoin', 
                'automated/upgrade/nodectl-upgrade-rejoin-2', 
                'automated/upgrade/nodectl-upgrade-complete', 
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Resources',
          items: [
            'automated/nodectl-commands',
            'automated/nodectl-encryption',
            // 'automated/nodectl-autorestart',
            'automated/nodectl-config-backup',
            'automated/nodectl-validate',
            'automated/nodectl-profile-change',
          ],
        },
        //'automated/nodectl-config',
      ],
    },   
    {
      type: 'category',
      label: 'Manual Node Install',
      collapsed: false,
      items: [
        'manual/getting-started-manual',
        'manual/non-root-user',
        'manual/dependencies',
        'manual/binaries',
        'manual/p12',
        'manual/service',
        'manual/join',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'resources/password',
        'resources/firewall-access',
        'resources/access-mac',
        'resources/access-win',
        'resources/p12-backup-mac',
        'resources/p12-backup-win',        
        'resources/ssh-config',
        'resources/p12-v1-to-v2-migrate',  
        'resources/nodectl-notes',    
      ],
    },
  ],

};
