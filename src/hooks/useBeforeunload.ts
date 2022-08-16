import { useRef, useEffect } from 'react';

const useBeforeunload = (fn: (event: any) => void) => {
  const cb = useRef(fn);

  useEffect(() => {
    cb.current = fn;
  }, [fn]);

  useEffect(() => {
    const onUnload = (event: any) => cb.current?.(event);

    window.addEventListener('beforeunload', onUnload);

    return () => window.removeEventListener('beforeunload', onUnload);
  }, []);
};
export default useBeforeunload;
