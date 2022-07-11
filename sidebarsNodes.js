module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index', 
      ],
    },
    {
      type: 'category',
      label: 'Mainnet Nodes',
      collapsed: false,
      items: [
        'mainnet/intro',
      ],
    },
    {
      type: 'category',
      label: 'Testnet Nodes',
      collapsed: false,
      items: [
        'testnet/intro',
      ],
    },
    {
      type: 'category',
      label: 'Validator Nodes',
      collapsed: true,
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
      ],
    },
  ],

};
