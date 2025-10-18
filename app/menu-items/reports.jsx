

// assets
import { IconKey } from '../../node_modules/@tabler/icons-react';
import AssessmentIcon from '@mui/icons-material/Assessment';
// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const reports = {
    id: 'reports',
    title: 'reports',
    caption: 'Works reports Management',
    type: 'group',
    children: [
        {
            id: 'reports',
            title: 'lists reports',
            type: 'collapse',
            icon: AssessmentIcon,

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
                    id: 'repDayly',
                    title: 'Dayly reports',
                    type: 'item',
                    url: '/master/dataGridDayliReport',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },

                
                {
                    id: 'mrepWeekly',
                    title: 'weekly reports',
                    type: 'item',
                    url: '/master/dataGridDayliReport',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },

                   {
                    id: 'reoMonthly',
                    title: 'monthly reports',
                    type: 'item',
                    url: '/master/dataGridDayliReport',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },


                     

            ]
        }
    ]
};

export default reports;