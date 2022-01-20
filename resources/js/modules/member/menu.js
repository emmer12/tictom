export default  [
    {
        href: '/',
        title: 'Dashboard',
        icon: 'fa fa-tachometer-alt'
    },
    {
        title: 'Tokens',
        icon: 'fa fa-user',
        child: [
            {
                href: '/tokens',
                title: 'Listed Tokens',
                external:false
            },
            {
                href: '/tokens/list',
                title: 'List Token',
                external:false
            },

        ]
    },
    {
        title: 'Vet',
        icon: 'fa fa-bullhorn',
        guard:'veter',
        child: [
            {
                href: '/vet/',
                title: 'Vet Profiles',
            },
        ]
    },
    {
        title: 'Signal',
        icon: 'fa fa-chart-area',
        badge:'New',
        guard:'veter',
        child: [
            {
                href: '/member/products',
                title: 'Signal Management',
                external:false
            },
            
        ]
    },
    {
        title: 'KYC',
        icon: 'fa fa-shopping-basket',
    },
    {
        title: 'My Account',
        icon: 'fa fa-user',
        child: [
            {
                href: '/profile',
                title: 'Update Profile',
                external:false

            },
            {
                href: '/profile/password',
                title: 'Update Password',
                external:false

            },

        ]
    }
]