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
      label: 'Running a Node (Part 1)',
      collapsed: false,
      items: [
        'validator/install',
        'validator/specs',
        'validator/providers',
        'validator/explain',
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
      label: 'Running a Node (Part 2)',
      collapsed: false,
      items: [
        'automated/nodectl',
      ],
    },   
    {
      type: 'category',
      label: 'Running a Node (Part 3)',
      collapsed: false,
      items: [
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
