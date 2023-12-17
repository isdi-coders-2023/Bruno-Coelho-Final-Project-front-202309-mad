import { createAsyncThunk } from '@reduxjs/toolkit';
import { CaresRepo } from '../../services/cares/api.repo.cares.ts';
import { Care } from '../../entities/care.ts';

export type Params = {
  repo: CaresRepo;
  newCare: FormData;
};

export type Params2 = {
  repo: CaresRepo;
  careType: string;
};

export const loadCaresThunk = createAsyncThunk<Care[], CaresRepo>(
  'load',
  async (repo) => {
    const cares = await repo.getCares();
    return cares;
  }
);

export const getHairCaresThunk = createAsyncThunk<Care[], any>(
  'load',
  async (repo) => {
    const cares = await repo.getHairCares();
    return cares;
  }
);

export const getEyebrowsCaresThunk = createAsyncThunk<Care[], any>(
  'load',
  async (repo) => {
    const cares = await repo.getEyebrowsCares();
    return cares;
  }
);

export const getEyelashesCaresThunk = createAsyncThunk<Care[], any>(
  'load',
  async (repo) => {
    const cares = await repo.getEyelashesCares();
    return cares;
  }
);

export const getNailsCaresThunk = createAsyncThunk<Care[], any>(
  'load',
  async (repo) => {
    const cares = await repo.getNailsCares();
    return cares;
  }
);

export const createCareThunk = createAsyncThunk<Care, Params>(
  'create',
  async ({ repo, newCare }) => {
    const finalCare = await repo.createCare(newCare);
    return finalCare;
  }
);

export const deleteCareThunk = createAsyncThunk<
  Care['id'],
  {
    repo: CaresRepo;
    id: Care['id'];
  }
>('delete', async ({ repo, id }) => {
  await repo.deleteCare(id);
  return id;
});

export const editCareThunk = createAsyncThunk<any, any>(
  'edit',
  async ({ repo, newBody, id }) => {
    await repo.editCare(newBody, id);
    return id;
  }
);
