import React, { ReactNode, createContext, useContext, useMemo } from 'react';

import { HOSPITAL_IDS } from '@/config/hospitalIDs';
import { useHospitalDomain } from '@/hooks/useHospitalDomain';
import { KEYS_CONFIG } from '@/stores/localStorage';
import { IDomainDTO } from '@/types/dto/domain';

const HospitalIDContext = createContext<HospitalCommonProviderValues>({
  hospitalID: HOSPITAL_IDS.DKHH,
});

export type HospitalCommonProviderValues = {
  hospitalID: IDomainDTO['hospitalID'];
};

/**
 * Provide hospitalID ,logo by host
 */
function HospitalCommonProvider(props: { children: ReactNode }) {
  const hospitalData = useHospitalDomain();

  const hospitalID = hospitalData?.hospitalID ?? HOSPITAL_IDS.DKHH;

  const providerValue = useMemo(
    () => ({
      hospitalID,
    }),
    [hospitalID],
  );
  localStorage.setItem(KEYS_CONFIG.HOSPITAL_ID, hospitalID);

  return <HospitalIDContext.Provider value={providerValue} {...props} />;
}

const useHospitalCommonProvider = () => useContext(HospitalIDContext);

export { HospitalCommonProvider, useHospitalCommonProvider };
