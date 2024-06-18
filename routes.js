const ROUTES = [
    {
      url: '/app',
        auth: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:3000/home",
            changeOrigin: true,
            pathRewrite: {
                [`^/app`]: '',
            },
        }
    },
    {
      url: '/',
        auth: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:3000/",
            changeOrigin: true,
            pathRewrite: {
                [`^/app`]: '',
            },
        }
    },
    {
        url: '/personal-details',
        auth: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:5002/pd/details",
            changeOrigin: true,
            pathRewrite: {
                [`^/personal-details`]: '',
            },
        }
    },
    {
        url: '/work-details',
        auth: false,
        proxy: {
            target: "http://localhost:5002/wd/details",
            changeOrigin: true,
            pathRewrite: {
                [`^/work-details`]: '',
            },
        }
    },
    {
        url: '/pdf',
        auth: false,
        proxy: {
            target: "http://localhost:5003/pdf",
            changeOrigin: true,
            pathRewrite: {
                [`^/pdf`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;
