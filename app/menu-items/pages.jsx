// assets
import { IconKey } from '../../node_modules/@tabler/icons-react';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Master data',
    caption: 'Master Data Management',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Data management',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
             /*   {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                } */
                {
                    id: 'masterDataCompany',
                    title: 'Company',
                    type: 'item',
                    url: '/master/dataGridCompany',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },

                     

            ]
        }
    ]
};

export default pages;
