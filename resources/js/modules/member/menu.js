export default  [
    {
        href: '/member',
        title: 'Dashboard',
        icon: 'fa fa-tachometer-alt'
    },
    {
        title: 'Tokens',
        icon: 'fa fa-user',
        child: [
            {
                href: '/member/request-payout',
                title: 'Listed Tokens',
                external:false

            },
            {
                href: '/member/transactions',
                title: 'List Token',
                external:false

            },

        ]
    },
    {
        title: 'Signal',
        icon: 'fa fa-chart-area',
        badge:'New',
        child: [
            {
                href: '/member/products',
                title: 'Signal Management',
                external:false
            },
            
        ]
    },
    {
        title: 'Article',
        icon: 'fa fa-bullhorn',
        child: [
            {
                href: '/member/blog/view-redirect',
                title: 'All Posts',
                external:true
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