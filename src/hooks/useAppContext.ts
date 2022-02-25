import { useContext } from 'react';

import { appContext } from '../App.provider';

export const useAppContext = () => useContext(appContext);
