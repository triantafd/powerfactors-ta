export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: number | undefined;
  return function executedFunction(...args: Parameters<T>): ReturnType<T> {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait) as any;
    return undefined as any; // Since the original function doesn't return anything, we need to cast this to any.
  } as T;
};
