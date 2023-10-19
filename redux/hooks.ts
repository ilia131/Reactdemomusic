import { useSelector , useDispatch}  from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux/es/types';
import { RootState, AppDispatch } from './store';

export const useAppDispath: () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector