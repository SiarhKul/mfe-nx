import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { TConfigStoreType } from './configureStore';

type TRootState = TConfigStoreType['store'];

export type AppThunkDispatch = ThunkDispatch<TRootState, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
