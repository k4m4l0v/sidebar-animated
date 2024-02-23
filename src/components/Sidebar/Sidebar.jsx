import './sidebar.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'
import SpanComponent from './widgets/SpanComponent';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            path: ''
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({isOpened: !state.isOpened}));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState((state) => ({path: path}));
    };

    render() {
        const { isOpened } = this.state;

        return (
            <div className={`sidebar margin-right ${isOpened ? 'opened__sidebar' : 'closed__sidebar'}`}>
                <div className={`logo-title ${isOpened ? 'opened__logo-title' : 'closed__logo-title'}`}>
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                        className='logo margin-right'
                    />
                    {isOpened ?
                        <SpanComponent prop='TensorFlow' />
                        :
                        false
                    }
                    <button onClick={ this.toggleSidebar } className={`toggle ${isOpened ? 'opened__toggle' : 'closed__toggle'}`}>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }  color='white' />
                    </button>
                </div>

                <div className='top-routes'>
                    {
                        routes.map((route) => (
                            <div key={ route.title } onClick={ () => this.goToRoute(route.path) } className={`route ${route.path === this.state.path ? 'route-active' : ''} ${isOpened ? 'opened__route' : 'closed__route margin-right'}`}>
                                <FontAwesomeIcon icon={ route.icon } />
                                {isOpened ?
                                    <SpanComponent prop={route.title} />
                                    :
                                    false
                                }
                            </div>
                        ))
                    }
                </div>

                <div className='bottom-routes'>
                    {
                        bottomRoutes.map((route) => (
                            <div key={ route.title } onClick={ () => this.goToRoute(route.path) } className={`route margin-right ${route.path === this.state.path ? 'route-active' : ''} ${isOpened ? 'opened__route' : 'closed__route margin-right'}`}>
                                <FontAwesomeIcon icon={ route.icon } />
                                {isOpened ?
                                    <SpanComponent prop={route.title} />
                                    :
                                    false
                                }
                            </div>
                        ))
                    }
                </div>
            </div>  
        );
    }
}
