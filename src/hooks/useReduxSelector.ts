import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootState } from '@store/redux'

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;