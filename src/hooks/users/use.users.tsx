import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ac } from '../../slices/users/users.slice';
import { loginThunk, loginTokenThunk } from '../../slices/users/users.thunk';
import { UsersRepo } from '../../services/users/api.repo.users';
import { LocalStorage } from '../../services/local.storage';

export function useUsers() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new UsersRepo();
  const userStore = new LocalStorage<{ token: string }>('user');

  const register = (newUser: any) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: any) => {
    dispatch(loginThunk({ loginUser, repo, userStore }));
  };

  const loginWithToken = () => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispatch(loginTokenThunk({ token, repo, userStore }));
    }
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    register,
    login,
    loginWithToken,
    logout,
    loggedUser,
  };
}
