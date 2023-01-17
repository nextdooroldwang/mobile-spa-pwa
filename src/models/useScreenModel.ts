import { configResponsive, useResponsive, useUpdateEffect } from 'ahooks';
import { useState } from 'react';

export default function useScreenModel() {
  configResponsive({
    small: 0,
    middle: 1180,
    large: 1400,
  });

  const responsive = useResponsive();

  const [isiIlineCollapsedState, setIsiIlineCollapsedState] = useState(
    !responsive['middle'],
  );

  useUpdateEffect(() => {
    setIsiIlineCollapsedState(!responsive['middle']);
  }, [responsive]);

  return {
    isiIlineCollapsed: isiIlineCollapsedState,
    setIsiIlineCollapsed: setIsiIlineCollapsedState,
  };
}
