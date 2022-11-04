import { useDispatch } from 'react-redux';

import { AppDispatch } from '@store/redux';

export const useReduxDispatch = () => useDispatch<AppDispatch>();