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
      label: 'Node Concepts',
      collapsed: false,
      items: [
        'validator/get_started',
        'validator/specs',
        'validator/providers',
        'validator/vpsExplained',
        'validator/trustLabels',
        {
          type: 'category',
          label: 'SSH Keys',
          items: [
            'validator/sshkeyExplained',
            'validator/creationMac',
            'validator/creationWin',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'VPS Setup Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Digital Ocean',
          items: [
            'setup-guides/do/account',
            'setup-guides/do/createDroplet',
            'setup-guides/do/applySSHDroplet',
            'setup-guides/do/recommendOptions',
            'setup-guides/do/launchDroplet',
            'setup-guides/do/sgDroplet',
          ],
        },
        {
          type: 'category',
          label: 'Amazon Web Services',
          items: [
            'setup-guides/aws/account',
            'setup-guides/aws/createEC2',
            'setup-guides/aws/applySSHec2',
            'setup-guides/aws/createEC2-2',
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
            'setup-guides/gcp/createInstancePart1',
            'setup-guides/gcp/createInstancePart2',
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
        'automated/nodectl',  
        {
          type: 'category',
          label: 'Installation',
          items: [
            'automated/nodectlInstall',
            'automated/nodectlInstallMigrate',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          items: [
            'automated/nodectlUpgradePath',
            'automated/nodectlUpgrade',
            'automated/nodectlMigrateV1',
          ],
        },
        {
          type: 'category',
          label: 'Resources',
          items: [
            'automated/nodectlCommands',
            'automated/nodectlAutorestart',
            'automated/nodectlProfileChange',
          ],
        },
        'automated/nodectlConfig',
      

      ],
    },   
    {
      type: 'category',
      label: 'Manual Node Install',
      collapsed: false,
      items: [
        'manual/getting-started-manual',
        'manual/nonRootUser',
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
        'resources/accessMac',
        'resources/accessWin',
        'resources/p12backup-mac',
        'resources/p12backup-win',        
        'resources/sshconfig',
        'resources/p12v1v2-migrate',      
      ],
    },
  ],

};
