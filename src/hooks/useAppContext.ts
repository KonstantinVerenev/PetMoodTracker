import { useContext } from 'react';

import { AppContext } from '../App.provider';

export const useAppContext = () => useContext(AppContext);
