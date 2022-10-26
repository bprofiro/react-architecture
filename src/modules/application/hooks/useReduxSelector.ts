import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootState } from '../../infrastructure/store'

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;