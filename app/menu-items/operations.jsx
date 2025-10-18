

// assets
import { IconKey } from '../../node_modules/@tabler/icons-react';
import TaskIcon from '@mui/icons-material/Task';
// constant
const icons = {
    IconKey

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const operation = {
    id: 'operations',
    title: 'Operations',
    caption: 'Works operations',
    type: 'group',
    children: [
        {
            id: 'operation',
            title: 'Operations to do',
            type: 'collapse',
            icon: TaskIcon,

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
                    id: 'formsOperation',
                    title: 'sign works register',
                    type: 'item',
                    url: '/master/dataGridOperation',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },


                     

            ]
        }
    ]
};

export default operation;