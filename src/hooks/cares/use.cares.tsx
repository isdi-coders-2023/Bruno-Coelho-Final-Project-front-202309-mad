import { useCallback, useMemo } from 'react';
import { CaresRepo } from '../../services/cares/api.repo.cares.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { Care } from '../../entities/care.ts';
import {
  createCareThunk,
  deleteCareThunk,
  editCareThunk,
  getHairCaresThunk,
  getEyebrowsCaresThunk,
  getEyelashesCaresThunk,
  getNailsCaresThunk,
  loadCaresThunk,
} from '../../slices/cares/cares.thunks.ts';
import { setCurrentCare } from '../../slices/cares/cares.slice.tsx';

export function useCares() {
  const { currentCare, cares } = useSelector(
    (state: RootState) => state.caresState
  );
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new CaresRepo(token), []);

  const loadCares = useCallback(async () => {
    dispatch(loadCaresThunk(repo));
  }, [repo]);

  const loadCaresByType = useCallback(
    async (careType: string) => {
      if (careType == 'hair') {
        dispatch(getHairCaresThunk(repo));
      } else if (careType == 'eyebrows') {
        dispatch(getEyebrowsCaresThunk(repo));
      } else if (careType == 'eyelashes') {
        dispatch(getEyelashesCaresThunk(repo));
      } else if (careType == 'nails') {
        dispatch(getNailsCaresThunk(repo));
      }
    },
    [repo]
  );

  const createCare = async (newCare: FormData) => {
    dispatch(
      createCareThunk({
        repo,
        newCare,
      })
    );
  };

  const deleteCare = async (id: Care['id']) => {
    dispatch(
      deleteCareThunk({
        id,
        repo,
      })
    );
  };

  const editCare = async (
    newBody: {
      name: string;
      price: string;
    },
    id: Care['id']
  ) => {
    dispatch(
      editCareThunk({
        repo,
        newBody,
        id,
      })
    );
  };

  const handleDetailsPage = async (care: Care) => {
    dispatch(setCurrentCare(care));
  };

  return {
    loadCares,
    loadCaresByType,
    createCare,
    deleteCare,
    editCare,
    handleDetailsPage,
    currentCare,
    cares,
  };
}
