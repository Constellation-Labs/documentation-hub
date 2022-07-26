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
      label: 'Existing Barriers to Adoption',
      collapsed: false,
      items: [
        'web3/barriers/approach',
        'web3/barriers/interoperability',
        'web3/barriers/programmability',
        'web3/barriers/scalability',
        'web3/barriers/incentivestructures',
        'web3/barriers/economicmodels'
      ],
    },
    {
      type: 'category',
      label: 'Overview of Decentralized Ledgers',
      collapsed: false,
      items: [
        'overviewledgers/blockchain',
        'overviewledgers/dag',
        'overviewledgers/hypergraph',
      ],
    },
    {
      type: 'category',
      label: 'State Channels',
      collapsed: false,
      items: [
        'statechannels/layer0',
        'statechannels/offchaindata',
        'statechannels/bigdata',
        'statechannels/horizontalscalability/horizontalpartitions',
        'statechannels/horizontalscalability/microservices',
        'statechannels/horizontalscalability/dynamicpartition'
      ],
    },
    {
      type: 'category',
      label: 'Validator Nodes',
      collapsed: false,
      items: [
        'validatornodes/constellationnodes',
        'validatornodes/statechannelnodes',
      ],
    },
    {
      type: 'category',
      label: 'Consensus Algorithms',
      collapsed: true,
      items: [
        'consensus/dag-layer-1',
      ],
    }
  ],
};
