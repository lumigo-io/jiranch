export const optionDefinitions = [
    { name: 'select-sprint', alias: 's', type: Boolean, description: 'Select sprint to take issues from.' },
    { name: 'skip-checkout', type: Boolean, description: 'Skip checkout after creation.' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Help me, please!' }
];

export const sections = [
    {
        header: 'Jiranch',
        content: 'Easily create Git branches from your sprint issues'
    },
    {
        header: 'Actions',
        content: ['$ jiranch', '$ jiranch init', '$ jiranch clear']
    },
    {
        header: 'Options',
        optionList: optionDefinitions
    }
];
