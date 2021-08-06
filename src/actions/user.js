import { userType } from './actionsType';

const getUserInfo = () => ({
    type: userType.GET_USER_INFO,
});

export { getUserInfo }