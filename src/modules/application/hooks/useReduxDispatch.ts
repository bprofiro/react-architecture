import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../infrastructure/store';

export const useReduxDispatch = () => useDispatch<AppDispatch>();