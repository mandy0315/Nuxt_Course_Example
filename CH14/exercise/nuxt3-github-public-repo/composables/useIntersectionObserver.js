export function useIntersectionObserver() {
  const observer = ref(null);
  const isIntersecting = ref(false);
  const elRef = ref(null); // 要觀察的元素

  // 參考資料： https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

  const setIntersectionObserver = (el, options = {
    root: null,
    threshold: 0,
  }) => {
    elRef.value = el;
    observer.value = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isIntersecting.value = entry.isIntersecting;
    }, options);

    observer.value.observe(el);
  }

  const unobserve = () => {
    observer.value.unobserve(elRef.value);
  }

  onUnmounted(() => {
    if (observer.value) unobserve();
  });

  return { setIntersectionObserver, isIntersecting, elRef };
}
