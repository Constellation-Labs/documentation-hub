module.exports = {
  docs: [
    'intro',
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
        'testnet/install',
        'testnet/providers',
      ],
    },
  ],

};
