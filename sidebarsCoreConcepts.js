module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index',
        'concepts'
      ],
    },
    {
      type: 'category',
      label: 'Network',
      collapsed: false,
      items: [
        'network/index',
        'network/architecture',
        'network/state-channels',
        'network/l0-tokens',
        'network/validator-nodes'
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        'tools/wallets',
        'tools/dag-explorer'
      ]
    }
  ],
};
