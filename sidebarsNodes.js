module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index'
      ],
    },
    {
      type: 'category',
      label: 'Validator Nodes',
      collapsed: false,
      items: [
        'validator/install',
        'validator/providers',
        {
          type: 'category',
          label: 'SSH Keys',
          items: [
            'validator/sshkeys/explain',
            'validator/sshkeys/creationMac',
            'validator/sshkeys/creationWin',
          ],
        },
        {
          type: 'category',
          label: 'Digital Ocean (DO)',
          items: [
            'validator/do/account',
            'validator/do/createDroplet',
            'validator/do/applySSHDroplet',
            'validator/do/launchDroplet',
            'validator/do/sgDroplet',
          ],
        },
        {
          type: 'category',
          label: 'Amazon Web Services (AWS)',
          items: [
            'validator/aws/account',
            'validator/aws/applySSHec2',
            'validator/aws/createEC2',
            'validator/aws/eip',
            'validator/aws/sg',
          ],
        },
        {
          type: 'category',
          label: 'Google Cloud Platform (GCP)',
          items: [
            'validator/gcp/account',
            'validator/gcp/project',
            'validator/gcp/createInstancePart1',
            'validator/gcp/createInstancePart2',
            'validator/gcp/sg',
          ],
        },
        'validator/password',
        'validator/accessMac',
        'validator/accessWin',
        {
          type: 'category',
          label: 'nodectl',
          items: [
            'validator/nodectl/install',
          ],
        },
        {
          type: 'category',
          label: 'manual Node build',
          items: [
            'validator/manualInstall/nonRootUser',
            'validator/manualInstall/dependencies',
            'validator/manualInstall/binaries',
            'validator/manualInstall/p12',
            'validator/manualInstall/service',
            'validator/manualInstall/join',
          ],
        },
      ],
    },
  ],

};
