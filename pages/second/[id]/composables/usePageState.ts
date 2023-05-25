export const STATE_INJECT_KEY = Symbol() as InjectionKey<
  ReturnType<typeof usePageState>
>

export function usePageState() {
  const state = ref(1)
  return { state }
}
