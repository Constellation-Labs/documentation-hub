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
        'validator/vps-explained',
        'validator/sshkey-explained',
        'validator/creationMac',
        'validator/creationWin',
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
            'setup-guides/do/launchDroplet',
            'setup-guides/do/sgDroplet',
          ],
        },
        {
          type: 'category',
          label: 'Amazon Web Services',
          items: [
            'setup-guides/aws/account',
            'setup-guides/aws/applySSHec2',
            'setup-guides/aws/createEC2',
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
      label: 'nodectl utility (Part 2)',
      collapsed: false,
      items: [
        'automated/nodectl',
        'automated/nodectl_install',
        'automated/nodectl_migrate_v1',
        'automated/nodectl_upgrade',
        'automated/nodectl_commands',
      ],
    },   
    {
      type: 'category',
      label: 'Running a Node (Part 3)',
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
      ],
    },
  ],

};
