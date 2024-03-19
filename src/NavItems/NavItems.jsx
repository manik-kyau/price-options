import PropTypes from 'prop-types';
const NavItems = ({route}) => {
    return (
        <div>
            <li className='w-full text-xl px-4 text-white hover:bg-yellow-500 font-medium mr-12'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
NavItems.propTypes = {
    route: PropTypes.object.isRequired,
}

export default NavItems;