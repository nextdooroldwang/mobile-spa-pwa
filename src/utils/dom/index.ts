export const onTableScrollToTop = (target: HTMLDivElement | null) => {
  if (target) {
    setTimeout(() => {
      target.scrollTop = 0;
    }, 0);
  }
};

export const onScrollToBottom = (target: HTMLDivElement | null) => {
  if (target) {
    setTimeout(() => {
      target.scrollTop = target.scrollHeight;
    }, 0);
  }
};

export const onScrollToCurrent = (
  target: HTMLDivElement | null,
  current: number,
) => {
  if (target) {
    setTimeout(() => {
      target.scrollTop = target.scrollHeight - current;
    }, 0);
  }
};
